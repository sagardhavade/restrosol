import axios from 'axios';
// Create a new job post
export const login = async (formData: any) => {
    try {
        console.log("asdasda", formData);
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/users/login`, formData);
        console.log("asdasda", response);
        return response.data;
    } catch (error) {
        console.error('Error creating Achievement:', error);
        throw error;
    }
};

export const register = async (formData: any) => {
    try {
        console.log("asdasda", formData);
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/users/register`, formData);
        console.log("asdasda", response);
        return response.data;
    } catch (error) {
        console.error('Error creating Achievement:', error);
        throw error;
    }
};

