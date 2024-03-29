import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-24">
                  <Link
                    to="/"
                    className="hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    About Us
                  </Link>
                  <Link
                    to="#0"
                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Pricing
                  </Link>
                  <Link
                    to="/contact"
                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Contact Us
                  </Link>
                  {/* <li>
              <Link to="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                <span>Contact Us</span>
                <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                </svg>                  
              </Link> */}
                  <Link
                    to="/book"
                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex"
                  >
                    <span>Free Consultaion</span>
                    <svg
                      className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1 mt-1.5"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/"
                  className="hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
=======
          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link to="/" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Home</Link>
              </li>
              <li>
                <Link to="/about" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">About Us</Link>
              </li>
              <li>
                <Link to="#0" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Pricing</Link>
              </li>
              {/* <li>
                <Link to="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Contact Us</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>                  
>>>>>>> parent of 166788b... Added about us and contact us page, with some small changes in design
                </Link>
                <Link
                  to="/about"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About Us
                </Link>
                <Link
                  to="#0"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Pricing
                </Link>
                <Link
                  to="/contact"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact Us
                </Link>
                {/* <li>
              <Link to="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                <span>Contact Us</span>
                <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                </svg>
                
                
                

              </Link> */}

                <Link
                  to="/book"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex"
                >
                  <span>Free Consultaion</span>
                  <svg
                    className="w-3 h-3 fill-current text-black flex-shrink-0 ml-2 -mr-1 mt-1.5"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                    
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link> 
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Header;
