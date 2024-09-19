import { createSignal } from 'solid-js'
import solidLogo from '../assets/solid.svg'
import viteLogo from '/vite.svg'
import Banner from "../assets/banner.jpg"
import Logo from "../assets/logo.png"
import Search from "../assets/search.svg"

export function Index() {
  const [count, setCount] = createSignal(0)

  return (
    <div class=''>
      <div class='fixed top-0 text-white flex items-center justify-between w-full p-2'>
        <div class='flex items-center'>
          <img src={Logo} alt="" />
          <h1 class='font-bold text-xl'>PT Summit Vision Nusantara</h1>
        </div>
        <div class='items-center flex text-slate-200 gap-x-4'>
          <a href="/" >Home</a>
          <a href="/products">Products and Services</a>
          <a href="/partner">Partner</a>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

          </button>
        </div>
      </div>
      <img src={Banner} alt="" class='w-full' />
    </div>
  )
}

