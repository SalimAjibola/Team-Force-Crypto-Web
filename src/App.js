import './App.css';
import { useState } from 'react';
import avatar from "./assets/images/avatar-website.png"
import person from "./assets/images/team-1.jpg"

function App() {
  // State to manage which accordion item is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle accordion
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      {/* Top NavBar Start */}
      <nav className="bg-purple-500 dark:bg-purple-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TERM FORCE</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <span className="text-white bg-green-700 focus:ring-4 focus:outline-none font-medium text-sm px-4 py-2 dark:bg-purple-800">LOGIN</span>
            <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-2 dark:bg-green-600">Sign Up</button>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium bg-purple-800 rounded-lg dark:bg-purple-900 md:flex-row md:space-x-8">
              <li>
                <a href="https" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent">Home</a>
              </li>
              <li>
                <a href="https" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Pages</a>
              </li>
              <li>
                <a href="https" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Projects</a>
              </li>
              <li>
                <a href="https" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Blog</a>
              </li>
              <li>
                <a href="https" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Top NavBar End */}

      {/* Banner Start */}
      <section class="bg-white h-auto mt-[8%] dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div class="py-8 px-4 h-auto mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <a href="https" class="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
            <span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">New</span> <span class="text-sm font-medium">TeamForce was launched! See what's new</span>
            <svg class="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
            </svg>
          </a>
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">The Next Generation Payment Ways</h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
          <button
            type="submit"
            className="text-white mt-10 mb-10 bg-gradient-to-r from-green-500 to-teal-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm w-full sm:w-auto px-6 py-3 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Get Started For Free
          </button>

          <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
            <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div class="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
              <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png" class="dark:hidden h-[426px] md:h-[654px]" alt="" />
              <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png" class="hidden dark:block h-[426px] md:h-[654px]" alt="" />
            </div>
          </div>


        </div>
        <div class="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
      </section>
      {/* Banner End */}

      {/* Slider Images Start */}

      <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={require("./assets/images/cashapp.jpg")} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Cashapp" />
                </div>
                
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={require("./assets/images/wallet.jpg")} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Wallet" />
                </div>
                
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={require("./assets/images/coinbase.jpg")} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Coinbase" />
                </div>
                
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={require("./assets/images/cashapp.jpg")} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Carousel 4" />
                </div>
                
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={require("./assets/images/wallet.jpg")} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Carousel 5" />
                </div>
            </div>

            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>

            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-black/50 group-focus:ring-4 group-focus:ring-black">
                    <svg className="w-4 h-4 text-black rtl:rotate-180" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1L1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>

            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-black/50 group-focus:ring-4 group-focus:ring-black">
                    <svg className="w-4 h-4 text-black rtl:rotate-180" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
      {/* Slider Images End */}

      {/* Powerful Payment Start */}
      <div class="text-center mb-8 mt-5">
  {/* Centered Heading and Paragraph */}
  <h3 class="text-3xl font-bold font-serif mb-2">You'll Love Our</h3>
  <h3 class="text-3xl font-bold font-serif">Powerful Payments</h3>
  <p class="text-lg font-thin font-sans text-gray-600">We've got all your payments covered.</p>
</div>

<div class="flex flex-wrap justify-center gap-4 mb-8">
  {/* Two Cards in a Row */}
  <a href="https" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Scan & Go</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Transform your payment link into a QR Code that customerscan scan with their phone to pay.</p>
    <img src={avatar} alt='avatar' />
  </a>

  <a href="https" class="block max-w-sm p-6 bg-blue-100 border border-blue-200 rounded-lg shadow hover:bg-blue-100 dark:bg-blue-100 dark:border-blue-500 dark:hover:bg-blue-500">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Easily Send Requests vai e-mail or sms</h5>
    <p class="font-normal text-gray-700 dark:text-black">...or copy-paste the link</p>
    <img src={avatar} alt='avatar' />
  </a>
</div>

<a href="https" class="block mb-5 w-5/6 max-w-4xl mx-auto p-6 bg-pink-300 border border-pink-200 rounded-lg shadow hover:bg-pink-100 dark:bg-pink-200 dark:border-pink-200 dark:hover:bg-pink-200">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black">Online Billing & Invoicing Payments.</h5>
  <p class="font-normal text-black dark:text-black">Get paid faster with online invoicing and the Virtual Terminal.</p>
  <img src={avatar} alt='avatar' />
</a>

      {/* Powerful Payment End */}

      {/* What people are saying about us Start*/}
      <div className='bg-gradient-to-r from-purple-500 to-indigo-500 py-12'>
        <div className='text-center mb-10'>
          <h2 className='text-white text-4xl font-bold'>What People</h2>
          <h2 className='text-white text-4xl font-bold'>Are Saying About Us</h2>
        </div>

        <div className='flex justify-center gap-8 flex-wrap'>

          {/* Testimonial 1 */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center space-x-1 pt-6 pl-4">
              {Array(4).fill().map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              <svg className="w-5 h-5 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <p className="text-gray-700 dark:text-gray-300 p-6">"Is it possible to love your credit card processor? With TeamForce, Yes!"</p>
            <div className="flex items-center px-6 pb-6">
              <img className="w-16 h-16 rounded-full shadow-lg" src={person} alt="person" />
              <div className="ml-4">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Lana Rey</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Founder & Leader</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center space-x-1 pt-6 pl-4">
              {Array(4).fill().map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              <svg className="w-5 h-5 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <p className="text-gray-700 dark:text-gray-300 p-6">"Fantastic service and support. Highly recommended!"</p>
            <div className="flex items-center px-6 pb-6">
              <img className="w-16 h-16 rounded-full shadow-lg" src={person} alt="person" />
              <div className="ml-4">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">John Doe</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">CEO, TechCorp</span>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center space-x-1 pt-6 pl-4">
              {Array(4).fill().map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              <svg className="w-5 h-5 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <p className="text-gray-700 dark:text-gray-300 p-6">"Fantastic service and support. Highly recommended!"</p>
            <div className="flex items-center px-6 pb-6">
              <img className="w-16 h-16 rounded-full shadow-lg" src={person} alt="person" />
              <div className="ml-4">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">John Doe</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">CEO, TechCorp</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* What people are saying about us End*/}

      {/* Card FAQ Start */}
      <div className="container mx-auto py-10 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-start p-5 bg-white shadow-lg rounded-lg">
          {/* Left side (FAQ and additional text) */}
          <div className="flex flex-col md:flex-row justify-between items-center md:w-1/2 mr-4 mb-5 md:mb-0">
            {/* Left Side: Text content */}
            <div className="flex-1">
              <span className="text-sm">Support</span>
              <h1 className="text-3xl font-bold mb-4">Frequently</h1>
              <h1 className="text-3xl font-bold mb-4">Asked Questions</h1>
              <p className="text-gray-500 mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <button
                type="button"
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Get in Touch
              </button>
            </div>

            {/* Right Side: Image */}
            <div className="ml-5">
              <img src={avatar} alt="Avatar" className="w-64 h-64 object-cover" />
            </div>
          </div>

          {/* Right side (Accordion) */}
          <div className="md:w-1/2">
            <div id="accordion-collapse">
              {/* Accordion Item 1 */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion(1)}
                  className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-200"
                >
                  <span>Do I Need to Change Bank?</span>
                  <svg
                    className={`w-3 h-3 transform ${openIndex === 1 ? "rotate-180" : ""
                      }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5L5 1 1 5"
                    />
                  </svg>
                </button>
                {openIndex === 1 && (
                  <div className="p-5">
                    <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion Item 2 */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion(2)}
                  className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-200"
                >
                  <span>Do I need to Change Bank?</span>
                  <svg
                    className={`w-3 h-3 transform ${openIndex === 2 ? "rotate-180" : ""
                      }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5L5 1 1 5"
                    />
                  </svg>
                </button>
                {openIndex === 2 && (
                  <div className="p-5">
                    <p className="text-gray-500">
                      The TeamForce is built right into your account dashboard, and is accessible immadiately after sign up.
                    </p>

                  </div>
                )}
              </div>

              {/* Accordion Item 3 */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion(3)}
                  className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-200"
                >
                  <span>How Can I Order equipment</span>
                  <svg
                    className={`w-3 h-3 transform ${openIndex === 3 ? "rotate-180" : ""
                      }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5L5 1 1 5"
                    />
                  </svg>
                </button>
                {openIndex === 3 && (
                  <div className="p-5">
                    <p className="text-gray-500">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card FAQ End */}

      {/* Form Start */}
      <div className="mt-20">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-12 mx-auto w-4/5 mb-10 rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-300">
          <form className="max-w-md mx-auto space-y-6">
            <div className="mb-5">
              <input
                type="text"
                id="name"
                className="bg-white border border-gray-300 text-gray-700 text-sm rounded-full focus:ring-indigo-500 focus:border-indigo-500 block w-full p-4 shadow-sm transition-colors duration-200"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                id="email"
                className="bg-white border border-gray-300 text-gray-700 text-sm rounded-full focus:ring-indigo-500 focus:border-indigo-500 block w-full p-4 shadow-sm transition-colors duration-200"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="number"
                id="phone"
                className="bg-white border border-gray-300 text-gray-700 text-sm rounded-full focus:ring-indigo-500 focus:border-indigo-500 block w-full p-4 shadow-sm transition-colors duration-200"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="mb-5">
              <textarea
                id="message"
                className="bg-white border border-gray-300 text-gray-700 text-sm rounded-xl focus:ring-indigo-500 focus:border-indigo-500 block w-full p-4 shadow-sm transition-colors duration-200"
                placeholder="Enter your message"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-green-500 to-teal-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm w-full sm:w-auto px-6 py-3 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Get Started Now
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Form End */}


      {/* Footer Start */}
      <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl">
          <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Other Pages</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="https" class=" hover:underline">About</a>
                </li>
                <li class="mb-4">
                  <a href="https" class="hover:underline">Services</a>
                </li>
                <li class="mb-4">
                  <a href="https" class="hover:underline">How It Works</a>
                </li>
                <li class="mb-4">
                  <a href="https" class="hover:underline">Pricing Plan</a>
                </li>
                <li class="mb-4">
                  <a href="https" class="hover:underline">Blog</a>
                </li>
                <li class="mb-4">
                  <a href="https" class="hover:underline">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Solutions</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="https" class="hover:underline">Payments</a>
                </li>
                <li class="mb-4">
                  <a href="https" class="hover:underline">Advance</a>
                </li>
                <li class="mb-4">
                  <a href="https" class="hover:underline">Online Checkout</a>
                </li>
                <li class="mb-4">
                  <a href="https" class="hover:underline">Dashboard</a>
                </li>
                <li class="mb-4">
                  <a href="https" class="hover:underline">Get Started</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="https" class="hover:underline">Privacy Policy</a>
                </li>
                <li class="mb-4">
                  <a href="https" class="hover:underline">Licensing</a>
                </li>
                <li class="mb-4">
                  <a href="https" class="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="https" class="hover:underline">iOS</a>
                </li>
                <li class="mb-4">
                  <a href="https" class="hover:underline">Android</a>
                </li>
                <li class="mb-4">
                  <a href="https" class="hover:underline">Windows</a>
                </li>
                <li class="mb-4">
                  <a href="https" class="hover:underline">MacOS</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2024 <a href="https">Team Force</a>. All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <a href="https" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Facebook page</span>
              </a>
              <a href="https" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span class="sr-only">Discord community</span>
              </a>
              <a href="https" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Twitter page</span>
              </a>
              <a href="https" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">GitHub account</span>
              </a>
              <a href="https" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer End */}

    </>
  );
}

export default App;
