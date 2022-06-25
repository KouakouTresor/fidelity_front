import axios from 'axios';
const Api = {
    Server: 'http://localhost:8080',
    BaseUrl: '/api/clients',
};

class ClientsService {
    getAllClients = () => {
        return axios(`${Api.Server}${Api.BaseUrl}/search_all`);
    };

    getClientByCode = (param: string) => {
        /* onst params = new URLSearchParams(param); */
        return axios.get(`${Api.Server}${Api.BaseUrl}/search_fcode/${param}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        });
    };
}

export default new ClientsService();
