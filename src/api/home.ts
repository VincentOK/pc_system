import {http} from '../untils/http';
import {
    getListModel,
    getListParmas
} from './model/home';
enum Api {
    treeDeptList = `/exam/examPlace/findExamPlaceByType`,
}
export const postUserRecord = (data?:getListParmas):Promise<getListModel[]> => {
    return http.request('get', Api.treeDeptList, data as object);
};
