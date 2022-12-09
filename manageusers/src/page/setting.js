import Footer from "../layout/js/footer";
import Header from "../layout/js/header";
import Navbar from "../layout/js/navbar";
import Error from "../layout/js/error";
import './css/all.css'
import '../layout/css/navbar.css';
import '../layout/css/header.css';
import '../layout/css/footer.css';
export default function Setting () {
    return(
        <div className='Setting'>
            <div className='NavBarLeft'>
                <Navbar/>
            </div>
            <div className='ContainerRight'>
                <div className='ContentRight'>
                    <Header/>
                    <Error/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}