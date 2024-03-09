import ConfigAxios from "../ConfigAxios";

interface tripBody{
    perPages?: number,
    currentPage?: number,
    search?: string,
    sortField?: string,
    sortType?: string
}

export default class TripService {
    static parh = '/trip'
    static async getTrip(body:tripBody) {
        return await ConfigAxios.post(`${this.parh}/get-trips`, body);
    }
}
