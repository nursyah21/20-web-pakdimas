import clsx from "clsx"
import { useEffect, useState } from "react"
import { A } from "./A"

interface Props {
  children?: any,
  mode?: "white" | "black"
}

function ContactUs() {
  return <>
    <div className="p-12 flex flex-col items-center gap-y-4 leading-8 ">
      <h1 className="text-bluePortfolio text-3xl underline font-semibold">
        CONTACT US
      </h1>
    </div>

    <div className="p-12 flex flex-col md:flex-row gap-y-4 gap-x-4 leading-8 bg-bluebg text-white justify-center items-center md:items-start">
      <div className="flex max-w-lg md:max-w-4xl flex-col md:flex-row">
        <div className="  w-full">
          <h1 className="mb-4 text-center  font-bold ">
            OFFICE HOUR
          </h1>
          <div className="font-medium">
            <h1>Mon-Fri : 9 am - 5 pm</h1>
            <h1>Sat- Sun : Closed</h1>
          </div>
        </div>

        <div className="w-full ">
          <h1 className="mb-4 text-center  font-bold ">
            OUR OFFICE
          </h1>
          <div className="font-medium flex flex-col gap-y-4 ">
            <h1>PT SUMMIT VISION NUSANTARA</h1>
            <h1>AIWORK OFFICE SPACE PLAZA SIMATUPANG LANTAI 6 UNIT 3</h1>
            <h1>JALAN TB SIMATUPANG KAV IS NO 1, Desa/Kelurahan Pondok Pinang, Kec. Kebayoran Lama, Kota Adm. Jakarta Selatan, Provinsi DKI Jakarta, Kode Pos: 12310</h1>
          </div>
        </div>

        <div className="w-full  ml-4 flex md:block items-center justify-center">
          <div className="flex gap-x-2 mt-8 md:mt-0 justify-center items-center">
            <a href="https://www.instagram.com/ptsvn.id">
              <img src="/images/ig.png" alt="" className="w-8" />
            </a>
            <a href="mailto:ptsvnusantara@gmail.com">
              <img src="/images/email.png" alt="" className="w-8" />
            </a>
            <a href="https://www.instagram.com/ptsvn.id/">
              <img src="/images/phone.png" alt="" className="w-8" />
            </a>
          </div>
        </div>
      </div>

    </div >
  </>
}

export function Layout({ children, mode = "white" }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isTop, setIsTop] = useState(!(window.scrollY > 0))
  
  useEffect(() => {
    const isScrollDown = (_: Event) => {
      if (window.scrollY > 10) {
        setIsTop(false)
      } else {
        setIsTop(true)
      }
    }
    window.addEventListener("scroll", isScrollDown)
    return () => {
      window.removeEventListener('scroll', isScrollDown)
    }
  }, [])
  return (
    <>
      <div
        className={clsx(
          "fixed top-0 z-20 bg-header w-full p-2 px-8 flex text-white items-center gap-x-2 justify-between",
          (mode === "white" && isTop) ? "text-white" : (mode === "black" && isTop) ? "text-black" : "",
          isTop && "bg-transparent")}
        id="nav"
      >
        <div className="flex items-center gap-x-2">
          <button onClick={() => setIsOpen(!isOpen)} className="hover:opacity-80 block lg:hidden">
            {isOpen
              // close
              ? <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
              // menu
              : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={(mode == "black" && isTop) ? "#000000" : "#e8eaed"}><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
            }
          </button>
          <img src="/images/ptsv.jpg" alt="" className="w-14" />
          <h1 className={clsx("font-bold", (mode == "black" && isTop) ? "text-black" : "text-white", isOpen && "text-white")}>PT Summit Vision Nusantara</h1>
        </div>

        <div className={clsx("hidden lg:flex gap-x-8 items-center", (mode == "black" && isTop) ? "text-black" : "text-white")}>
          <A href="/" className="hover:opacity-80" classActive="font-bold">Home</A>
          <A href="/products-and-services" className="hover:opacity-80" classActive="font-bold">Products and Services</A>
          <A href="/partner" className="hover:opacity-80" classActive="font-bold">Partner</A>
          <A href="/support" className="hover:opacity-80" classActive="font-bold">Support</A>
        </div>
      </div>

      {/* modal navbar */}
      <div className={clsx("bg-header h-screen fixed top-0 transition-all ease-in-out duration-300 lg:hidden z-10", isOpen ? 'w-full' : 'w-0')}>
        <div className={clsx("flex-col flex gap-y-2 text-white translate-y-[60px] py-2 px-4 transition-all", isOpen ? "opacity-100 delay-300" : "opacity-0")}>
          <A href="/" className="hover:opacity-80">Home</A>
          <A href="/products-and-services" className="hover:opacity-80">Products and Services</A>
          <A href="/partner" className="hover:opacity-80">Partner</A>
          <A href="/support" className="hover:opacity-80">Support</A>
        </div>
      </div>

      <div className="overflow-hidden">
        {children}
      </div>

      <ContactUs />
    </>)
}
