import './App.css';
import Student from './components/Student';
import StudentList from './components/StudentList';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Container from 'react-bootstrap/esm/Container'; 
import { Router } from 'react-router-dom';
import {  Routes, Route} from 'react-router-dom'

function App() {
  return (
    
    <>
      <div className="App">
      <Router>
      <NavigationBar/>
      <Container>
        <Routes>
      <Route path="student" element={<Student/>}/>
      <Route path="listStudents" element={<StudentList/>}/>
      </Routes>
      </Container>
      <Footer/>
      </Router>
    </div>
    </>
    
  );

}

export default App;
