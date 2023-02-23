import { examInstances } from "./instances"

const ApiContacts = {
    getContacts: async () => {
        try {
            const response = await examInstances.get(`/contacts.json`)
            return response.data
        } catch (err) {
            console.log(err)
        }
    },
    addContact: async (contact) => {
        try {
            await examInstances.post('/contacts.json', contact)
        } catch (err) {
            console.log(err)
        }
    },
    removeContact: async (i) => {
        try {
            await examInstances.delete(`/contacts/${i}.json`)
        } catch (err) {
            console.log(err)
        }
    },
    editContact: async (i, contact) => {
        try {
            await examInstances.put(`/contacts/${i}.json`, contact)
        } catch (err) {
            console.log(err)
        }
    }
}

export default ApiContacts