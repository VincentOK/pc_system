import type { AppRouteModule } from '/#/store';
import {http} from '../untils/http';
import {
    getListModel,
    getListParmas
} from './model/home';
enum Api {
    treeDeptList = `/exam/examPlace/findExamPlaceByType`,
}
export const getRoutes = (data?:getListParmas):Promise<AppRouteModule[]> => {
    return http.request('get', Api.treeDeptList, data as object);
};
