import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/contacts.slise";
import './Backdrop.css'


const Backdrop = () => {
    const modal = useSelector(state => state.contacts.modal)
    const dispatch = useDispatch()
    return (
        <>
            {modal ? <div onClick={() => dispatch(closeModal())} className="Backdrop" /> : null}
        </>
    )
}

export default Backdrop