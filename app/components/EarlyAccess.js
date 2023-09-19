export default function EarlyAccess() {
  return (
    <section className="flex w-full flex-col gap-8 bg-light-blue px-8 py-16 text-grayish">
      <article className="flex flex-col gap-5 text-center">
        <h2 className="font-raleway text-2xl font-bold">
          Get early access today
        </h2>
        <p className="font-open-sans">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
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
  )
}
