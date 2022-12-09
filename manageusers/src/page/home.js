import Footer from "../layout/js/footer";
import Header from "../layout/js/header";
import Navbar from "../layout/js/navbar";
import List from "../layout/js/list";
import TableDone from "../layout/js/tableDone";
import './css/all.css'
import '../layout/css/navbar.css';
import '../layout/css/header.css';
import '../layout/css/list.css';
import '../layout/css/footer.css';
import '../layout/css/tableDone.css'
export default function Home ({dataUser, HandleDelete, userAccept, handleAccept, HandleDeleteAccept}) {
    return(
        <div className='Home'>
            <div className='NavBarLeft'>
                <Navbar/>
            </div>
            <div className='ContainerRight'>
                <div className='ContentRight'>
                    <Header/>
                    <List HandleDelete={HandleDelete} dataUser={dataUser} handleAccept={handleAccept}/>
                    <TableDone userAccept={userAccept} HandleDeleteAccept={HandleDeleteAccept} />
                    <Footer/>
                </div>
            </div>
        </div>
    )
}