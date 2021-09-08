import './App.css';
import Home from './components/Home';
import People from './components/People'; 
import Planet from './components/Planet';
import { BrowserRouter,Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Home/>
                <Switch>
                    <Route path="/people/:number" > 
                        <People />
                    </Route>
                    <Route path="/planet/:number" > 
                        <Planet />
                    </Route>
                </Switch>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
