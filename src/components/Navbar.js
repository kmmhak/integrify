import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";

 function Navbar() {

    return (
        <>
        <IconContext.Provider value={{ color: "#fff" }}>
            <div className='navbar'>
                <div className='menuIcon'>
                <FaIcons.FaBars />
                </div>
                <h3 className='navBarTitle'>
                    Country
                </h3>
            </div>
        </IconContext.Provider>
        </>
    )
 }

 export default Navbar;