import { Outlet } from 'react-router-dom';
import './index.scss';
import Footer from '../Footer';


const Layout = () =>{

    return(
        <div className='App'>
            <div className='page'>
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}

export default Layout