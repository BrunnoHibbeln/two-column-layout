import Image from 'next/image'

import { Open_Sans as OpenSans, Raleway } from 'next/font/google'

import Logo from './images/logo.svg'
import Illustration1 from './images/illustration-1.svg'

const openSans = OpenSans({
  subsets: ['latin'],
  variable: ['--font-open-sans'],
})
const raleway = Raleway({
  subsets: ['latin'],
  variable: ['--font-raleway'],
})

export default function Home() {
  return (
    <main
      className={`${openSans.variable} ${raleway.variable} flex flex-col gap-32 px-8 py-10`}
    >
      <header className="flex flex-row items-center justify-between">
        <Image className="h-6 w-20" src={Logo} alt="Logo icon" />
        <section className="flex flex-row justify-center gap-5 font-raleway text-body">
          <a className="hover:text-blue" href="#">
            Features
          </a>
          <a className="hover:text-blue" href="#">
            Team
          </a>
          <a className="hover:text-blue" href="#">
            Sign In
          </a>
        </section>
      </header>

      <section className="grid grid-cols-1 grid-rows-2 gap-10">
        <section className="flex flex-col gap-5">
          <article className="flex flex-col gap-5 text-center font-open-sans">
            <h2 className="text-2xl font-black">
              All your files in one secure location, accessible anywhere.
            </h2>
            <p>
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
          </article>
          <section className="flex flex-col items-center justify-center gap-5 font-raleway">
            <input
              className="w-full rounded-md border px-5 py-3"
              type="text"
              placeholder="Enter your email"
            ></input>
            <button className="w-full rounded-md bg-blue px-5 py-3 font-bold text-grayish duration-200 active:brightness-75 xl:hover:brightness-150">
              Get Started
            </button>
          </section>
        </section>
        <Image
          className="row-start-1"
          src={Illustration1}
          alt="Illustration image"
        />
      </section>

      <section>
        <section>
          <article></article>
          <article></article>
        </section>
        <Image />
      </section>

      <section>
        <article></article>
        <section></section>
      </section>
      <footer>
        <section>
          <Image />
          <span></span>
          <span></span>
        </section>
        <section>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
        </section>
        <section>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
        </section>
        <section>
          <Image />
          <Image />
          <Image />
        </section>
      </footer>
    </main>
  )
}
