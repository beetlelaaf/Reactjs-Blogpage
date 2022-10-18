import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import Main from './components/Main';
import BlogDetails from './components/BlogDetails';
import About from './components/About';
import AddBlog from './components/AddBlog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/blogs' element={<BlogList />}/>
            <Route path='/blogs/:id' element={<BlogDetails />}/>
            <Route path='/add' element={<AddBlog />}/>
            <Route path='/about' element={<About />}/>
          </Routes> 
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
