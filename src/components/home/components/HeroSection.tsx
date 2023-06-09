import { useCallback } from 'react';
import { FaLaptopCode, FaUserAstronaut, FaPlus } from 'react-icons/fa'
import {SiTypescript, SiReactquery, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiReact} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'
import { Author, Skill } from '../const/interfaces';



interface HeroSectionviewProps {
  author: Author
  iconToRender: (skill: Skill) => JSX.Element | null,
}

const View = ({author, iconToRender}: HeroSectionviewProps) => (
  <div className='flex flex-col sm:w-9/12 md:w-5/6 xl:w-full xl:max-w-7xl sm:mx-auto items-center justify-center gap-8'>
  <div className='w-full flex flex-col lg:flex-row items-center justify-between p-2 xl:p-0 gap-8'>
    <div className='flex flex-col items-center justify-center gap-8 lg:order-2 xl:w-1/2'>
      <div className='w-full flex items-center justify-evenly'>
        <div className='flex flex-col items-center justify-center'>
          <FaUserAstronaut className='text-6xl lg:text-8xl text-yellow-200'/>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <FaPlus className='text-5xl text-white'/>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <FaLaptopCode className='text-6xl lg:text-8xl text-white' />
        </div>
      </div>
      <div className='w-full flex flex-wrap items-center justify-evenly gap-2 p-2'>
        {author.skills.map((skill: Skill) => (
          <div key={skill.id} 
            className='text-2xl odd:text-yellow-200 even:text-white md:text-3xl lg:text-4xl flex flex-col items-center justify-center '
          >
            { iconToRender && iconToRender(skill)}
          </div>
        ))}
      </div>
    </div>
    <div className='p-2 text-center lg:order-1 lg:text-left xl:w-1/2'>
      <h1 className='text-5xl lg:text-7xl text-white'>I make the things you see on the screen</h1>
    </div>
  </div>
</div>
);


interface SkillIconPair {
  [key: string]: JSX.Element,
}

const SkillsIcon: SkillIconPair = {
  'react': <SiReact />,
  'react query': <SiReactquery />,
  'javascript': <SiJavascript />,
  'typescript': <SiTypescript />,
  'html': <SiHtml5 />,
  'css': <SiCss3 />,
  'tailwind': <SiTailwindcss />,
  'nextjs': <TbBrandNextjs />,
}

interface HeroSectionProps {
  author: Author,

}

const HeroSection = ({author}: HeroSectionProps) => {

  const iconToRender = useCallback((skill: Skill) => {
    const icon = SkillsIcon[skill.skillType];
    return icon ? icon : null;
  }, []);

  const hookProps = {
    iconToRender,
    author,
  }
  return (
    <View 
      {...hookProps}
    />
  );
};


export default HeroSection;