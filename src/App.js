import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Container/Header'
import Footer from './Container/Footer'
import Content from './Container/Content';
import ContentList from './Components/Content/ContentList';
import ContentView from './Components/Content/ContentView';

function App() {
  return (
    <BrowserRouter>
      <div className='page-container m-5 min-h-full relative'>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/blog" element={<Content />}>
            <Route path="list" element={<ContentList />} />
            <Route path="view" element={<ContentView />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
