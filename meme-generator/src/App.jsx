import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from './components/Body';
import './App.css';
import Accordion from "./components/Accordion";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body/>
    },
    {
      path: "/accordion",
      element: <Accordion/>
    }
  ]);

  return (
    <>
      <header className='text-2xl bg-black text-white flex p-2 flex-wrap'>
        React Projects
        <nav className='flex justify-between p-2 mx-2 text-lg gap-5 flex-wrap ' >
          <a href='/' className='nav-link'> Meme Generator</a>
          <a href='/accordion' className='nav-link'> Accordion</a>
        </nav>   
      </header>
    
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
