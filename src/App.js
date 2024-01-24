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
        <Route element={<Layout />}>
          <Route path='/vincent-portfolio' element={<Home />} />
          <Route path='/vincent-portfolio/About' element={<About />} />
          <Route path='/vincent-portfolio/Portfolio' element={<Portfolio />} />
          <Route path='/vincent-portfolio/Contact' element={<Contact />} />
        </Route>
        
      </Routes>
    </>

  );
}

export default App;
