import React, { useEffect, useState } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore/lite';
import database from '../firebase';




const Display = () => {

    const [contacts, setContacts] = useState([])
    const todelete= async(name)=>{
        const column = collection(database, 'Contacts')
        const show= doc(column,"name",name)
        deleteDoc(show)
        console.log(show)
    }
    const getcontacts = async () => {
        const column = collection(database, 'Contacts')
        const contactsdata = await getDocs(column)
        //console.log(contactsdata.docs)
       // console.log(contactsdata.docs.map(e=>e._document.data.value.mapValue.fields))
       const filterdata=contactsdata.docs.map(e=>e._document.data.value.mapValue.fields)
       
        setContacts(filterdata)

    }
    useEffect(() => {
        getcontacts()
    }, [contacts])
    return (
        <div className='contactcontainer'>
            <div className='contactsdisplay'>
                {contacts.map(e => {
                    return (
                        <div className='contact'><div className='text'>
                            {e.name.stringValue}  
                            <button className='deletebutton' onClick={event=>todelete(e.name.stringValue)}><img className='deleteicon' src="./delete.png"/></button> </div>
                             <p>{e.email.stringValue}</p> <p>{e.number.stringValue}</p></div>
                    )
                })}
            </div>
        </div>
    )

}




export default Display