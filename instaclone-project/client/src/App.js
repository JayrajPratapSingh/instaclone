import './App.css';
import LandingPage from './LandingPage/LandingPage';
import PostView from './PostView/PostView'
import Form from './PostView/form';

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/post' element={<PostView/>} />
      <Route path='/form' element={<Form/>} />
      
    </Routes>
   </BrowserRouter>
  );
}

export default App;
