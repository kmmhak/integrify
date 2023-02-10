import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Country from '../components/Country';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/name/:countryName' element={<Country />} />
        </Routes>
    )
}

export default Router;