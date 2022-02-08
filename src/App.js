import './App.css';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const success = () => toast.success('Login Successful!!')
  const fail = (err) => toast.error(err)
  return (
    <div className="App">
      <Header/>
      <LandingPage success={success} fail={fail}/>
      <ToastContainer theme='colored'/>
    </div>
  );
}

export default App;
