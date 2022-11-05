import { clients } from '../constants'

export default function Clients() {
  return (
    <section className='flexCenter my-4'>
      <div className='flexCenter flex-wrap w-full'>
        {clients.map((client) => (
          <div key={client.id} className='flex-1 flexCenter sm:min-w-[192px] min-w-[120px]'>
            <img src={client.logo} alt='client' className='sm:w-[192px] w-[100px] object-contain hover:brightness-200' />
          </div>
        ))}
      </div>
    </section>
  )
}
