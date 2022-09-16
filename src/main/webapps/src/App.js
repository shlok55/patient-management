import logo from './logo.svg';
import './App.css';
import NavigationBar from "./components/Navigationbar";
import Footer from "./components/Footer";
import PatientList from "./components/PatientList";
import Patient from "./components/Patient";
import Container from "react-bootstrap/Container";
import MyAlert from "./components/MyAlert";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './components/Register';




function App() {
const [alert, setAlert] = useState(null);

  let showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <div className="App">
     <Router>
     <NavigationBar/>
     <Register/>
      <MyAlert alert={alert} />
    <Container>
              <Routes>
                <Route path="/patient" element={<Patient />} />
               <Route
                 path="/patient/:patientId"
                  element={<Patient ShowAlert={showAlert} />}
                />
                <Route path="/listPatients" element={<PatientList />} />
               <Route
                 path="patient"  element={<PatientList showAlert={showAlert}/>}
               />
               
              </Routes>

            </Container>
            <Footer />
          </Router>

    </div>
  );
}

export default App;
