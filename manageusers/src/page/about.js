import Footer from "../layout/js/footer";
import Header from "../layout/js/header";
import Navbar from "../layout/js/navbar";
import './css/all.css'
import '../layout/css/navbar.css';
import '../layout/css/header.css';
import '../layout/css/footer.css';
import Error from "../layout/js/error";
export default function About () {
    return(
        <div className='About'>
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