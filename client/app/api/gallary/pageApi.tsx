import axios from 'axios';
// Create a new job post
export const addGallary = async (formData: any) => {
    try {
        console.log("asdasda", formData);
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/gallary`, formData);
        console.log("asdasda", response);
        return response.data;
    } catch (error) {
        console.error('Error creating gallary:', error);
        throw error;
    }
};
// Update an existing gallery
export const updateGallary = async (id: string, formData: any) => {
    try {
        console.log("Updating gallary with ID:", id);
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API}/gallary/${id}`, formData);
        console.log("Updated gallary response:", response);
        return response.data;
    } catch (error) {
        console.error('Error updating gallary:', error);
        throw error;
    }
};
export const getGallary = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/gallary`);
        console.log(response.data);
        return response.data;
    } catch (err) {
        console.error('Error get Response Data', err);
        throw err;
    }
}
// Update an existing gallery
export const deleteGallary = async (id: string) => {
    try {
        
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_API}/gallary/${id}`);
        console.log("deleted gallary response:", response);
        return response.data;
    } catch (error) {
        console.error('Error deleting gallary:', error);
        throw error;
    }
};