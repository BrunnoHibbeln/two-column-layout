import Image from 'next/image'

import { Open_Sans as OpenSans, Raleway } from 'next/font/google'

import Avatar from './images/avatar-testimonial.jpg'
import Arrow from './images/icon-arrow.svg'
import Illustration1 from './images/illustration-1.svg'
import Illustration2 from './images/illustration-2.svg'
import Logo from './images/logo.svg'
import Quote from './images/quote.png'
import Footer from './components/Footer'
import EarlyAccess from './components/EarlyAccess'

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
      className={`${openSans.variable} ${raleway.variable} flex flex-col gap-32`}
    >
      <header className="flex flex-row items-center justify-between px-8 pt-10">
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

      <section className="flex flex-col-reverse gap-10 px-8">
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
        <Image src={Illustration1} alt="Illustration image" />
      </section>

      <section className="flex flex-col-reverse gap-10 px-8">
        <section className="flex flex-col gap-5">
          <article className="flex flex-col gap-5 text-center">
            <h2 className="font-raleway text-xl font-black">
              Stay productive, wherever you are
            </h2>
            <p className="font-open-sans">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="font-open-sans">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
          </article>
          <section className="flex flex-col items-center justify-center gap-10 py-7">
            <a
              className="flex w-40 flex-row items-center justify-center gap-2 border-b border-green pb-2 text-green hover:brightness-125"
              href="#"
            >
              <button>See how works</button>
              <Image className="h-5 w-5" src={Arrow} alt="Arrow icon" />
            </a>
            <article className="flex w-full flex-col justify-center gap-5 rounded-xl p-8 shadow-xl">
              <Image className="h-4 w-4" src={Quote} alt="Quote icon" />
              <p className="font-open-sans text-sm font-medium leading-6">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <section className="flex flex-row items-center gap-4">
                <Image
                  className="h-8 w-8 rounded-full"
                  src={Avatar}
                  alt="Avatar Photo"
                />
                <article className="flex flex-col">
                  <strong className="font-open-sans text-sm">
                    Kyle Burton
                  </strong>
                  <span className="font-open-sans text-xs">
                    Founder & CEO, Huddle
                  </span>
                </article>
              </section>
            </article>
          </section>
        </section>
        <Image className="py-10" src={Illustration2} alt="Illustration image" />
      </section>

      <section>
        <EarlyAccess />
        <Footer />
      </section>
    </main>
  )
}
