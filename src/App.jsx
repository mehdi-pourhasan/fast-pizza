// Import React Features
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Import Components
import Home from './Ui/Home';
import Menu, { loader as menuLoader } from './Features/menu/Menu';
import Cart from './Features/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './Features/order/CreateOrder';
import Order, { loader as loaderOrder } from './Features/order/Order';
import AppLayout from './Ui/AppLayout';
import Error from './Ui/Error';

// Create React router
const router = createBrowserRouter([
  // In here we place app layout as parent of all component that every of them includes header and card overview
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: loaderOrder,
        errorElement: <Error />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
