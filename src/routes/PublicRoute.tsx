import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

const Login = lazy(() => import('./../pages/auth/Login'))
const Register = lazy(() => import('./../pages/auth/Register'))
const ProductList = lazy(() => import('./../pages/admin/product/ProductList'))
const ProductAdd = lazy(() => import('./../pages/admin/product/ProductAdd'))
const ProductEdit = lazy(() => import('./../pages/admin/product/ProductEdit'))

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: 'product',
        children: [
          {
            path: 'list',
            element: <ProductList />
          },
          {
            path: 'add',
            element: <ProductAdd />
          },
          {
            path: 'edit/:id',
            element: <ProductEdit />
          }
        ]
      }
    ]
  }
])
