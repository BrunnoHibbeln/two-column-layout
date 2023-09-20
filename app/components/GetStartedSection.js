import Image from 'next/image'
import Illustration1 from '../images/illustration-1.svg'
import Form from './Form'

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
        <Form
          sectionClasses="lg:w-11/12 lg:flex-row"
          inputClasses="w-full"
          placeholder="Enter your email"
          buttonClasses="w-full"
          buttonText="Get Started"
          errorColor="text-red-500"
        />
      </section>
      <Image
        className="h-auto lg:w-2/4"
        src={Illustration1}
        alt="Illustration image"
      />
    </section>
  )
}
