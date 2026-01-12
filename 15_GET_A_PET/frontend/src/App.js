import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Footer from './components/pages/layout/Footer'
import Navbar from './components/pages/layout/Navbar'
import Container from './components/pages/layout/Container'

import Login from "./components/pages/Auth/Login"
import Register from "./components/pages/Auth/Register"
import Home from "./components/pages/Home"

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
