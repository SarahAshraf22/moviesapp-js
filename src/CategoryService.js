import { BaseService } from "./BaseService";

export default class CategoryService extends BaseService {
    constructor() {
        super('https://frontend-recruitment-challenge.herokuapp.com/categories');
    }
}