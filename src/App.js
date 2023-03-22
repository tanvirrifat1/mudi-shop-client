import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './components/Router/Router';

function App() {
  return (
    <div className=' bg-slate-100 min-h-[calc(100vh)]'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
