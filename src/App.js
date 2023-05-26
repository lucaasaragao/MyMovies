import './App.css';
import { Header } from './components/Header';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { Home } from './views/Home';
import { About } from './views/About';
import { MovieDetail } from './views/MovieDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        
        <Routes>
          <Route path='/' element= {<Home />}>
          </Route>
        </Routes>

        <Routes>
          <Route path='/about' element= {<About />}>
          </Route>
        </Routes>

        <Routes>
          <Route path='/movie/:id' element= {<MovieDetail />}>
          </Route>
        </Routes>


        </Router>
    </div>
  );
}

export default App;
