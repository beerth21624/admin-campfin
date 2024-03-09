import ConfigAxios from "../ConfigAxios";

interface campBody{
    perPages?: number,
    currentPage?: number,
    search?: string,
    sortField?: string,
    sortType?: string
}

export default class PlaceService {
    static parh = '/camp'
    static async getPlace(body:campBody) {
        return await ConfigAxios.post(`${this.parh}/get-camps`, body);
    }
}
