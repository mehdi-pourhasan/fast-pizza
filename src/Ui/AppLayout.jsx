import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../Features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}

      <Header />

      {/* Outlet make all nested routes as children and display each component content */}
      <div className=" overflow-scroll">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
