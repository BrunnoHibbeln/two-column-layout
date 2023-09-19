export default function EarlyAccessSection() {
  return (
    <section className="flex w-full flex-col gap-8 bg-light-blue px-8 py-16 text-grayish duration-300 sm:px-24 md:px-20 lg:flex-row lg:justify-between lg:px-32 lg:py-24">
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
      <section className="flex flex-col items-center justify-center gap-5 font-raleway lg:w-2/5 lg:items-start">
        <input
          className="w-4/5 rounded-md border px-5 py-3 lg:w-full"
          type="text"
          placeholder="email@exemple.com"
        ></input>
        <button className="w-4/5 rounded-md bg-blue px-5 py-3 font-bold text-grayish duration-200 active:brightness-75 md:hover:brightness-150 lg:w-2/4">
          Get Started For Free
        </button>
      </section>
    </section>
  )
}