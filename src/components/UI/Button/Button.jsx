import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openEdit, removeContact } from "../../../store/contacts.slise";
import './Button.css';

const Button = (props) => {
    const {key} = useSelector(state => state.contacts)
    const dispatch = useDispatch()

    const ButtonFunc = () => {
        if (props.children === 'Delete') {
            dispatch(removeContact(key))
            dispatch(closeModal())
        } else {
            dispatch(openEdit())
        }
    }
    return (
        <button className="button" onClick={ButtonFunc}>
            {props.children}
        </button>
    )
}

export default Button