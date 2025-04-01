import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { ResetPassword } from './pages/ResetPassword';
import { ActiveAcount } from './pages/ActiveAccount';

export const Template01Routes = () => {

    return (
       <>
   
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='/active-account' element={<ActiveAcount />} />
        </Routes>
       </>
    )
}