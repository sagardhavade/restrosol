import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  id: string;
  name: string;
  email: string;
  type: string;
  status: string;
  date: string;
}

interface ContactState {
  contacts: Contact[];
  loading: boolean;
  error: string | null;
}

const initialState: ContactState = {
  contacts: [],
  loading: false,
  error: null,
};
// Define specific action payload types
interface AddContactPayload {
  name: string;
  email: string;
  type: string;
  status: string;
}

interface UpdateContactPayload {
  id: string;
  status: string;
}
const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetchContacts: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchContactsSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.contacts = action.payload;
    },
    fetchContactsFailure: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
    // addContact: (state, action: PayloadAction<any>) => {
    //   state.loading = true;
    //   state.error = null;
    //   console.log('Slice');
    // },
    addContact: (state, action: PayloadAction<AddContactPayload>) => {
      state.loading = true;
      state.error = null;
    },

    addContactSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.contacts.push(action.payload);
    },

    addContactFailure: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateContact: (state) => {
      state.loading = true;
      state.error = null;
    },

    updateContactSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      const index = state.contacts.findIndex((contact) => contact.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },

    updateContactFailure: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteContact: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteContactSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
    deleteContactFailure: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchContacts,
  fetchContactsSuccess,
  fetchContactsFailure,
  addContact,
  addContactSuccess,
  addContactFailure,
  updateContact,
  updateContactSuccess,
  updateContactFailure,
  deleteContact,
  deleteContactSuccess,
  deleteContactFailure,
} = contactSlice.actions;

export default contactSlice.reducer;
