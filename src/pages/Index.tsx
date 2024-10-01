import { useState } from "react"

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      {/* header */}

      <div className="fixed z-10 w-full">
        <div className="flex justify-between items-center p-2 px-4">
          <a href="/" className="flex items-center gap-x-2">
            <img src="/images/ptsv.jpg" alt="" className="w-16" />
            <h1 className="font-bold text-lg">PT Summit Vision Nusantara</h1>
          </a>
          <div className="flex gap-x-5">
            <a href="/" className="font-bold">Home</a>
            <a href="/" className="">Products and Services</a>
            <a href="/" className="">Partner</a>
            <a href="/" className="">Support</a>
          </div>
        </div>
      </div>

      <div className="">

        {/* banner */}
        <div>
          <div className="relative text-center">
            <img src="/images/banner.png" alt="" className="w-full  object-cover" />

            <div className="absolute flex inset-0 items-center justify-center flex-col text-4xl font-bold p-4 leading-[3rem]">
              Welcome to the official website <br />
              PT Summit Vision Nusantara
            </div>


          </div>
        </div>
      </div>
    </>
  )
}