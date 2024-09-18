import { createSignal } from 'solid-js'
import solidLogo from '../assets/solid.svg'
import viteLogo from '/vite.svg'


export function Index() {
  const [count, setCount] = createSignal(0)

  return (
    <div class='bg-black min-h-screen flex text-white justify-center flex-col items-center'>
      <div class='flex'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="w-24" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="w-24" alt="Solid logo" />
        </a>
      </div>
      <h1 class='font-bold my-4 text-2xl'>Vite + Solid</h1>
      <div class="text-center">
        <button class='p-2 px-4 bg-blue-600 rounded-xl hover:opacity-80' onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>

      </div>
      <div class='text-center mt-4 text-sm'>
        <p>
          Edit <span class='underline text-slate-200'>src/App.tsx</span> and save to test HMR
        </p>
        <p class="read-the-docs">
          Click on the Vite and Solid logos to learn more
        </p>
      </div>
    </div>
  )
}

