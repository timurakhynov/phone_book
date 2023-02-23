import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./contacts.slise";


export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer
    }
})