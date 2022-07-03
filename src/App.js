import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Header from './Container/Header'
import Footer from './Container/Footer'
import Content from './Container/Content';
import ContentView from './Components/Content/ContentView';
import ContentList from './Components/Content/ContentList';
import SignIn from './Components/Header/SignIn';
import SignUp from './Components/Header/SignUp';
import NoMatch from './NoMatch';

function App() {
  return (
    <BrowserRouter>
      <div className='page-container m-5'>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/signup" replace />} />
          <Route path="" element={<Content />}>
            <Route default path="/singup" element={<SignUp />} />
            <Route path="/singin" element={<SignIn />} />
            <Route path="/blog" element={<ContentList />} />
            <Route path="/blog/:blogid" element={<ContentView />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
