/*1. to create path and set path in the following way -----
" const router = createBrowserRouter([
    {path:'/', element:<Home></Home>},
    {path:'/about', element:<About></About>},
    {path:'/exam', element:<Exam></Exam>}
    
      ])"*/
/*2. router to be returned like this way ----
<RouterProvider router={router}></RouterProvider>*/

/*3.should create different file inside component to connect and at the Header component there must be link of all components-----
"const Header = () => {
    return (
        <div className='d-flex justify-content-center'>
            <Link className='px-3 ' to='/'>Home</Link>
           <Link className='px-3'  to='/about'>About</Link>
           <Link className='px-3' to='/exam'>Exam</Link>
            
        </div>
    );
};" */
/*4. Header component should be declared in all other components ------
"const Exam = () => {
    return (
        <div>
            <Header></Header>
            <h1>Exam Is Mortal Very Very Mortal</h1>
        </div>
    );
};"*/