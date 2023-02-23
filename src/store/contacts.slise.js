import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiContacts from "../api/apiContacts";


const namespace = 'contacts';

export const getContacts = createAsyncThunk(
    `${namespace}/getContacts`,
    async () => {
        return await ApiContacts.getContacts()
    }
)

export const addContact = createAsyncThunk(
    `${namespace}/addContact`,
    async (contact, {dispatch}) => {
        await ApiContacts.addContact(contact)
        dispatch(getContacts())
    }
)

export const removeContact = createAsyncThunk(
    `${namespace}/removeContact`,
    async (id, {dispatch}) => {
        await ApiContacts.removeContact(id)
        dispatch(getContacts())
    }
)

export const editContact = createAsyncThunk(
    `${namespace}/editContact`,
    async (data, {dispatch}) => {
        await ApiContacts.editContact(data.id, data.contact)
        dispatch(getContacts())
    }
)

export const contactsSlice = createSlice({
    name: namespace,
    initialState: {
        loading: false,
        contacts: {},
        modal: false,
        key: '',
        edit: false
    },
    reducers: {
        openModal(state, action) {
            state.modal = true
            state.key = action.payload
        },
        closeModal(state) {
            state.modal = false
            state.key = ''
            state.edit = false
        },
        openEdit(state) {
            state.edit = true
        }
    },
    extraReducers: builder => {
        builder
        .addCase(getContacts.pending, (state) => {
            state.loading = true
        })
        .addCase(getContacts.rejected, (state) => {
            state.loading = false
        })
        .addCase(getContacts.fulfilled, (state, action) => {
            state.loading = false
            state.contacts = action.payload && Object.keys(action.payload) ? action.payload : {}
        })
        .addCase(addContact.pending, (state) => {
            state.loading = true
        })
        .addCase(addContact.rejected, (state) => {
            state.loading = false
        })
        .addCase(addContact.fulfilled, (state) => {
            state.loading = false
        })
    }
})

export const {closeModal, openModal, openEdit} = contactsSlice.actions