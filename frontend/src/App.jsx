import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from "./pages/LandingPage"
import AdminPortal from "./pages/AdminSignInPage"
import UserLandingPage from "./pages/UserPortal"
import AdminDashBoard from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage/>} />
        <Route path="/UserPortal" element={<UserLandingPage/>} />
        <Route path="/AdminPortal" element={<AdminPortal/>} />
        <Route path="/AdminPortal/*" element={<AdminDashBoard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
