import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";
import AuthLayout from "../layouts/AuthLayout";

const Login = lazy(() => import('./../pages/auth/Login'))
const Register = lazy(() => import('./../pages/auth/Register'))
const ProductList = lazy(() => import('./../pages/admin/product/ProductList'))
const ProductAdd = lazy(() => import('./../pages/admin/product/ProductAdd'))
const ProductEdit = lazy(() => import('./../pages/admin/product/ProductEdit'))
const HomePage = lazy(() => import('./../pages/client/HomePage'))

export const routes = createBrowserRouter([
  {
    path: '',
    element: <HomePage />
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
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
