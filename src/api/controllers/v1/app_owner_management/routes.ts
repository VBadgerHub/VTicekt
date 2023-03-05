import { BASE_URL } from '../_BaseUrl_v1.js';
import adminController from './controller.js'

export default (router: any) =>{
    router.get(`${BASE_URL}/admin`, adminController.adminTest);
}