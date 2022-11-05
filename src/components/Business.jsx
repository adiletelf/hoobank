import PropTypes from 'prop-types'
import { features } from '../constants'
import Button from './Button'

function FeatureCard({
  icon, title, content,
}) {
  FeatureCard.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }

  return (
    <div className='feature-card flex flex-row p-5 rounded-[20px]'>
      <div className='w-[64px] h-[64px] rounded-full flexCenter bg-dimBlue'>
        <img src={icon} alt='icon' className='w-1/2 h-1/2 object-contain' />
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-[18px] leading-[23px] mb-1'>{title}</h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>{content}</p>
      </div>
    </div>
  )
}

export default function Business() {
  return (
    <section id='features' className='section'>
      <div className='sectionInfo'>
        <h2 className='heading2'>
          You do the business,
          <br className='hidden sm:block' />
          we&apos;ll handle the money.
        </h2>
        <p className='paragraph max-w-[470px] mt-5'>
          With the right credit card, you can improve your financial life by building credit,
          earning rewards and saving money. But with hundreds of credit marks on the market.
        </p>

        <Button styles='mt-10' />
      </div>

      <div className='sectionImg flex-col space-y-6'>
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            content={feature.content}
          />
        ))}
      </div>
    </section>
  )
}
