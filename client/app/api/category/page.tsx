import axios from 'axios';


console.log(`${process.env.NEXT_PUBLIC_API}`);
// Fetch all Categorys
export const getCategory = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/categories/`);
    console.log("Category",response);
    return response.data;
  } catch (error) {
    console.error('Error fetching Category:', error);
    throw error;
  }
};

// Fetch a single Category by ID
export const getCategoryById = async (id: string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Category with ID ${id}:`, error);
    throw error;
  }
};

// Create a new Category
export const createCategory = async (jobPost: any) => {
  try {
    console.log("asdasda",jobPost);
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/categories`, jobPost);
    console.log("asdasda",response);
    return response.data;
  } catch (error) {
    console.error('Error creating Category:', error);
    throw error;
  }
};

// Update a Category
export const updateCategory = async (id: string, jobPost: any) => {
  try {
    const response = await axios.put(`${process.env.NEXT_PUBLIC_API}/categories/${id}`, jobPost);
    return response.data;
  } catch (error) {
    console.error(`Error updating Category with ID ${id}:`, error);
    throw error;
  }
};

// Delete a Category
export const deleteCategory = async (id: string) => {
  try {
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_API}/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting Category with ID ${id}:`, error);
    throw error;
  }
};
