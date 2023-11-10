import Image from 'next/image'
import Header from './components/Header'
import MainContent from './components/MainContent'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-[12rem]  w-[100vw]">
      <Header/>
      <MainContent/>
    </main>
  )
}
