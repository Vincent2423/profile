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
          <Route path='/vincent-portfolio' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Contact' element={<Contact />} />
        </Route>
        
      </Routes>
    </>

  );
}

export default App;
