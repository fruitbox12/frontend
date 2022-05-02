import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ConnectButton from '../../ConnectButton';
import Layout from '../../layout';
import { ChakraProvider } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  const location = useLocation();
  const pathName = location?.pathname.split('/')[1];
  return (
    <div className="w-full h-16 bg-gray-800 grid grid-cols-7 gap-4 fixed z-50">
      <div className="col-span-2 flex items-center">
        <div className="flex items-center ml-2">
          <div className="h-10 text-primary">
            <Link to="/">
              <i className="fab fa-aws" style={{ fontSize: 30 }}></i>
            </Link>
          </div>
          <div className="h-10">
            <input
              placeholder="Anonymous Web Services"
              className="bg-blue-100 rounded-full h-full focus:outline-none ml-2 px-3 pr-4"
            />
          </div>
        </div>
      </div>
      <div className="col-span-3 flex items-center justify-center space-x-2">
        <Link to="/">
          <div className="w-24 h-12 rounded-lg flex items-center justify-center cursor-pointer hover:bg-grey-200">
            <div className="w-14 h-auto relative flex items-center justify-center">
              <div
                className={`${
                  pathName === '' || undefined
                    ? 'text-primary'
                    : 'text-gray-400'
                }`}
              >
                <i className="text-2xl fas fa-user-secret"></i>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/watch">
          <div className="w-24 h-12 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100">
            <div className="w-14 h-auto relative flex items-center justify-center">
              <div className="absolute bg-red-500 text-white text-xs font-bold px-1 rounded-lg top-0 right-0">
                9+
              </div>
              <div
                className={`${
                  pathName === 'watch' ? 'text-primary' : 'text-gray-400'
                }`}
              >
                <i className="text-2xl fas fa-window-restore"></i>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/marketplace">
          <div className="w-24 h-12 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100">
            <div className="w-14 h-auto relative flex items-center justify-center">
              <div className="hidden absolute bg-red-500 text-white text-xs font-bold px-1 rounded-lg top-0 right-0">
                9+
              </div>
              <div
                className={`${
                  pathName === 'marketplace' ? 'text-primary' : 'text-gray-400'
                }`}
              >
                <i className="text-2xl fas fa-store"></i>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/groups">
          <div className="w-24 h-12 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100">
            <div className="w-14 h-auto relative flex items-center justify-center">
              <div className="absolute bg-red-500 text-white text-xs font-bold px-1 rounded-lg top-0 right-0">
                2
              </div>
              <div
                className={`${
                  pathName === 'groups' ? 'text-primary' : 'text-gray-400'
                }`}
              >
                <i className="text-2xl fas fa-cogs"></i>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/gaming">
          <div className="w-24 h-12 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100">
            <div className="w-14 h-auto relative flex items-center justify-center">
              
              <div
                className={`${
                  pathName === 'gaming' ? 'text-primary' : 'text-gray-400'
                }`}
              >
                <i className="text-2xl fas fa-server"></i>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-span-2 flex items-center justify-end">
        <div className="h-10 w-auto flex items-center space-x-2 pr-2">
          <Link to="/profile">
            <button className="h-10 px-2 flex space-x-1 items-center justify-center focus:outline-none hover:bg-gray-300 rounded-full">
         
              <div className="h-8 flex items-center justify-content">
                <p className="font-semibold text-sm"></p>
              </div>
              <p className="font-semibold text-sm"><ChakraProvider>
        <Layout>
      <ConnectButton handleOpenModal={open} />
</Layout>
    </ChakraProvider></p>
            </button>
          </Link>
          <button className="w-10 h-10 bg-blue-300 focus:outline-none hover:bg-blue-600 rounded-full">
            <i className="fas fa-plus"></i>
          </button>
          <button className="w-14 h-12 bg-blue-300 rounded">
          <div data-v-121f1b1c="" className="grid-icon__title bg-gray-400 rounded" > 
          <p className="font-semibold text-sm"> Select Region </p>
</div>          </button>
          <button className="w-10 h-10 bg-blue-300 focus:outline-none hover:bg-blue-600 rounded-full">
            <i className="fas fa-bell"></i>
          </button>
          <button className="w-10 h-10 bg-blue-300 focus:outline-none hover:bg-blue-600 rounded-full">
            <i className="fas fa-sort-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
