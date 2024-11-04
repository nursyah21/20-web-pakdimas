import { Layout } from "../components/Layout"
import { data } from "../data"

type props = {
  title: string
}

function Banner({ title }: props) {
  return (<>
    <div className="relative">
      <div className="flex flex-col w-full absolute h-[500px] text-4xl font-bold text-center justify-center items-center">
        <h1 className="text-white">
          {title}
        </h1>
        {/* <h1 className="">
          PT Summit Vision Nusantara
        </h1> */}
      </div>
      <img src="/images/banner-product-and-services.png" alt="" className="h-[500px] object-cover w-full" />
    </div>
  </>)
}

function Vicon() {
  return <>
    <div className=" text-center">
      {/* <h1 className="text-2xl font-bold my-8 underline text-cyan-900">
                    VICON
                  </h1> */}
      <h1 className="text-md py-6 bg-[url(/images/background-productand-services.png)] text-white" style={{ backgroundPosition: "center", backgroundSize: "cover", boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, .5)" }}>
        SOFTWARE
      </h1>
      <div className="flex items-center flex-col ">
        <div className="max-w-lg xl:max-w-4xl  flex flex-col xl:flex-row gap-y-4 gap-x-8">
          {data.vicons.map((e, idx) =>
            <div key={idx} className="max-w-[544px] my-8 flex flex-col items-center">
              <img src={e.img} alt="" className="max-w-[300px] max-h-[300px]" />
              <a href={e.link} className="hover:underline">
                <h1 className="text-2xl text-cyan-900 font-bold my-4">{e.title}</h1>
              </a>
              <p>{e.text}</p>
            </div>
          )}
        </div>
      </div>
    </div>

    <div className=" text-center">
      <h1 className="text-md py-6 my-8 bg-[url(/images/background-productand-services.png)] text-white" style={{ backgroundPosition: "center", backgroundSize: "cover", boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, .5)" }}>
        HARDWARE
      </h1>
      <div className="flex items-center flex-col bg-about">
        <div className="max-w-lg xl:max-w-4xl grid md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-8">
          {data.viconHardware.map((e, idx) =>
            <div key={idx} className="max-w-[544px] my-8 flex flex-col items-center">
              <img src={e.img} alt="" className="max-w-[200px] max-h-[300px]" />
              <a href={e.link} className="hover:underline">
                <h1 className="text-2xl text-cyan-900 font-bold my-4 text-justify">{e.title}</h1>
              </a>
              <div dangerouslySetInnerHTML={{ __html: e.text }} className="text-justify"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  </>
}

function Motek() {
  return <>
    <div className=" text-center">
      <div className="flex items-center flex-col bg-about">
        <div className="max-w-lg xl:max-w-4xl grid md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-8">
          {data.motek.map((e, idx) =>
            <div key={idx} className="max-w-[544px] my-8 flex flex-col items-center">
              <img src={e.img} alt="" className="max-w-[200px] max-h-[300px]" />
              <a href={e.link} className="hover:underline">
                <h1 className="text-2xl text-cyan-900 font-bold my-4 text-justify">{e.title}</h1>
              </a>
              <div dangerouslySetInnerHTML={{ __html: e.text }} className="text-justify"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  </>
}

function Amti() {
  return <>
    <div className=" text-center">
      <div className="flex items-center flex-col bg-about">
        <div className="max-w-lg xl:max-w-4xl grid md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-8">
          {data.amti.map((e, idx) =>
            <div key={idx} className="max-w-[544px] my-8 flex flex-col items-center">
              <img src={e.img} alt="" className="max-w-[200px] max-h-[300px]" />
              <a href={e.link} className="hover:underline">
                <h1 className="text-2xl text-cyan-900 font-bold my-4 text-justify">{e.title}</h1>
              </a>
              <div dangerouslySetInnerHTML={{ __html: e.text }} className="text-justify"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  </>
}

function Cometa() {
  return <>
    <div className=" text-center">
      <div className="flex items-center flex-col bg-about">
        <div className="max-w-lg xl:max-w-4xl grid md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-8">
          {data.cometa.map((e, idx) =>
            <div key={idx} className="max-w-[544px] my-8 flex flex-col items-center">
              <img src={e.img} alt="" className="max-w-[200px] max-h-[300px]" />
              <a href={e.link} className="hover:underline">
                <h1 className="text-2xl text-cyan-900 font-bold my-4 text-justify">{e.title}</h1>
              </a>
              <div dangerouslySetInnerHTML={{ __html: e.text }} className="text-justify"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  </>
}

function Cyberdyne() {
  return <>
    <div className=" text-center">
      <div className="flex items-center flex-col bg-about">
        <div className="max-w-lg xl:max-w-4xl grid md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-8">
          {data.cyberdyne.map((e, idx) =>
            <div key={idx} className="max-w-[544px] my-8 flex flex-col items-center">
              <img src={e.img} alt="" className="max-w-[200px] max-h-[300px]" />
              <a href={e.link} className="hover:underline">
                <h1 className="text-2xl text-cyan-900 font-bold my-4 text-justify">{e.title}</h1>
              </a>
              <div dangerouslySetInnerHTML={{ __html: e.text }} className="text-justify"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  </>
}

const paths = ['vicon', 'motek', 'amti', 'cometa', 'cyberdyne']

export default function App() {
  const path = location.pathname.slice(9)
  paths.indexOf
  return (
    <>
      <Layout >
        {
          paths.indexOf(path) != -1 ?
            <>
              <Banner title={path.toUpperCase()} />
              {path == 'vicon' && <Vicon />}
              {path == 'motek' && <Motek />}
              {path == 'amti' && <Amti />}
              {path == 'cometa' && <Cometa />}
              {path == 'cyberdyne' && <Cyberdyne />}
            </>
            : null
        }
      </Layout>
    </>
  )
}