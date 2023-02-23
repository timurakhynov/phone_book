import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/UI/Modal/Modal";
import { openModal } from "../../store/contacts.slise";
import './Contacts.css';

const Contacts = () => {
    const contacts = useSelector(state => state.contacts.contacts)
    const dispatch = useDispatch()

    return (
        <div>
            <Modal/>
            {Object.keys(contacts).length ? Object.keys(contacts).map((key) => {
                    return <div key={key} className={'contactItem'} onDoubleClick={() => dispatch(openModal(key))}>
                            <img src={contacts[key]?.photo} className={'contactItem__img'}/>
                            <h1>{contacts[key]?.name}</h1>
                    </div>
                }) : <h1 className="Empty">Contact list is empty</h1>}
        </div>
    )
}

export default Contacts