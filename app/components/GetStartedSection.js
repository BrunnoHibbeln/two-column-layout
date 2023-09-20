import Image from 'next/image'
import Illustration1 from '../images/illustration-1.svg'

export default function GetStartedSection() {
  return (
    <section className="flex flex-col-reverse gap-10 bg-mobile bg-contain bg-local bg-bottom bg-no-repeat px-8 pb-32 duration-300 sm:px-24 md:px-32 lg:flex-row lg:items-center lg:bg-desktop lg:px-20 lg:pb-80">
      <section className="flex flex-col gap-5 text-dark-blue">
        <article className="flex flex-col gap-5 text-center font-open-sans lg:text-left">
          <h2 className="text-2xl font-black lg:font-raleway lg:text-4xl lg:font-extrabold lg:leading-[3.5rem]">
            All your files in one secure location, accessible anywhere.
          </h2>
          <p className="lg:font-medium">
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
        </article>
        <section className="flex flex-col items-center justify-center gap-5 font-raleway lg:w-11/12 lg:flex-row">
          <input
            className="w-full rounded-md border px-5 py-3"
            type="text"
            placeholder="Enter your email"
          ></input>
          <button className="w-full rounded-md bg-blue px-5 py-3 font-bold text-grayish duration-200 active:brightness-75 lg:w-2/4 lg:hover:brightness-150">
            Get Started
          </button>
        </section>
      </section>
      <Image
        className="h-auto lg:w-2/4"
        src={Illustration1}
        alt="Illustration image"
      />
    </section>
  )
}
