
import SideTab from './Container/SideTab'
import Content from './Container/Content'
import Suggestion from './Container/Suggestion'

function Blog() {
  return (
    <div className='grid grid-cols-12 h-4/6'>
      <SideTab />
      <Content />
      <Suggestion />
    </div>
  );
}

export default Blog;
