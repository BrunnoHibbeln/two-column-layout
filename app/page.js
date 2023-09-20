import { Open_Sans as OpenSans, Raleway } from 'next/font/google'

import Header from './components/Header'
import GetStartedSection from './components/GetStartedSection'
import BenefitsSection from './components/BenefitsSection'
import EarlyAccessSection from './components/EarlyAccessSection'
import Footer from './components/Footer'

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
      className={`${openSans.variable} ${raleway.variable} flex flex-col bg-white`}
    >
      <Header />
      <section className="flex flex-col pt-32 duration-300 lg:pt-20">
        <GetStartedSection />
        <BenefitsSection />
      </section>
      <section>
        <EarlyAccessSection />
        <Footer />
      </section>
    </main>
  )
}
