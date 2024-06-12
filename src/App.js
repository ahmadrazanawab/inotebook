import './App.css';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import NoteState from './context/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useState } from 'react';
function App() {
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type)=>{
        setAlert({
            msg: message,
            type:type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }
    return (
        <>
            <NoteState>
                <Router>
                    <Navbar />
                    <Alert alert={alert} />
                    <div className="container">
                        <Switch>
                            <Route exact path="/"><Home showAlert={showAlert} /></Route>
                            <Route exact path="/about"><About /></Route>
                            <Route exact path="/login"><Login showAlert={showAlert}/></Route>
                            <Route exact path="/signUp"><SignUp showAlert={showAlert}/></Route>
                        </Switch>
                    </div>
                </Router>
            </NoteState>
        </>
    );
}

export default App;
