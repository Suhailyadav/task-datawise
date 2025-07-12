import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#FAF7F3] text-gray-700 h-screen p-6">
      <h2 className="text-2xl font-bold mb-10 text-gray-900">MyApp</h2>
      <nav className="flex flex-col space-y-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-blue-400 font-semibold' : 'hover:text-blue-300'
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/Users"
          className={({ isActive }) =>
            isActive ? 'text-blue-400 font-semibold' : 'hover:text-blue-300'
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/setting"
          className={({ isActive }) =>
            isActive ? 'text-blue-400 font-semibold' : 'hover:text-blue-300'
          }
        >
          Setting
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
