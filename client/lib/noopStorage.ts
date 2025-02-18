const noopStorage = {
    getItem: async () => null,
    setItem: async () => {},
    removeItem: async () => {},
  };
  
  export default noopStorage;
  