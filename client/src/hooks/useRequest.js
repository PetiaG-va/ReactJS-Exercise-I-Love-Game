import { useUserContext } from "../contexts/UserContext.jsx";

const baseUrl = 'http://localhost:3030';

export default function useRequest() {
    const {user, isAuthenticated} = useUserContext();

    const request = async (url, method, data, config = {}) => {
        let options = {};

        if (method) {
            options.method = method;
        };

        if (data) {
            options.headers = {
                'content-type': 'application/json'
            };

            options.body = JSON.stringify(data);
        }

        
        if (config.accessToken || isAuthenticated) {
            options.headers = {
                ...options.headers,
                'X-Authorization': config.accessToken || user.accessToken,
            }
        }

        const response = await fetch(`${baseUrl}${url}`, options);
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }
        
        const result = await response.json();
        return result;
    }; 

    return {
        request,
    }
}