import { Layout } from "../components/Layout"

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

export default function App() {

  return (
    <>
      <Layout>
        <Banner />
        <AboutUs />
        <Vision />
        <Portfolio />
      </Layout>


    </>
  )
}