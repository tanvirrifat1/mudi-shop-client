import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// import Home from './components/pages/Home';
// import Menu from './components/pages/Menu';
// import About from './components/pages/About';
// import Contact from './components/pages/Contact';
// import Login from './components/pages/Login';
// import NewProduct from './components/pages/NewProduct';
// import SignUp from './components/pages/SignUp';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route index element={<Home />} />
//       <Route path='/menu' element={<Menu />} />
//       <Route path='/about' element={<About />} />
//       <Route path='/contact' element={<Contact />} />
//       <Route path='/login' element={<Login />} />
//       <Route path='/product' element={<NewProduct />} />
//       <Route path='/signup' element={<SignUp />} />
//     </Route>
//   )
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
