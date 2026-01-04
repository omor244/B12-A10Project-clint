import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import router from './Router/Router';
import AuthProvider from './Provider/AuthProvider';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Flip}
      
      toastClassName={(context) =>
        `relative flex p-2 min-h-16 rounded-2xl justify-between flex items-center px-18 overflow-hidden cursor-pointer mb-4 border font-poppins shadow-lg backdrop-blur-md
    ${context?.type === 'success'
          ? 'bg-teal-600/90 text-white border-teal-400/50'
          : context?.type === 'error'
            ? 'bg-red-500/90 text-white border-red-400/50'
            : 'bg-[#0EA5E9]/90 text-white border-sky-300/50'
        } 
    dark:shadow-2xl`
      }
      bodyClassName={() => "text-sm font-medium flex items-center p-3 gap-3 tracking-tight"}
      /* Styling the close 'X' button */
      buttonClassName="text-white hover:scale-110 transition-transform p-2"
    />
    <AuthProvider>
      <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
