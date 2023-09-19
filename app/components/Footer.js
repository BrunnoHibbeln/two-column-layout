import Image from 'next/image'

import Facebook from './icons/Facebook'
import Twitter from './icons/Twitter'
import Instagram from './icons/Instagram'

import Email from '../images/icon-email.svg'
import Phone from '../images/icon-phone.svg'
import Logo from './icons/Logo'
import Anchor from './Anchor'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-12 bg-dark-blue px-8 py-16 font-open-sans text-grayish md:px-20 lg:flex-row lg:justify-around">
      <section className="flex flex-col gap-6">
        <Logo />
        <section className="flex flex-row items-center gap-5">
          <Image src={Phone} alt="Phone Icon" />
          <span>Phone: +1-543-123-4567</span>
        </section>
        <section className="flex flex-row items-center gap-5">
          <Image src={Email} alt="Email Icon" />
          <span>example@fylo.com</span>
        </section>
      </section>
      <section className="flex flex-col gap-3 lg:pt-20">
        <Anchor text="About Us" />
        <Anchor text="Jobs" />
        <Anchor text="Press" />
        <Anchor text="Blog" />
      </section>
      <section className="flex flex-col gap-5 lg:pt-20">
        <Anchor text="Contact Us" />
        <Anchor text="Terms" />
        <Anchor text="Privacy" />
      </section>
      <section className="flex w-full flex-row items-center justify-center gap-6 lg:h-min lg:w-min lg:pt-20">
        <Facebook />
        <Twitter />
        <Instagram />
      </section>
    </footer>
  )
}
