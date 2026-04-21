import axios from "axios";

const apiCredientials = axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true,
})
export const registerUser = async ({ username, email, password }) => {
    try {
        const response = await apiCredientials.post(
            "/register",
            { username, email, password }
        );

        return response.data;
    } catch (err) {
        console.log(`error in register user ${err}`);
    }
};

export const loginUser = async ({ email, password }) => {
    try {
        const response = await apiCredientials.post(
            "/login",
            {
                email,
                password,
            },
            
        );
        return response.data;
    } catch (err) {
        console.log(`error  axios while login the user ${err} `);
    }
};

export const logoutUser = async () => {
    try {
        const response = await apiCredientials.get(
            "/logout",
            {},
            
        );
        return response.data;
    } catch (err) {
        console.log(`error  axios while logout the user ${err} `);
    }
};

export const getCurrentUser = async () => {
    try {
        const response = await apiCredientials.get(
            "/getMeInfo",
            {},
           
        );
        return response.data;
    } catch (err) {
        console.log(`error  axios while getting current user ${err} `);
    }
};
