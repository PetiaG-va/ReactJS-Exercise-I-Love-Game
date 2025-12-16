import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useUserContext } from "../../contexts/UserContext.jsx";

export default function Logout() {
    const { logoutHandler } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        logoutHandler()
            .then(() => navigate('/'))
            .catch(() => {
                alert('Problem with logout')
                navigate('/');
            });
    }, [logoutHandler, navigate]);

    return null;
};