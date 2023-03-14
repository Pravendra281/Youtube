import Body from './Components/Body';
import Head from './Components/Head';
import './App.css'
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Maincontainer from './Components/Maincontainer';
import WatchPage from './Components/WatchPage';


const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[{
    path:"/",
    element: <Maincontainer />
  },
  {
    path:"watch",
    element: <WatchPage/>
  }]
}]);

function App() {
  return (
    <Provider store={store}>
    <div >
   <Head/>
   <RouterProvider router={appRouter} />
  
      </div>
      </Provider>
  );
}

export default App;
