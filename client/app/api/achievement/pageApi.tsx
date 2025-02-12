import axios from 'axios';
// Create a new job post
export const addAchievement = async (formData: any) => {
    try {
        console.log("asdasda", formData);
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/achievement`, formData);
        console.log("asdasda", response);
        return response.data;
    } catch (error) {
        console.error('Error creating Achievement:', error);
        throw error;
    }
};

// Update an existing gallery
export const updateAchievement = async (id: string, formData: any) => {
    try {
        console.log("Updating gallary with ID:", id);
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API}/achievement/${id}`, formData);
        console.log("Updated gallary response:", response);
        return response.data;
    } catch (error) {
        console.error('Error updating gallary:', error);
        throw error;
    }
};

export const getAchievement = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/achievement`);
        console.log("data",response.data);
        return response.data;
    } catch (err) {
        console.error('Error get Response Data', err);
        throw err;
    }
}

export const deleteAchievement = async(id:string)=>{
    try{
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_API}/achievement/${id}`);
        return response.data;

    }catch(err)
    {
        console.log("error",err);
        throw err;
    }
}