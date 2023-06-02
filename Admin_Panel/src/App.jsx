
// import React from 'react';
import Header from './components/Header';
import Graphs from './components/Graphs';
import AdminPanel from './components/AdminPanel';
import Calender from './components/Calender';
// import Calender from './components/Calender';

function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <div className="flex">
        <div className="bg-gray-800 text-black h-screen w-64 px-4 py-8">
        <ul className="space-y-4">
            <li>
               <a href="/" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md">
                 Home
               </a>
             </li>
             <li>
               <a href="/" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md">
                 Dashboard
               </a>
             </li>
             <li>
               <a href="/" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md">
                 Settings
               </a>
             </li>
             <li>
               <a href="/" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md">
                 Profile
               </a>
             </li>
             <li>
               <a href="/" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md">
                 Log Out
               </a>
             </li>
           </ul>
        </div>
        <div className="flex-1 flex">
          <div className="flex-1">
            <AdminPanel />
            <Graphs />
          </div>
          <div className="flex-none w-70 mr-7 mt-7 rounded">
            <Calender />
           </div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
