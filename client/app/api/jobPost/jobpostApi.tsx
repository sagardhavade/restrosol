import axios from 'axios';


console.log(`${process.env.NEXT_PUBLIC_API}`);
// Fetch all job posts
export const getJobPosts = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/jobpost/`);
   // console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching job posts:', error);
    throw error;
  }
};

// Fetch a single job post by ID
export const getJobPostById = async (id: string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/jobpost/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching job post with ID ${id}:`, error);
    throw error;
  }
};

// Create a new job post
export const createJobPost = async (jobPost: any) => {
  try {
    console.log("asdasda",jobPost);
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/jobpost`, jobPost);
    console.log("asdasda",response);
    return response.data;
  } catch (error) {
    console.error('Error creating job post:', error);
    throw error;
  }
};

// Update a job post
export const updateJobPost = async (id: string, jobPost: any) => {
  try {
    const response = await axios.put(`${process.env.NEXT_PUBLIC_API}/jobpost/${id}`, jobPost);
    return response.data;
  } catch (error) {
    console.error(`Error updating job post with ID ${id}:`, error);
    throw error;
  }
};

// Delete a job post
export const deleteJobPost = async (id: string) => {
  try {
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_API}/jobpost/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting job post with ID ${id}:`, error);
    throw error;
  }
};
