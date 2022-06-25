import axios from 'axios';
const Api = {
    Server: "http://localhost:8080",
    BaseUrl: "/api/clients"
}

class ClientsService{
 getAllClients = () => {
   return axios(`${Api.Server}${Api.BaseUrl}/search_all`)
};

 getClientByCode = (code: string) => {
    fetch(`${Api.Server}${Api.BaseUrl}/search_fcode/${code}`)
        .then((res) => {
            res.json();
        })
        .catch((err) => console.log(err));
};
}

export default new ClientsService();
