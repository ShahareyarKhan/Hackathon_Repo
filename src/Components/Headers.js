import { Fragment, useState } from 'react';
import { Dialog, Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { CgProfile } from 'react-icons/cg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdDarkMode } from 'react-icons/md';
import { FaSearch, FaUser } from 'react-icons/fa';
import { Menu, Transition } from '@headlessui/react';
import logo from './logo.jpg'

export default function Headers() {
  let navigate = useNavigate();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    let location = useLocation();
    const handleLogout = () => {
        localStorage.removeItem('token');
        setTimeout(() => {
            alert("Sign out successfully.")
        }, 200);
        navigate('/loginsignup')
    }
    return (
        <header className="bg-white w-full">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 px-8 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <img className="h-[70px] w-auto" src={logo} alt="" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Link to="/" className={`text-sm font-semibold leading-6  ${location.pathname === '/' ? 'font-bold text-[#c82626]' : 'text-black'} `}>
                        Check mental health
                    </Link>
                    <Link to="/services" className={`text-sm font-semibold leading-6  ${location.pathname === '/services' ? 'font-bold text-[#c82626]' : 'text-black'}`}>
                        Services
                    </Link>
                    <Link to="/news" className={`text-sm font-semibold leading-6   ${location.pathname === '/news' ? 'font-bold text-[#c82626]' : 'text-black'}`}>
                        Reviews
                    </Link>

                    <Link to="/docs" className={`text-sm font-semibold leading-6   ${location.pathname === '/docs' ? 'font-bold text-[#c82626]' : 'text-black'}`}>
                        Documentation
                    </Link>

                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end font-semibold text-black">
                        {!localStorage.getItem('token') ?
                            (<form className='flex'>
                                <Link to="/loginsignup" className={`text-sm mr-4 font-semibold leading-6  px-3 py-2 rounded-md text-white  ${location.pathname === '/loginsignup' ? 'bg-purple-900 ' : 'bg-[#e93535]'} mentbtn`}>
                                    Login / Signup 
                                </Link>
                                
                            </form> ):
                            (<div>
                                <Menu as="div" className="cursor-pointer">
                                    <div>
                                        <Menu.Button className="inline-flex w-[50px] justify-center px-2 py-2 text-sm font-semibold rounded-full">
                                        <FaUser className='text-2xl text-[#000000]' />
                                           
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className={`absolute right-0 z-10 mt-1 w-40 mx-auto rounded-sm font-semibold  focus:outline-none text-center `}>
                                            <div className=" bg-[#ecb36a] " style={{border:"2px solid black"}}>
                                                <Menu.Item className="py-4">
                                                    <Link
                                                        to="/profile" className='my-2 '
                                                    >
                                                        Profile
                                                    </Link>
                                                </Menu.Item>
                                                <Menu.Item className="pt-4 ">
                                                    <button
                                                        type="submit"
                                                        className='block mx-auto ' onClick={handleLogout}
                                                    >
                                                        Sign out
                                                    </button>
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>)
                        }
                </div>
            </nav>

            <div className="lg:hidden ">
                {mobileMenuOpen !== false ? (
                    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-1 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 h-[350px]">
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
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-300 text-center"
                                    >
                                        Check mental health status
                                    </Link>
                                    <Link
                                        to="/news"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-300 text-center"
                                    >
                                        Reviews
                                    </Link>
                                    <Link
                                        to="/services"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-300 text-center"
                                    >
                                        Services
                                    </Link>

                                </div>
                                <div className="py-2 flex bg-gray-800 rounded ">
                                    <Link
                                        to="/signup"
                                        className="mx-auto block rounded-lg px-3 py-1.5 text-base font-semibold leading-7 text-white  text-center "
                                    >
                                        <CgProfile className='text-3xl' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>) : (<div></div>)}
            </div>
        </header>
    )
}
