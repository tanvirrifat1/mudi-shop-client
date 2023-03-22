import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import NewProduct from '../pages/NewProduct';
import SignUp from '../pages/SignUp';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <Menu />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/product',
                element: <NewProduct />
            },
        ]
    }
])