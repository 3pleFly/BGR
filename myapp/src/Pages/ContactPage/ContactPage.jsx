import React from 'react'
import jsonProfile from './../../Data/Profile.json';
import './ContactPage.css'
import DrawerComp from '../../Home/Components/DrawerComp/DrawerComp';

const ContactPage = () => {
    return (
        <div>
            <DrawerComp />
            <div>
                <img className='customContactPageLogo' src={jsonProfile.forPageContact.Logo} alt="Image Logo BGR" />
            </div>

            <div className='mymap'>
            </div>

        </div>
    )
}

export default ContactPage