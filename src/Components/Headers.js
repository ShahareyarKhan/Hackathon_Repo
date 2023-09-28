import { useState } from 'react'

import { Dialog,Popover} from '@headlessui/react'

import { Bars3Icon, XMarkIcon,} from '@heroicons/react/24/outline'

import { CgProfile } from "react-icons/cg";

import logo from './logo.jpg'

import { Link } from 'react-router-dom'

export default function Headers() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 px-8 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-[70px] w-auto" src={logo} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
            Check mental health
          </Link>
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
            Services
          </Link>
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
            News
          </Link>
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
            Contact us
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      <div className="lg:hidden ">
        {mobileMenuOpen!==false?(
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-1 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 h-[415px]">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <img
                className="h-[70px] w-auto"
                src={logo}
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-red-100 text-center"
                >
                  Check mental health
                </Link>
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-red-100 text-center"
                >
                  News
                </Link>
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-red-100 text-center"
                >
                  Services
                </Link>
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-red-100 text-center"
                >
                  Contact us
                </Link>
              </div>
              <div className="py-2 flex ">
                <Link
                  to="/"
                  className="mx-auto block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-red-100 text-center "
                >
                  <CgProfile className='text-3xl' />
                </Link>
              </div>
            </div>
          </div>
        </div>):(<div></div>)}
      </div>
    </header>
  )
}
