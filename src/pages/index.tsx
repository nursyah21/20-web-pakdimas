import Banner from "../assets/banner.jpg"
import Logo from "../assets/logo.png"
import { A } from "@solidjs/router"
import { createSignal, Show } from "solid-js"

export function Index() {
  const [isModal, setIsModal] = createSignal(false)


  return (
    <div class=''>
      <div class='fixed top-0 text-white flex items-center justify-between w-full p-4 z-10'>
        <div class='flex items-center gap-x-2'>
          <button class="hover:bg-slate-700 p-1 md:hidden" onClick={() => setIsModal(true)}>
            {/* menu icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          <img src={Logo} alt="" class="w-14" />
          <h1 class='font-bold text-lg'>PT Summit Vision Nusantara</h1>
        </div>
        <div class='items-center md:flex text-slate-300 gap-x-4 hidden'>
          <A href="/" activeClass="text-white" class="hover:text-white">Home</A>
          <A href="/products">Products and Services</A>
          <A href="/partner">Partner</A>
        </div>
      </div>

      {/* modal sidebar */}
      <Show when={isModal()}>
        <div class="flex flex-col fixed left-0 bg-gray min-h-full text-white w-full p-4 gap-4">
          <div>
            <button class="hover:opacity-80 bg-gray p-1" onClick={() => setIsModal(false)}>
              {/* close icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <A href="/" activeClass="text-white" class="hover:text-white">Home</A>
          <A href="/products">Products and Services</A>
          <A href="/partner">Partner</A>
        </div>
      </Show>

      <div class="relative text-white">
        <img src={Banner} alt="" class='w-full h-[80vh] object-cover' />
        <div class="absolute flex inset-0 items-center justify-center flex-col text-4xl font-bold">
          <h1>Welcome to the official website</h1>
          <h1>PT Summit Vision Nusantara</h1>
        </div>
      </div>
    </div>
  )
}

