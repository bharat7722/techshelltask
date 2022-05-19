import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import FetchData from './pages/FetchData';
import AddCustomer from './pages/AddCustomer';
import PostJob from './pages/PostJob';
import AddMobile from './pages/AddMobile';
import UpdateProfilePic from './pages/UpdateProfilePic';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
       <Route path="/" element={<FetchData/>}/>
       <Route path="/add-customer" element={<AddCustomer/>}/>
       <Route path="/post-job" element={<PostJob/>}/>
       <Route path="/add-mobile" element={<AddMobile/>}/>
       <Route path="/update-profile" element={<UpdateProfilePic/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
