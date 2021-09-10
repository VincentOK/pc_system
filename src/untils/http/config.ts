import { AxiosRequestConfig } from 'axios';
import { excludeProps } from './utils';
// Import {getToken} from "../../hooks/token"
export interface httpSuccessCode {
  code:number;
  message:string;
  result: any;
}
// @ts-ignore
const baseURL:string = import.meta.env.VITE_APP_BASE_API || '';
/**
 * 默认配置
 */
export const defaultConfig: AxiosRequestConfig = {
  baseURL: baseURL,
  timeout: 10000, //10秒超时
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    // "multipart/form-data"
    'X-Requested-With': 'XMLHttpRequest',
    // "token":getToken().refToken.value,
    'Authorization': 'xxix'
  }
};

export function genConfig(config?: AxiosRequestConfig): AxiosRequestConfig {
  if (!config) {
    return defaultConfig;
  }

  const { headers } = config;
  if (headers && typeof headers === 'object') {
    defaultConfig.headers = {
      ...defaultConfig.headers,
      ...headers
    };
  }
  return { ...excludeProps(config!, 'headers'), ...defaultConfig };
}

export const METHODS = ['post', 'get', 'put', 'delete', 'option', 'patch'];
