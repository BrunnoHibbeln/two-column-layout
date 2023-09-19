import Image from 'next/image'
import Logo from '../images/logo.svg'
import Anchor from './Anchor'

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between px-8 pt-10 lg:px-20">
      <Image className="h-6 w-20 lg:h-11 lg:w-36" src={Logo} alt="Logo icon" />
      <section className="flex flex-row justify-center gap-5 font-raleway text-body lg:gap-12 lg:font-open-sans">
        <Anchor text="Features" />
        <Anchor text="Team" />
        <Anchor text="Sign In" />
      </section>
    </header>
  )
}
