import {FaGithub, FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa';

interface SocialLinks {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLinks[] = [
  {platform: 'github', url: 'https://github.com/rgrunau', icon: <FaGithub />},
  {platform: 'linkedin', url: 'https://www.linkedin.com/in/rjgrunau/', icon: <FaLinkedin />},
  {platform: 'twitter', url: 'https://twitter.com/rjgrunau', icon: <FaTwitter/>},
  {platform: 'instagram', url: 'https://instagram.com/rjgrunau', icon: <FaInstagram/>},
]


const SocialList = () => (
  <div className='flex max-w-7x gap-4 p-4'>
      {socialLinks.map((socailLink) => (
        <div 
          key={socailLink.platform}
          className='even:text-slate-200 odd:text-yellow-200'
        >
          <a 
            href={socailLink.url}
            target='_blank'
            rel='noopener noreferrer'
            className='decoration-none text-4xl'
          >
            {socailLink.icon}
          </a>
        </div>
      ))}
    </div>
);

export default SocialList;