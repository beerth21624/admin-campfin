import ConfigAxios from "../ConfigAxios";


export default class AuthService {
    static parh = '/auth'
    static async loginWithGoogle() {
        const response = await ConfigAxios.get(`${this.parh}/google`,);
        return response.data;
    }
}
