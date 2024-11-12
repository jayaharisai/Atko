import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Components/Auth/Register';
import NotFound from './Components/Error/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}/> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
