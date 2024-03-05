import './App.css';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import { Container,Row, Col } from 'react-bootstrap';
import Signup from './components/Signup';
import { UserAuthContextProvider } from './context/UserAuthContext';

function App() {
  return (
    <div className="App">
      <Container>
    <Row>
      <Col>
      <UserAuthContextProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={
          <ProtectedRoute>
            <Home />
            </ProtectedRoute>} />
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </UserAuthContextProvider>
      </Col>
      </Row>
      </Container>
    </div>
  );
}
export default App;
