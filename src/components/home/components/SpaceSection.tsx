import {BsRocketTakeoff} from 'react-icons/bs'

const SpaceSection = () => (
  <section className='w-full bg-blue h-60 flex items-center overflow-hidden'>
    <div>
      <BsRocketTakeoff
        className='text-9xl text-slate-200 rotate-45 animate-move-rocket ' 
      />
    </div>
  </section>
);

export default SpaceSection;
