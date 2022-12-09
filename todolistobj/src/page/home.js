import Footer from '../layout/footer/footer';
import Header from '../layout/header/header';
import List from '../layout/list/list';
import Nav from '../layout/navbar/nav';
import './home.css';
import '../layout/navbar/nav.css';
import '../layout/header/header.css';
import '../layout/list/list.css';
import '../layout/footer/footer.css';
import { dataUser } from '../data/dataUser';
export default function Home () {
    const ListKey = Object.keys(dataUser);
    const valueName = dataUser.name;
    const valueAge = dataUser.age;
    const valueGender = dataUser.gender;
    const valueJob = dataUser.job;
    const localStorageName=JSON.parse(localStorage.getItem('name'));
    const localStorageAge=JSON.parse(localStorage.getItem('age'));
    const localStorageGender=JSON.parse(localStorage.getItem('gender'));
    const localStorageJob=JSON.parse(localStorage.getItem('job'));
    return(
        <div className="Home">
            <div className='NavBarLeft'>
                <Nav/>
            </div>
            <div className='ContainerRight'>
                <div className='ContentRight'>
                    <Header/>
                    <List
                        listKey={ListKey}
                        userName={localStorageName??valueName} 
                        Age={localStorageAge??valueAge}
                        Gender={ localStorageGender??valueGender}
                        Job={localStorageJob??valueJob}
                    />
                    <Footer/>
                </div>
            </div>
        </div>
    )
}