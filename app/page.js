import Image from 'next/image'

import { Open_Sans as OpenSans, Raleway } from 'next/font/google'

import Avatar from './images/avatar-testimonial.jpg'
import Arrow from './images/icon-arrow.svg'
import Email from './images/icon-email.svg'
import Facebook from './images/icon-facebook.svg'
import Instagram from './images/icon-instagram.svg'
import Phone from './images/icon-phone.svg'
import Twitter from './images/icon-twitter.svg'
import Illustration1 from './images/illustration-1.svg'
import Illustration2 from './images/illustration-2.svg'
import Logo from './images/logo.svg'
import Quote from './images/quote.png'

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
      className={`${openSans.variable} ${raleway.variable} flex flex-col gap-32 py-10`}
    >
      <header className="flex flex-row items-center justify-between px-8">
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

      <section className="grid grid-cols-1 grid-rows-2 gap-10 px-8">
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

      <section className="grid grid-cols-1 grid-rows-2 gap-10 px-8">
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
            <article className="flex w-full flex-col justify-center gap-5 px-8">
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
        <Image
          className="row-start-1"
          src={Illustration2}
          alt="Illustration image"
        />
      </section>

      <section className="flex w-full flex-col gap-8 bg-light-blue px-8 py-16 text-grayish">
        <article className="flex flex-col gap-5 text-center">
          <h2 className="font-raleway text-2xl font-bold">
            Get early access today
          </h2>
          <p className="font-open-sans">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </article>
        <section className="flex flex-col items-center justify-center gap-5 font-raleway">
          <input
            className="w-4/5 rounded-md border px-5 py-3"
            type="text"
            placeholder="email@exemple.com"
          ></input>
          <button className="w-4/5 rounded-md bg-blue px-5 py-3 font-bold text-grayish duration-200 active:brightness-75 xl:hover:brightness-150">
            Get Started For Free
          </button>
        </section>
      </section>

      <footer className="flex flex-col gap-12 bg-dark-blue px-8 py-16 font-open-sans text-grayish">
        <section className="flex flex-col gap-5">
          <Image className="pb-5" src={Logo} alt="Logo Icon" />
          <section className="flex flex-row items-center gap-5">
            <Image src={Phone} alt="Phone Icon" />
            <span>Phone: +1-543-123-4567</span>
          </section>
          <section className="flex flex-row items-center gap-5">
            <Image src={Email} alt="Email Icon" />
            <span>example@fylo.com</span>
          </section>
        </section>
        <section className="flex flex-col gap-3">
          <a href="#">About Us</a>
          <a href="#">Jobs</a>
          <a href="#">Press</a>
          <a href="#">Blog</a>
        </section>
        <section className="flex flex-col gap-5">
          <a href="#">Contact Us</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </section>
        <section className="flex w-full flex-row items-center justify-center gap-6">
          <a href="#">
            <Image
              className="h-8 w-8 rounded-full border border-white p-1.5"
              src={Facebook}
              alt="Facebook Icon"
            />
          </a>
          <a href="#">
            <Image
              className="h-8 w-8 rounded-full border border-white p-1.5"
              src={Twitter}
              alt="Twitter Icon"
            />
          </a>
          <a href="#">
            <Image
              className="h-8 w-8 rounded-full border border-white p-1.5"
              src={Instagram}
              alt="Instagram Icon"
            />
          </a>
        </section>
      </footer>
    </main>
  )
}
