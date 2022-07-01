
import Header from './Container/Header'
import Footer from './Container/Footer'
import SideTab from './Container/SideTab'
import Content from './Container/Content'
import Suggestion from './Container/Suggestion'

function Home() {

  return (
    <div className='grid grid-cols-12 h-4/6'>
      <SideTab />
      <Content />
    </div>
  );
}

export default Home;
