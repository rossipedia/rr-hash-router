import { createRoot } from 'react-dom/client';
import { createHashRouter, Link, Outlet, RouterProvider } from 'react-router';

const router = createHashRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        lazy: () => import('./pages/Home'),
      },

      {
        path: 'about',
        lazy: () => import('./pages/About'),
      },
    ],
  },
]);

function Layout() {
  return (
    <div>
      <h1>Hash Router</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
