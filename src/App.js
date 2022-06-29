import logo from './logo.svg';
import './App.css';
import Header from './Container/Header'
import Footer from './Container/Footer'
import SideTab from './Container/SideTab'
import Content from './Container/Content'
import Suggestion from './Container/Suggestion'

function App() {

  return (
    <div className='m-5' >
      <Header />
      <div className='grid grid-cols-12 h-3/5'>
        <SideTab />
        <Content />
        <Suggestion />
      </div>
      <Footer />
    </div>
  );
}

export default App;
