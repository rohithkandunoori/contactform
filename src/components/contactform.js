import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';
import database from '../firebase';


const Contactform = () => {
    const [state, setState] = useState({
        name: "",
        number: "",
        email: ""
    })

    const [submitted, setSubmitted] = useState({
        refid:"",
        flag:false
    }
    )

    const changeText = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
        setSubmitted({...submitted,refid:"", flag:false})
    }
    const Savecontact = async (e) => {
        e.preventDefault()
        const column = collection(database, 'Contacts')
        const refid=await addDoc(column, {
            name: state.name,
            number: state.number,
            email: state.email
        })
        setSubmitted({...submitted,refid:refid.id, flag:true})
    }
    return (
        <form className="contactform" onSubmit={ Savecontact}>
            <div className="form-group">
                <label>Name</label><input type="text" required value={state.name} onChange={changeText} name="name" className="form-control" />
            </div>
            <div className="form-group">
                <label>Number</label><input type="text" required value={state.number} onChange={changeText} name="number" className="form-control" />
            </div>

            <div className="form-group">
                <label>Email</label><input type="text" required value={state.email} onChange={changeText} name="email" className="form-control" />
            </div>

            <div className="form-group">
                <button type="submit" className="btn-success">Add</button>
            </div>
            {submitted.flag?<div className="form-group">
                <span>{`your reference id is ${submitted.refid}`}</span>
            </div>:""}
            

        </form>
    )
}
export default Contactform