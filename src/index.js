import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Dashboard from './Components/Dashboard';
import LeadSearch from './Components/LeadSearch';
import LeadEntryForm from './Components/LeadEntryForm';
import Showleads from './Components/Showleads';
import EditLeadEnteryForm from './Components/EditLeadEntryForm'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Dashboard></Dashboard>,
        children:[
          {
            path:"/",
            element:<LeadSearch></LeadSearch>
          },
          {
            path:'/addLead',
            element:<LeadEntryForm></LeadEntryForm>
          },
          {
            path:'/showLeads',
            element:<Showleads></Showleads>
          },
          {
            path:'/editLead',
            element:<EditLeadEnteryForm></EditLeadEnteryForm>
          }
        ]
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
