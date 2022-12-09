import {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './page/home';
import NewList from './page/newlist';
import Introduction from './page/introduction';
import About from './page/about';
import Setting from './page/setting';
import { dataUser } from './data/arr';
import { API1 } from './data/arr';
// import { API2 } from './data/arr';
export default function App () {
    const [dataAPI1,setDataAPI1] = useState([])
    useEffect(()=>{
        fetch(API1)
        .then((rep)=>rep.json())
        .then((rep)=>setDataAPI1(rep))
    },[])
    
    let localStorageData = JSON.parse(localStorage.getItem('dataUser'))
    const [data,setData] = useState(localStorageData ?? dataUser ?? dataAPI1)
    let localStorageUserAccept = JSON.parse(localStorage.getItem('dataUserAccept'))

    const [userAccept,setUserAccept] = useState (localStorageUserAccept ?? [])
    const addData = (newItem) => {
        setData(() => {
            var localData = [newItem,...data];
            var jsonStrData = JSON.stringify(localData);
            localStorage.setItem('dataUser',jsonStrData)
            return localData;
        })
    }
    const HandleDelete = (index)=>{
        setData(()=>{
            const a=data.slice(0,index)
            const b=data.slice(index+1)
            const c=[...a,...b]
            let jsonStrDelete=JSON.stringify(c)
            localStorage.setItem('dataUser',jsonStrDelete)
            return c;
        })
    }
    const handleUpdate=(index,value)=>{
        setData(()=>{
            const a=data.slice(0,index) 
            const b=data.slice(index+1)
            const c=[value,...a, ...b]
            let jsonStrUpdate=JSON.stringify(c)
            localStorage.setItem('dataUser',jsonStrUpdate)
            return c;
        })
    }
    const handleAccept = (value,index) => {
        setUserAccept(()=>{
            const d=[value,...userAccept]
            const a=data.slice(0,index)
            const b=data.slice(index+1)
            const c=[...a,...b]
            let jsonStrDelete=JSON.stringify(c)
            let jsonStrAccept=JSON.stringify(d)
            localStorage.setItem('dataUser',jsonStrDelete)
            localStorage.setItem('dataUserAccept',jsonStrAccept)
            return (c,d);
        })
    }
    const HandleDeleteAccept = (index)=>{
        setData(()=>{
            const a=userAccept.slice(0,index)
            const b=userAccept.slice(index+1)
            const c=[...a,...b]
            let jsonStrDelete=JSON.stringify(c)
            localStorage.setItem('dataUserAccept',jsonStrDelete)
            return c;
        })
    }
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Home dataUser = {data} HandleDelete={HandleDelete} userAccept={userAccept} handleAccept={handleAccept} HandleDeleteAccept={HandleDeleteAccept}/>}></Route>
                <Route path = '/NewList' element = {<NewList dataUser = {data} addData={addData} HandleDelete={HandleDelete} handleUpdate={handleUpdate} handleAccept={handleAccept}/>}></Route>
                <Route path = '/Intrduction' element = {<Introduction/>}></Route>
                <Route path = '/About' element = {<About/>}></Route>
                <Route path = '/Setting' element = {<Setting/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}