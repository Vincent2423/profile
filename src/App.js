import './App.scss';
import './Animation.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Layout from './components/Layout';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route exact path='/' element={<Home />} />       
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Portfolio' element={<Portfolio />} />
          <Route exact path='/Contact' element={<Contact />} />
        </Route>        
      </Routes>
    </>

  );
}

export default App;
