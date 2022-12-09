import { useState } from "react";
import AddList from "../layout/js/addList";
import Footer from "../layout/js/footer";
import Header from "../layout/js/header";
import List from "../layout/js/list";
import Navbar from "../layout/js/navbar";
import UpdateUser from "../layout/js/updateList";
import './css/all.css'
import '../layout/css/navbar.css';
import '../layout/css/header.css';
import '../layout/css/addList.css';
import '../layout/css/updateList.css';
import '../layout/css/list.css';
import '../layout/css/footer.css';
export default function NewList ({dataUser, addData, HandleDelete, handleUpdate, handleAccept}) {
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
   const [currentIndex,setCurrentIndex] = useState()
    const HandleAddItems = (newItem) => {
    addData(newItem);
   }
   const detailUser = (value, index) => {
    setName(value.name)
    setAge(value.age)
    setGender(value.gender)
    setJob(value.job)
    setEmail(value.email)
    setCurrentIndex(index)
   };
   const setHollow = () => {
    setName('')
    setAge('')
    setGender('')
    setJob('')
    setEmail('')
   }
    return(
        <div className='NewList'>
            <div className='NavBarLeft'>
                <Navbar/>
            </div>
            <div className='ContainerRight'>
                <div className='ContentRight'>
                    <Header/>
                    <AddList HandleAddItems={HandleAddItems}/>
                    <UpdateUser 
                        currentValue={{id:Math.floor(Math.random()*9000+1000), name:name, age:age, gender:gender, job:job, email:email}}
                        currentIndex={currentIndex} 
                        HandleUpdate={handleUpdate}
                        onchangeName={onchangeName}
                        onchangeAge={onchangeAge}
                        onchangeGender={onchangeGender}
                        onchangeJob={onchangeJob}
                        onchangeEmail={onchangeEmail}
                        setHollow={setHollow}
                    />
                    <List HandleDelete={HandleDelete} dataUser={dataUser} detailUser={detailUser} handleAccept={handleAccept}/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}