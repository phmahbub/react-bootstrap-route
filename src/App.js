import logo from './logo.svg';
import './App.css';
import MyNavBar from './components/MyNavBar/MyNavBar';
import Header from './components/Header/Header';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  const router = createBrowserRouter([
{path:'/', element:<Home></Home>},
{path:'/about', element:<About></About>}

  ])
  return (
    <div className="App container">
      <MyNavBar></MyNavBar>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
