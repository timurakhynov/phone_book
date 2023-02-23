import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AddContact from "./containers/AddContact/AddContact";
import Contacts from "./containers/Contacts/Contacts";
import { getContacts } from "./store/contacts.slise";

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getContacts())
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Contacts/>} />
          <Route path='/add-contact' element={<AddContact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
