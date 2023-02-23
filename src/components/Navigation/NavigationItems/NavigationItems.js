import React from "react";
import './NavigationItems.css'
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
    return (
        <ul className={'NavigationItems'}>
            <NavigationItem to={'/'} end>Contacts</NavigationItem>
            <NavigationItem to={'/add-contact'}  end>Add new contact</NavigationItem>
        </ul>
    )
}

export default NavigationItems