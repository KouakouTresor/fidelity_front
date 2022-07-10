import axios from 'axios';
import { string } from 'yup/lib/locale';
const Api = {
    Server: 'http://localhost:8080',
    BaseUrl: '/clients',
};

interface MyFormValues {
    code: string;
    name: string;
    adress: string;
    ville: string;
    phone: string;
    email: string;
    dateCreation: string;
    fidelity: number;
}
class ClientsService {
    getAllClients = () => {
        return axios(`${Api.Server}${Api.BaseUrl}`);
    };

    getClientByCode = (param: string) => {
        return axios.get(`${Api.Server}${Api.BaseUrl}/search_fcode/${param}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        });
    };

    createClient = (client: MyFormValues) => {
        return axios.post(`${Api.Server}${Api.BaseUrl}/post`);
    };

    update = (param: string) => {
        return axios.put(`${Api.Server}${Api.BaseUrl}/id/${param}`);
    };

    deleteClient = (param: string) => {
        return axios.delete(`${Api.Server}${Api.BaseUrl}/delete/${param}`);
    };
}

export default new ClientsService();
