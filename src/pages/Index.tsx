import clsx from "clsx"
import { useState } from "react"

function AboutUs() {
  return (<>
    <div className=" text-center">
      <h1 className="text-2xl font-bold my-4">
        ABOUT US
      </h1>
      <div className="text-blue-800 bg-about p-12 flex flex-col items-center gap-y-4 leading-8">
        <p className="">
          PT Summit Vision Nusantara is a company registered in Indonesia since April 7th, 2023. PT SVN planned to venture into the field of biomechanics and human performance fields and aims to become the main industry support to the institution in the implementation of Motion Analysis and Assistance in Indonesia.
        </p>
        <p className="">PT SVN is Indonesia #1 motion capture integrator and life sciences equipment provider. We are Indonesia’s only provider of VICON systems and nearby countries. Our offer is a unique fusion of the best motion capture technology, programme, and expertise. We provide and integrate fully customized motion capture systems for human movement research, object tracking, visual effects, gaming, virtual and augmented reality. At the same time, we are also working on Indonesia's original product regarding motion analysis and treatment.</p>
      </div>
    </div>
  </>)
}

function Banner() {
  return (<>
    <div className="relative">
      <div className="flex flex-col w-full absolute h-[500px] text-4xl font-bold text-center justify-center items-center">
        <h1 className="">
          Welcome to the official website
        </h1>
        <h1 className="">
          PT Summit Vision Nusantara
        </h1>
      </div>
      <img src="/images/banner.png" alt="" className="h-[500px] object-cover w-full" />
    </div>
  </>)
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="fixed top-0 z-10 bg-header w-full p-2 flex text-white items-center gap-x-2">
        <button onClick={() => setIsOpen(!isOpen)} className="hover:opacity-80">
          {isOpen
            // menu
            ? <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
            // close
            : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
          }
        </button>
        <img src="/images/ptsv.jpg" alt="" className="w-14" />
        <h1 className="font-bold">PT Summit Vision Nusantara</h1>
      </div>

      <Banner />

      <AboutUs />

      {/* modal */}
      <div className={clsx("bg-header h-screen fixed top-0 transition-all ease-in-out duration-300", isOpen ? 'w-full' : 'w-0')}>
        <div className={clsx("flex-col flex gap-y-2 text-white translate-y-[60px] py-2 px-4 transition-all", isOpen ? "opacity-100 delay-300" : "opacity-0")}>
          <a href="/" className="hover:opacity-80">Home</a>
          <a href="/" className="hover:opacity-80">Products and Services</a>
          <a href="/" className="hover:opacity-80">Partner</a>
          <a href="/" className="hover:opacity-80">Support</a>
        </div>
      </div>
    </>
  )
}