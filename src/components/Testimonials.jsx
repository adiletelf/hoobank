import PropTypes from 'prop-types'
import { feedback } from '../constants'
import { quotes } from '../assets'

function FeedbackCard({
  name, title, content, img,
}) {
  FeedbackCard.propTypes = {
    name: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    img: PropTypes.node.isRequired,
  }

  return (
    <div className='feedback-card flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5'>
      <img src={quotes} alt='double_quotes' className='w-[42px] h-[27px] object-contain' />
      <p className='font-poppins font-normal text-[18px] leading-[32px] my-10'>{content}</p>

      <div className='flex flex-row'>
        <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full' />
        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibol text-[20px] leading-[32px]'>{name}</h4>
          <p className='font-poppins font-bold text-[16px] leading-[24px] text-dimWhite'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id='clients' className='paddingY flexCenter flex-col relative'>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[15%] rounded-full blue__gradient' />
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className='heading2'>
          What people are
          <br className='hidden sm:block' />
          saying about us
        </h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className='paragraph text-left max-w-[450px]'>
            Everything you need to accept card payments and grow your business anywhere on the
            planet.
          </p>
        </div>
      </div>

      <div className='feedback-container flex flex-wrap sm:justify-start justify-center w-full relative z-[1]'>
        {feedback.map((card) => (
          <FeedbackCard
            key={card.id}
            name={card.name}
            title={card.title}
            content={card.content}
            img={card.img}
          />
        ))}
      </div>
    </section>
  )
}
