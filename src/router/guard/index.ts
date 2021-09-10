import router from '../index';
import { createPageGuard } from './pageGuard';

export function setupRouterGuard() {
  createPageGuard(router);
}
