import axios from 'axios';


console.log(`${process.env.NEXT_PUBLIC_API}`);

// Create a new job post
export const getInTouch = async (contactData: any) => {
    try {
        console.log("asdasda", contactData);
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/contactList`, contactData);
        console.log("asdasda", response);
        return response.data;
    } catch (error) {
        console.error('Error creating job post:', error);
        throw error;
    }
};
