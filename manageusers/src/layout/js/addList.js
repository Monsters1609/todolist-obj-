import { useState } from "react";

export default function AddList ({HandleAddItems}) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [job, setJob] = useState('');
    const [email, setEmail] = useState('');
    var onchangeName = (value) => {
        setName(value.target.value)
    };
    var onchangeAge = (value) => {
        setAge(value.target.value)
    };
    var onchangeGender = (value) => {
        setGender(value.target.value)
    };
    var onchangeJob = (value) => {
        setJob(value.target.value)
    };
    var onchangeEmail = (value) => {
        setEmail(value.target.value)
    };
    var handleAddUser = () => {
        HandleAddItems({id:Math.floor(Math.random()*9000+1000), name:name, age:age, gender:gender, job:job, email:email});
        setName('');
        setAge('');
        setGender('');
        setJob('');
        setEmail('');
    };
    return(
        <div className='AddList'>
            <h4 className="TitleAddUser"> Add User</h4>
            <form method="post" id="FormPost">
                <div className="Name">
                    <label htmlFor="Name">Name</label>
                    <input value={name} id="Name" placeholder="Enter UserName" onChange={onchangeName}/>
                </div>
                <div className="Age">
                    <label htmlFor="Age">Age</label>
                    <input value={age} id="Age" placeholder="Enter Age" onChange={onchangeAge}/>
                </div>
                <div className="Gender">
                    <label htmlFor="Gender">Gender</label>
                    <input value={gender} id="Gender" placeholder="Enter Gender" onChange={onchangeGender}/>
                </div>
                <div className="Job">
                    <label htmlFor="Job">Job</label>
                    <input value={job} id="Job" placeholder="Enter Job" onChange={onchangeJob}/>
                </div>
                <div className="Email">
                    <label htmlFor="Email">Email</label>
                    <input value={email} id="Email" placeholder="Enter Email" onChange={onchangeEmail}/>
                </div>
                <div className="BtnAddUser">
                    <button type="button" onClick={handleAddUser}>Add User</button>
                </div>
            </form>
        </div>
    )
}