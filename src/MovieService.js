import { BaseService } from "./BaseService";

export default class MovieService extends BaseService {
    constructor() {
        super('https://frontend-recruitment-challenge.herokuapp.com/movies');
    }
}