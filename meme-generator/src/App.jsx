import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from './components/Body';
import './App.css';
import Accordion from "./components/Accordion";
import Stopwatch from "./components/Stopwatch";
import CommentBox from "./components/comments/CommentBox";
import Comments from "./components/comments/Comments";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body/>
    },
    {
      path: "/accordion",
      element: <Accordion/>
    },
    {
      path: "/stopwatch",
      element: <Stopwatch/>
    },
    {
      path: "/comments",
      element: <Comments/>
    }
  ]);

  return (
    <>
      <header className='text-2xl bg-black text-white flex p-2 flex-wrap'>
        React Projects
        <nav className='flex justify-between p-2 mx-2 text-lg gap-5 flex-wrap ' >
          <a href='/' className='nav-link'> Meme Generator</a>
          <a href='/accordion' className='nav-link'> Accordion</a>
          <a href='/stopwatch' className='nav-link'> Stopwatch</a>
          <a href='/comments' className='nav-link'> Comments</a>
        </nav>   
      </header>
    
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
