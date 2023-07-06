
import './App.css';
import Head from './components/Head.js'
import Body from './components/Body';
import store from './utils/store';
import { Provider } from 'react-redux';
// Head
// Body
//   Sidebar
//      menu items
//   Main container
//      Button list
//      Video container
//          Video card

function App() {
  return (
    <Provider store = {store}>
   <div>
    <Head/>
    <Body/>
   </div>
   </Provider>
  );
}

export default App;
