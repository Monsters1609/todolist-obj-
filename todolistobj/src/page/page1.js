import AddList from '../layout/add/addList';
import Footer from '../layout/footer/footer';
import Header from '../layout/header/header';
import List from '../layout/list/list';
import Nav from '../layout/navbar/nav';
import UpdateList from '../layout/update/updateList';
import './page1.css';
import '../layout/navbar/nav.css';
import '../layout/header/header.css';
import '../layout/list/list.css';
import '../layout/footer/footer.css';
import '../layout/add/addList.css';
import '../layout/update/updateList.css';
import { dataUser } from '../data/dataUser';
import { useState } from 'react';
export default function NewList () {
    const ListKey = Object.keys(dataUser);
    const valueName = dataUser.name;
    const valueAge = dataUser.age;
    const valueGender = dataUser.gender;
    const valueJob = dataUser.job;
    const ID=Math.floor(Math.random()*10000);
    const localStorageName=JSON.parse(localStorage.getItem('name'));
    const localStorageAge=JSON.parse(localStorage.getItem('age'));
    const localStorageGender=JSON.parse(localStorage.getItem('gender'));
    const localStorageJob=JSON.parse(localStorage.getItem('job'));
    const [name,setName] = useState(localStorageName??valueName);
    const [age,setAge] = useState(localStorageAge??valueAge);
    const [gender,setGender] = useState(localStorageGender??valueGender);
    const [job,setJob] = useState(localStorageJob??valueJob);
    const HandleCreate = (newName,newAge,newGender,newJob) => {
        setName(()=>{
            let dataName = [newName,...name];
            let jsonStrName=JSON.stringify(dataName);
            localStorage.setItem('name',jsonStrName);
            return dataName;
        });
        setAge(()=>{
            let dataAge=[newAge,...age];
            let jsonStrAge=JSON.stringify(dataAge);
            localStorage.setItem('age',jsonStrAge)
            return dataAge;
        });
        setGender(()=>{
            let dataGender=[newGender,...gender];
            let jsonStrGender=JSON.stringify(dataGender);
            localStorage.setItem('gender',jsonStrGender);
            return dataGender;
        });
        setJob(()=>{
            let dataJob=[newJob,...job];
            let jsonStrJob=JSON.stringify(dataJob);
            localStorage.setItem('job',jsonStrJob);
            return dataJob;
        });
    }
    return(
        <div className="Page1">
            <div className='NavBarLeft'>
                <Nav/>    
            </div>
            <div className='ContainerRight'>
                <div className='ContentRight'>
                    <Header/>
                    <AddList HandleCreate={HandleCreate}/>
                    <UpdateList/>
                    <List 
                        id={ID}
                        listKey={ListKey}
                        userName={name??localStorageName} 
                        Age={age??localStorageAge}
                        Gender={gender??localStorageGender}
                        Job={job??localStorageJob}
                    />
                    <Footer/>
                </div>
            </div>
        </div>
    )
}