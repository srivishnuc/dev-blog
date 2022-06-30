import logo from './logo.svg';
import './App.css';
import Header from './Container/Header'
import Footer from './Container/Footer'
import SideTab from './Container/SideTab'
import Content from './Container/Content'
import Suggestion from './Container/Suggestion'

function App() {

  return (
    <div className='page-container m-5 min-h-full relative'>
      <Header />
      <div className='grid grid-cols-12 h-4/6'>
        <SideTab />
        <Content />
        <Suggestion />
      </div>
      <Footer />
    </div>
  );
}

export default App;
