import {AxiosResponse} from "axios";
import {instance, loginInstance} from "./axios.instance";


function login(username: string, password: string): Promise<AxiosResponse<any>> {
    return loginInstance.post('/auth/token', {
        'grant_type': 'password',
        'client_id': 'QaEH0z8iLq0cknNSYN9yS24OSZg8n8VxIfHwlwGS',
        'client_secret': 'tY6ZgwYtRsmE2upMNL1JuHlb0QuXuJAAG6rwyufO2JimiiJ4UbCs4tuCECznJrNvKLvaItVOt5p7fQhO6dl3MVj3bxVZLqhZFGRJS6HHNBKCmIwb7uxtX1U3yYW7M21O',
        username,
        password
    })
}

const api = (() => {
    return instance
})();

export {
    api as default,
    login
}