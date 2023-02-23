import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContact } from "../../store/contacts.slise";
import './AddContact.css';

const AddContact = () => {
    const [inputValues, setInputValues] = useState({
        name: '',
        phone: '',
        email: '',
        photo: ''
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const inputHandler = (e) => {
        setInputValues(prevState => {
            return {...prevState, [e.target.name]: e.target.value}
        })
    }

    const backToContacts = () => {
        navigate(-1)
    }

    const submit = (e) => {
        e.preventDefault()
        dispatch(addContact(inputValues))
        navigate(-1)
    }
    return (
        <div className="submitDiv">
            <form onSubmit={submit} className={'submit'}>
                <label>Name <input type={'text'} onChange={inputHandler} name={'name'} placeholder={'Name'} required/></label>
                <label>Phone <input type={'number'} onChange={inputHandler} name={'phone'} placeholder={'Phone'} required/></label>
                <label>Email <input type={'email'} onChange={inputHandler} name={'email'} placeholder={'Email'} required/></label>
                <label>Photo <input type={'text'} onChange={inputHandler} name={'photo'} placeholder={'Photo URL'} required/></label>
                <label>Photo preview <img src={inputValues.photo ? inputValues.photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR02b24v2SEXar7UdWCBgpSeVEGGGNGX9o9Bg&usqp=CAU'} alt='photo' className={'photo'}/></label>
                <button>Add</button>
            </form>
            <button className="back" onClick={backToContacts}>X</button>
        </div>
    )
}

export default AddContact