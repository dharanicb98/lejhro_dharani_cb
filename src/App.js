import './App.css';
import useScrollPosition from './hooks';
import BlogPage from './pages/blogpage';
import Footer from './pages/footer';
import Headers from './pages/head';
import HeadPage from './pages/navber';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const App = () => {
  const hasScrolled = useScrollPosition();
  console.log('hasScrolled', hasScrolled)
  return (
    <div style={{position:"relative"}}>
       {hasScrolled &&  <Headers /> }
      <HeadPage />
      <BlogPage />
      <Footer />
    </div>
  );
};

export default App;

