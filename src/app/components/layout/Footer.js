import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className=' bg-background px-10 sm:px-20  py-16  '>
            <div className=' flex flex-wrap space-x-5 md:space-x-0  justify-between items-center border-t-2  border-gradient sm:px-5 pt-16 border-white'>


                <div className='flex   space-x-5 items-center'>
                    <img src='/logo.svg' alt='logo'></img>
                    <div className=' md:block hidden order-last ' >
                        <div className=''>
                            <ul className="flex   md:p-0 mt-4 font-medium   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
                                <li>
                                    <Link href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent font-bold hover:font-extrabold md:p-0 " aria-current="page">About</Link>
                                </li>

                                <li>
                                    <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:font-extrabold md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Communities</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:font-extrabold md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Resources</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:font-extrabold md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Help</Link>
                                </li>
                            </ul>
                        </div>
                        <div className=' flex items-center space-x-2'>
                            <p className=" max-w-fit font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600  bg-clip-text text-transparent via-transparent" >
                                Host Your Commmunity On HOC
                            </p>
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.6086 2.36353H9.70513C5.40338 2.36353 2.83887 4.92803 2.83887 9.22979V19.1215C2.83887 23.435 5.40338 25.9996 9.70513 25.9996H19.5968C23.8986 25.9996 26.4631 23.435 26.4631 19.1333V9.22979C26.4749 4.92803 23.9104 2.36353 19.6086 2.36353ZM20.8613 14.5715C20.8613 15.0561 20.4595 15.4579 19.975 15.4579C19.4904 15.4579 19.0886 15.0561 19.0886 14.5715V11.0025L9.96513 20.126C9.78786 20.3033 9.56332 20.386 9.33878 20.386C9.11423 20.386 8.88969 20.3033 8.71242 20.126C8.3697 19.7833 8.3697 19.216 8.71242 18.8733L17.8359 9.74978H14.2669C13.7823 9.74978 13.3805 9.34797 13.3805 8.86343C13.3805 8.37889 13.7823 7.97708 14.2669 7.97708H19.975C20.4595 7.97708 20.8613 8.37889 20.8613 8.86343V14.5715Z" fill="url(#paint0_linear_1_1583)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_1583" x1="2.10061" y1="10.4884" x2="41.9701" y2="23.0337" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#732C7A" />
                                        <stop offset="1" stop-color="white" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className=' '>
                    <ul className='flex space-x-6'>
                        <li>
                            <img className=' w-8 h-8' src='/email.svg' alt='insta'></img>
                        </li>
                        <li>
                            <img className=' w-8 h-8' src='/instagram.svg' alt='insta'></img>
                        </li>
                        <li>
                            <img className=' w-8 h-8' src='/twitter.svg' alt='insta'></img>
                        </li>
                    </ul>
                </div>
                <div className=' order-last md:hidden block' >
                    <div className=''>
                        <ul className="flex   md:p-0 mt-4 font-medium   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
                            <li>
                                <Link href="#" className="block py-2 pr-3 text-white  rounded md:bg-transparent font-bold hover:font-extrabold md:p-0 " aria-current="page">About</Link>
                            </li>

                            <li>
                                <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:font-extrabold md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Communities</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:font-extrabold md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Resources</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:font-extrabold md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Help</Link>
                            </li>
                        </ul>
                    </div>
                    <div className=' flex items-center space-x-2'>
                        <p className=" max-w-fit font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600  bg-clip-text text-transparent via-transparent" >
                            Host Your Commmunity On HOC
                        </p>
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6086 2.36353H9.70513C5.40338 2.36353 2.83887 4.92803 2.83887 9.22979V19.1215C2.83887 23.435 5.40338 25.9996 9.70513 25.9996H19.5968C23.8986 25.9996 26.4631 23.435 26.4631 19.1333V9.22979C26.4749 4.92803 23.9104 2.36353 19.6086 2.36353ZM20.8613 14.5715C20.8613 15.0561 20.4595 15.4579 19.975 15.4579C19.4904 15.4579 19.0886 15.0561 19.0886 14.5715V11.0025L9.96513 20.126C9.78786 20.3033 9.56332 20.386 9.33878 20.386C9.11423 20.386 8.88969 20.3033 8.71242 20.126C8.3697 19.7833 8.3697 19.216 8.71242 18.8733L17.8359 9.74978H14.2669C13.7823 9.74978 13.3805 9.34797 13.3805 8.86343C13.3805 8.37889 13.7823 7.97708 14.2669 7.97708H19.975C20.4595 7.97708 20.8613 8.37889 20.8613 8.86343V14.5715Z" fill="url(#paint0_linear_1_1583)" />
                            <defs>
                                <linearGradient id="paint0_linear_1_1583" x1="2.10061" y1="10.4884" x2="41.9701" y2="23.0337" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#732C7A" />
                                    <stop offset="1" stop-color="white" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer


