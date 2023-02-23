import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, editContact } from "../../../store/contacts.slise";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";
import './Modal.css'


const Modal = () => {
    const {modal, key, edit} = useSelector(state => state.contacts)
    const contacts = useSelector(state => state.contacts.contacts)
    const dispatch = useDispatch()

    useEffect(() => {
        setInputValues(contacts[key])
    }, [key])

    const [inputValues, setInputValues] = useState({})

    const submit = (e) => {
        e.preventDefault()
        dispatch(editContact({id: key, contact: inputValues}))
        setInputValues({})
        dispatch(closeModal())
    }

    const inputHandler = (e) => {
        setInputValues(prevState => {
            return {...prevState, [e.target.name]: e.target.value}
        })
    }

    return (
        <>
            <Backdrop/>
            <div 
                className="Modal"
                style={{
                    transform: modal ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: modal ? '1' : '0'
                }}
            >
                {edit ?
                <>
                    <form onSubmit={submit} className={'submit'}>
                        <label>Name <input value={inputValues.name} type={'text'} onChange={inputHandler} name={'name'} placeholder={'Name'} required/></label>
                        <label>Phone <input value={inputValues.phone} type={'number'} onChange={inputHandler} name={'phone'} placeholder={'Phone'} required/></label>
                        <label>Email <input value={inputValues.email} type={'email'} onChange={inputHandler} name={'email'} placeholder={'Email'} required/></label>
                        <label>Photo <input value={inputValues.photo} type={'text'} onChange={inputHandler} name={'photo'} placeholder={'Photo URL'} required/></label>
                        <label>Photo preview <img src={inputValues.photo ? inputValues.photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR02b24v2SEXar7UdWCBgpSeVEGGGNGX9o9Bg&usqp=CAU'} alt='photo' className={'photo'}/></label>
                        <button>Update contact</button>
                    </form>
                </>
                : <>
                    <div className="allInfo">
                    <img src={contacts[key]?.photo} className={'contactItem__img'}/>
                    <div className="contactInfo">
                        <h1>{contacts[key]?.name}</h1>
                        <a href={`tel: ${contacts[key]?.phone}`} className="ContactsButton">{contacts[key]?.phone}</a>
                        <a href={`tel: ${contacts[key]?.email}`} className="ContactsButton">{contacts[key]?.email}</a>
                    </div>
                    </div>
                    <div className="Buttons">
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                    </div>
                </> 
                 }
            </div>
        </>
    )
}

export default Modal