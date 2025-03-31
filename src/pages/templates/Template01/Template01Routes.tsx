import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

export const Template01Routes = () => {

    return (
       <>
   
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />} />
        </Routes>
       </>
    )
}