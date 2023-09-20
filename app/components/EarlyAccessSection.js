import Form from './Form'

export default function EarlyAccessSection() {
  return (
    <section className="flex w-full flex-col gap-8 bg-light-blue px-8 py-16 text-grayish duration-300 sm:px-24 md:px-32 lg:flex-row lg:justify-between lg:px-20 lg:py-24">
      <article className="flex flex-col gap-5 text-center lg:w-2/5 lg:text-left">
        <h2 className="font-raleway text-2xl font-bold lg:text-3xl">
          Get early access today
        </h2>
        <p className="font-open-sans">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </article>
      <Form
        sectionClasses="lg:w-2/5 lg:items-start"
        inputClasses="w-4/5 lg:w-full"
        placeholder="email@exemple.com"
        buttonClasses="w-4/5"
        buttonText="Get Started For Free"
        errorColor="text-grayish"
      />
    </section>
  )
}
