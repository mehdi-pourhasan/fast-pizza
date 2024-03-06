import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../Services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  // 3 Get data from loader
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2 ">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// Loader funciton runs fetch data each time nav routes to this component
// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const menu = await getMenu();
  return menu;

  // 2 Send data to app and set as dependency loader
}

export default Menu;
