import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import TableUsers from '../components/TableUsers';
import PrivateRoute from './PrivateRoute';
import NotFound from './NotFound';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                {/* <PrivateRoute path ="/users">
                <TableUsers/>
            </PrivateRoute> */}
                <Route
                    path="/users"
                    element={
                        <PrivateRoute>
                            <TableUsers />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<NotFound/>}/>
            </Routes>

        </>
    )
}
export default AppRoutes