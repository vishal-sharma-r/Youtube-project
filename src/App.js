
import './App.css';
import Head from './components/Head.js'
import Body from './components/Body';
import store from './utils/store';
import { Provider } from 'react-redux';
import MainCointainer from './components/MainCointainer';
import WatchPage from './components/WatchPage';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
// Head
// Body
//   Sidebar
//      menu items
//   Main container
//      Button list
//      Video container
//          Video card
;

function App() {
  return (
    <Provider store = {store}>
   <div>
    <Head/>
    <RouterProvider router = {appRouter}/>

   </div>
   </Provider>
  );
}
const appRouter  = createBrowserRouter ([{
  path:"/",
  element :<Body/>,
  children:[
    {
      path: "/",
      element : <MainCointainer/>,
    },{
      path:"watch",
      element: <WatchPage/>,
    },
  ]
}]);

export default App;
