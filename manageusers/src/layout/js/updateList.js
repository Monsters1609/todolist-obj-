// import { useState } from "react";

export default function UpdateList ({currentValue, currentIndex, HandleUpdate, onchangeName, onchangeAge, onchangeGender, onchangeJob, onchangeEmail, setHollow}) {
    
    var handleUpdateUser = () => {
        HandleUpdate( currentIndex,  currentValue)
        setHollow()
    } 
    return(
        <div className='UpdateList'>
            <h4 className="TitleUpdateUser"> Update User List</h4>
            <form method="post" id="FormUpdate">
                <div className="Name">
                    <label htmlFor="Name">Name</label>
                    <input value={currentValue.name} id="Name" placeholder="Enter UserName" onChange={onchangeName}/>
                </div>
                <div className="Age">
                    <label htmlFor="Age">Age</label>
                    <input value={currentValue.age} id="Age" placeholder="Enter Age" onChange={onchangeAge}/>
                </div>
                <div className="Gender">
                    <label htmlFor="Gender">Gender</label>
                    <input value={currentValue.gender} id="Gender" placeholder="Enter Gender" onChange={onchangeGender}/>
                </div>
                <div className="Job">
                    <label htmlFor="Job">Job</label>
                    <input value={currentValue.job} id="Job" placeholder="Enter Job" onChange={onchangeJob}/>
                </div>
                <div className="Email">
                    <label htmlFor="Email">Email</label>
                    <input value={currentValue.email} id="Email" placeholder="Enter Email" onChange={onchangeEmail}/>
                </div>
                <div className="BtnUpdateUser">
                    <button type="button" onClick={handleUpdateUser}>Update User</button>
                </div>
            </form>
        </div>
    )
}