import axios from 'axios';


console.log(`${process.env.NEXT_PUBLIC_API}`);
// Fetch all job posts
export const getClientTestomonials = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/testomonial/`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching job posts:', error);
        throw error;
    }
};

// Fetch a single job post by ID
export const getClientTestomonialById = async (id: string) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/testomonial/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching job post with ID ${id}:`, error);
        throw error;
    }
};

// Create a new job post
export const createClientTestomonial = async (clientTestomonial: any) => {
    try {
        console.log("asdasda", clientTestomonial);
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/testomonial`, clientTestomonial);
        console.log("asdasda", response);
        return response.data;
    } catch (error) {
        console.error('Error creating job post:', error);
        throw error;
    }
};

// Update a job post
export const updateClientTestomonial = async (id: string, clientTestomonial: any) => {
    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API}/testomonial/${id}`, clientTestomonial);
        return response.data;
    } catch (error) {
        console.error(`Error updating job post with ID ${id}:`, error);
        throw error;
    }
};

// Delete a job post
export const deleteClientTestomonial = async (id: string) => {
    try {
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_API}/testomonial/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting job post with ID ${id}:`, error);
        throw error;
    }
};
