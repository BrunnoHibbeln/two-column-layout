import Image from 'next/image'

import Facebook from './icons/Facebook'
import Twitter from './icons/Twitter'
import Instagram from './icons/Instagram'

import Email from '../images/icon-email.svg'
import Phone from '../images/icon-phone.svg'
import Logo from './icons/Logo'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-12 bg-dark-blue px-8 py-16 font-open-sans text-grayish">
      <Logo />
      <section className="flex flex-col gap-5">
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
        <a className="hover:text-blue" href="#">
          About Us
        </a>
        <a className="hover:text-blue" href="#">
          Jobs
        </a>
        <a className="hover:text-blue" href="#">
          Press
        </a>
        <a className="hover:text-blue" href="#">
          Blog
        </a>
      </section>
      <section className="flex flex-col gap-5">
        <a className="hover:text-blue" href="#">
          Contact Us
        </a>
        <a className="hover:text-blue" href="#">
          Terms
        </a>
        <a className="hover:text-blue" href="#">
          Privacy
        </a>
      </section>
      <section className="flex w-full flex-row items-center justify-center gap-6">
        <Facebook />
        <Twitter />
        <Instagram />
      </section>
    </footer>
  )
}
