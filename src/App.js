import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Container/Header'
import Footer from './Container/Footer'
import Home from './Home';
import Blog from './Blog';

function App() {
  return (
    <div className='page-container m-5 min-h-full relative'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
