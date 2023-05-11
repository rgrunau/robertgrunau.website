import {IoWarningOutline} from 'react-icons/io5'


interface BioSectionProps {
  shortBio: string,
}

const BioSection = ({shortBio}: BioSectionProps) => (
  <section className='flex flex-col sm:w-9/12 md:w-5/6 xl:w-full xl:max-w-7xl sm:mx-auto items-center justify-center gap-8 md:gap-4 md:py-8 mt-12'>
    <div className='flex flex-col items-center justify-center gap-8'>
      <div className='self-start p-2'>
        <h2 className='text-3xl md:text-4xl xl:text-5xl text-white'>"Short" Bio</h2> 
      </div>
      <div className='flex items-center gap-8 p-2'>
        <div>
          <IoWarningOutline className='text-3xl text-yellow-200'/>
        </div>
        <div className='text-center'>
          <h3 className='text-xs sm:text-lg xl:text-xl text-text-white'>WARNING THIS LONG, IT WAS LATE, FORGIVE ME</h3>
        </div>
        <div>
          <IoWarningOutline className='text-3xl rotate-180 text-yellow-200'/>
        </div>
      </div>
      <article 
        className='flex flex-col items-center justify-center text-sm md:text-lg xl:text-xl text-white gap-8 p-2' 
        dangerouslySetInnerHTML={{__html: shortBio}}
      />
    </div>
  </section>
)

export default BioSection;