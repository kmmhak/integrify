import * as FaIcons from "react-icons/fa";
import Search from './Search';

 function Navbar({setSearchWord}) {

    return (

            <div className='navbar'>
                <div className='menuIcon'>
                <FaIcons.FaBars />
                </div>
                <h3 className='navBarTitle'>
                    Country
                </h3>
                <Search setSearchWord={setSearchWord} />
            </div>
            

 
    )
 }

 export default Navbar;