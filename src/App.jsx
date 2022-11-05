import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from './components'

export default function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className='paddingX flexCenter'>
        <div className='boxWidth'>
          <Navbar />
        </div>
      </div>

      <div className='bg-primary flexStart'>
        <div className='boxWidth'>
          <Hero />
        </div>
      </div>
      <div className='bg-primary paddingX flexStart'>
        <div className='boxWidth'>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}
