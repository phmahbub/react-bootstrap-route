import logo from './logo.svg';
import './App.css';
import MyNavBar from './components/MyNavBar/MyNavBar';
import Header from './components/Header/Header';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Exam from './components/Exam/Exam';
import Main from './layout/Main';
import Academic from './components/Academic/Academic';
import Result from './components/Result/Result';
import ErrorHandle from './components/ErrorHandle/ErrorHandle';
import Users from './components/Users/Users';

function App() {
  const router = createBrowserRouter([
{path:'/', 
element:<Main></Main>,
children: [
  {path:'/', element:<Home></Home>},
  {path:'/about', element:<About></About>},
  {path:'/exam', element:<Exam></Exam>},
  {path:'/academic', element:<Academic></Academic>},
  {path:'/result', element:<Result></Result>},
  {path:'/users', 
  loader: ()=>{
    return fetch('https://jsonplaceholder.typicode.com/users')
  },
  element:<Users></Users>}
]
},

{path:'*', element:<ErrorHandle></ErrorHandle>},
  ])
  return (
    <div className="App container">
      <MyNavBar></MyNavBar>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
