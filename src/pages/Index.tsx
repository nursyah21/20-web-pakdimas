import clsx from "clsx"
import { useState } from "react"

function AboutUs() {
  return (<>
    <div className=" text-center">
      <h1 className="text-2xl font-bold my-8 font-serif">
        ABOUT US
      </h1>
      <div className="text-blue-900 bg-about p-12 flex flex-col items-center gap-y-4 leading-8">
        <p className="max-w-lg md:max-w-4xl">
          PT Summit Vision Nusantara is a company registered in Indonesia since April 7th, 2023. PT SVN planned to venture into the field of biomechanics and human performance fields and aims to become the main industry support to the institution in the implementation of Motion Analysis and Assistance in Indonesia.
        </p>
        <p className="max-w-lg md:max-w-4xl">PT SVN is Indonesia #1 motion capture integrator and life sciences equipment provider. We are Indonesia’s only provider of VICON systems and nearby countries. Our offer is a unique fusion of the best motion capture technology, programme, and expertise. We provide and integrate fully customized motion capture systems for human movement research, object tracking, visual effects, gaming, virtual and augmented reality. At the same time, we are also working on Indonesia's original product regarding motion analysis and treatment.</p>
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

function Vision() {

  return <>
    <div className="bg-bluebg text-white p-12 flex flex-col items-center gap-y-4 leading-8 ">
      <div className="max-w-lg md:max-w-4xl md:flex">
        <h1 className="text-3xl mb-12 font-medium mr-[6rem]">VISION</h1>
        <h1 className="text-lg leading-8">To be a sustainable leader in scientific fields related to human movement and performance studies to contribute to nation’s growth and building towards year 2030 </h1>
      </div>

      <div className="max-w-lg md:flex md:max-w-4xl">
        <h1 className="text-3xl mb-12 font-medium mr-[4.5rem]">MISSION</h1>
        <h1 className="text-lg leading-8">Develop and empower local expertise together with local higher education institutions as catalyst to enhance Malaysia achievement globally in areas such as sports, medical, industry, education and etc. </h1>
      </div>
      <div className="max-w-lg md:flex md:max-w-4xl">
        <h1 className="text-3xl mb-12 font-medium mr-12">STRATEGY</h1>
        <ul className="text-lg leading-8 ml-4 gap-y-4 flex flex-col">
          <li>Develop partnership with foreign expertise for transfer technologies and developing local expertise</li>
          <li>Collaborations with local higher education institutions in research studies, testing and training</li>
          <li>Setting up technology center and laboratory, comprise of state-of-the-art equipment’s and experts</li>
        </ul>
      </div>
    </div>
  </>
}

function Portfolio() {
  return <>
    <div className="p-12 flex flex-col items-center gap-y-4 md:gap-y-8 leading-8 ">
      <h1 className="text-bluePortfolio text-3xl underline font-semibold mb-16">
        PORTFOLIO
      </h1>
      <div className="max-w-lg md:max-w-4xl md:flex">
        <div className="mr-12">
          <img src="/images/gait.png" alt="" className="w-[400px] mb-8" />
        </div>
        <div className="flex-1 gap-y-4 flex flex-col">
          <h1 className="text-[#351c75] font-bold text-3xl">
            Gait and Movement Analysis
          </h1>
          <h1 className="text-blue-800">
            The Gait and Motion Analysis Laboratory
            <span className="font-bold"> uses state-of-the-art computer technology to capture a 3-D image of a Rehab Patient, Athletes or even animal movement pattern.</span> The
            system consists of Motion system with integrating equipment such as EMG Sensor, and Force plate. Electrodes and Reflective markers that are placed on the subject used to measure muscle activity and track motion of body segments. This measured data can be used to analyses subject data to helps in Rehabilitation, Sports performance study and Biomechanics study. Here we share a few Motion Lab in Malaysia.
          </h1>
        </div>
      </div>

      <div className="max-w-lg md:max-w-4xl md:flex">
        <div className="mr-12">
          <img src="/images/sport.png" alt="" className="w-[400px] mb-8" />
        </div>
        <div className="flex-1 gap-y-4 flex flex-col">
          <h1 className="text-[#351c75] font-bold text-3xl">
            Sports Performance Analysis
          </h1>
          <h1 className="text-blue-800">
            Sports Performance Analysis is <span className="font-bold">a specialised discipline that provides athletes and coaches with objective information that helps them understand performance.</span> This process is underpinned by systematic observation, which provides valid, reliable and detailed information relating to performance.
          </h1>
        </div>
      </div>

      <div className="max-w-lg md:max-w-4xl md:flex">
        <div className="mr-12">
          <img src="/images/animation.png" alt="" className="w-[400px] mb-8" />
        </div>
        <div className="flex-1 gap-y-4 flex flex-col">
          <h1 className="text-[#351c75] font-bold text-3xl">
            Animation and Games
          </h1>
          <h1 className="text-blue-800">
            As <span className="font-bold"> game animation is often a complicated combination of different types of movement, </span> animators make libraries of the movements, so they can reuse them for each character. They work in a way that makes best use of the game engine’s technology and maximises the opportunities for game play and interactivity.
          </h1>
        </div>
      </div>

      <div className="max-w-lg md:max-w-4xl md:flex">
        <div className="mr-12">
          <img src="/images/engineering.jpg" alt="" className="w-[400px] mb-8" />
        </div>
        <div className="flex-1 gap-y-4 flex flex-col">
          <h1 className="text-[#351c75] font-bold text-3xl">
            Engineering
          </h1>
          <h1 className="text-blue-800">
            In particular, virtual related engineering means that <span className="font-bold"> design and validation activities occur collaboratively in order to prove early product designs, support decision making and enable continuous product optimisation </span> within interdisciplinary and cross-enterpise partnerships. This causes an important redefinition of the overall product development process for supporting the coordination, assessment and concretion of engineering results of all involved partners with the support of virtual builds.
          </h1>
        </div>
      </div>
    </div>
  </>
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

        <div className="w-full  ml-4 flex md:block ">
          <div className="flex gap-x-2 mt-8 md:mt-0 justify-center">
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

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="fixed top-0 z-10 bg-header w-full p-2 px-8 flex text-white items-center gap-x-2 justify-between">
        <div className="flex items-center gap-x-2">
          <button onClick={() => setIsOpen(!isOpen)} className="hover:opacity-80 block md:hidden">
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

        <div className="hidden md:flex gap-x-8 items-center">
          <a href="/" className="hover:opacity-80 font-bold">Home</a>
          <a href="/" className="hover:opacity-80">Products and Services</a>
          <a href="/" className="hover:opacity-80">Partner</a>
          <a href="/" className="hover:opacity-80">Support</a>
        </div>
      </div>

      <Banner />
      <AboutUs />
      <Vision />
      <Portfolio />
      <ContactUs />

      {/* modal */}
      <div className={clsx("bg-header h-screen fixed top-0 transition-all ease-in-out duration-300 md:hidden", isOpen ? 'w-full' : 'w-0')}>
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