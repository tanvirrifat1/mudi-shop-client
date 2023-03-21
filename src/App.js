import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div >
      <Header />
      <main className=' bg-slate-100 min-h-[calc(100vh)]'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
