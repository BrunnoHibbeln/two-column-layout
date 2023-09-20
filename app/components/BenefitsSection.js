import Image from 'next/image'

import Illustration2 from '../images/illustration-2.svg'
import Avatar from '../images/avatar-testimonial.jpg'
import Arrow from '../images/icon-arrow.svg'
import Quote from '../images/quote.png'

export default function BenefitsSection() {
  return (
    <section className="flex flex-col-reverse gap-10 bg-light-grayish px-8 pb-32 duration-300 sm:px-24 md:px-32 lg:flex-row lg:items-center lg:px-20 lg:pb-20">
      <section className="flex flex-col gap-5 text-dark-blue lg:gap-0">
        <article className="flex flex-col gap-5 text-center lg:text-left">
          <h2 className="font-raleway text-xl font-black lg:text-4xl lg:font-extrabold">
            Stay productive, wherever you are
          </h2>
          <p className="font-open-sans lg:font-medium">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="font-open-sans lg:font-medium">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>
        </article>
        <section className="flex w-full flex-col items-center justify-center gap-10 py-7 lg:items-start">
          <a
            className="flex min-w-fit flex-row items-center justify-center gap-2 border-b border-green pb-2 text-green duration-300 hover:brightness-125"
            href="#"
          >
            <button>See how Fylo works</button>
            <Image className="h-5 w-5" src={Arrow} alt="Arrow icon" />
          </a>
          <article className="flex w-full flex-col justify-center gap-5 rounded-lg bg-white p-8 shadow-xl shadow-gray lg:w-3/4">
            <Image className="h-4 w-4" src={Quote} alt="Quote icon" />
            <p className="font-open-sans text-sm font-medium leading-6">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <section className="flex flex-row items-center gap-4">
              <Image
                className="h-8 w-8 rounded-full"
                src={Avatar}
                alt="Avatar Photo"
              />
              <article className="flex flex-col">
                <strong className="font-open-sans text-sm">Kyle Burton</strong>
                <span className="font-open-sans text-xs">
                  Founder & CEO, Huddle
                </span>
              </article>
            </section>
          </article>
        </section>
      </section>
      <Image
        className="py-10 lg:w-2/4 lg:p-0"
        src={Illustration2}
        alt="Illustration image"
      />
    </section>
  )
}
