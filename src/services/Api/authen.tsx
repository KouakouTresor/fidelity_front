import axios from 'axios';
const Api = {
    Server: 'http://localhost:8080',
    BaseUrl: '/clients',
};

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

    deleteClient = (param: string) => {
        return axios.delete(`${Api.Server}${Api.BaseUrl}/delete/${param}`);
    };
}
