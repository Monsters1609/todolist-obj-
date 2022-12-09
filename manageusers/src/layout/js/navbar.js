import {Link} from 'react-router-dom';
export default function Navbar () {
    return(
        <div className="Navbar">
            <div className='Logo'>
                <img src="redStar.svg" alt="logo"/>
                <div className='titleLogo'>Manage User <br/> ❤ </div>
            </div>
            <hr className='hr1'/>
            <div className='NavList'>
                <ul className='ListMenu'>
                    <li className='ItemMenu'>
                        <Link className='LinkItem' to='/'>
                            <i className="bi bi-house-door"></i> Home
                        </Link>
                        <div className='underlined'></div>
                    </li>
                    <hr/>
                    <li className='ItemMenu'>
                        <Link className='LinkItem' to='/NewList'>
                            <i className="bi bi-list-stars"></i> New List
                        </Link>
                        <div className='underlined'></div>
                    </li>
                    <hr/>
                    <li className='ItemMenu'>
                        <Link className='LinkItem' to='/Intrduction'>
                            <i className="bi bi-bookmark-heart-fill"></i> Intrduction
                        </Link>
                        <div className='underlined'></div>
                    </li>
                    <hr/>
                    <li className='ItemMenu'>
                        <Link className='LinkItem' to='/About'>
                            <i className="bi bi-people-fill"></i> About We
                        </Link>
                        <div className='underlined'></div>
                    </li>
                    <hr/>
                    <li className='ItemMenu'>
                        <Link className='LinkItem' to='/Setting'>
                            <i className="bi bi-gear-fill"></i> Setting
                        </Link>
                        <div className='underlined'></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}