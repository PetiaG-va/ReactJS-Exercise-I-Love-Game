import { useContext } from "react";
import UserContext from "../contexts/userContext.js";

const baseUrl = 'http://localhost:3030';

export default function useRequest() {
    const {user, isAuthenticated} = useContext(UserContext)

    const request = async (url, method, data) => {
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

        const response = await fetch(`${baseUrl}${url}`, options);

        if (isAuthenticated) {
            options.headers = {
                ...options.headers,
                'X-Authorization': user.accessToken
            }
        }
        
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