import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Klajdi Belishaku Resume',
  description: "Klajdi Belishaku Resume built with react ",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Klajdi Belishaku.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an Albania based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        as a <strong className="text-stone-100">FreeLancer</strong> within React / Laravel frameworks and WordPress & Shopify CMS. Everything under project needs!
        With 5 years of experience on front-end and back-end I am able to bring the best quality of coding and management of tasks and projects.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training at the <strong className="text-stone-100">GYM</strong>,
        working on myself, <strong className="text-stone-100">reading about new technologies</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Albania</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `
  As a Software Engineer, I am the architect weaving intricate codes on platforms like Laravel, WordPress, and React. Yet, my passions extend far beyond the digital realm. I'm just as enthusiastic about cars as I am about crafting elegant algorithms. With a fervor for the open road and the rush of automotive innovation, my love for engines parallels my zeal for coding.
  
  Nature, an endless reservoir of inspiration, holds a special place in my heart. From the calming whispers of towering forests to the vast expanses of serene landscapes, the beauty of the natural world fuels my creativity.
  
  My journey into the labyrinth of technology began in my formative years. Fueled by an insatiable curiosity for computers and the mysterious language of coding, I embarked on a quest that started in childhood. This innate drive has been the guiding force behind my unwavering dedication to my craft.
  
  Whether amidst the complexities of software or navigating the winding roads, I persist with the same vigor and commitment. Embracing the harmony between technology and nature, I am a Software Engineer, steering through lines of code with the same thrill as the open highway—a fusion of passion for technology and an unyielding love for the natural world.`,
  aboutItems: [
    {label: 'Location', text: 'Tirana, AL', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Albanian', Icon: FlagIcon},
    {label: 'Interests', text: 'Coding,Cars,Entrepreneurship', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Barleti', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Software Engineer', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Italian',
        level: 4,
      },

    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML,CSS,JS',
        level: 10,
      },
      {
        name: 'ReactJs',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Laravel',
        level: 8,
      },
      {
        name: 'Laravel Nova',
        level: 8,
      },
    ],
  },
  {
    name: 'CMS Development',
    skills: [
      {
        name: 'Wordpress',
        level: 10,
      },
      {
        name: 'Shopify',
        level: 10,
      }
    ]
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'SELECTOURS',
    description: 'Travel Agency in Albania - Laravel',
    url: 'https://selectours.al',
    image: porfolioImage1,
  },
  {
    title: 'Design & Build London',
    description: 'Architecture and Construction Company in London',
    url: 'https://designandbuildlondon.com',
    image: porfolioImage2,
  },
  {
    title: 'Restaurantware',
    description: 'E-commerce company serving foodservice professionals around the globe.',
    url: 'https://www.restaurantware.com/',
    image: porfolioImage3,
  },
  {
    title: 'By Best Shop',
    description: 'E-Commerce Jewerly Shop',
    url: 'https://bybest.shop/',
    image: porfolioImage4,
  },
  {
    title: 'ilovewoo',
    description: 'E-Commerce clothes & accessories',
    url: 'https://ilovewoo.com/',
    image: porfolioImage6,
  },
  {
    title: 'CryptoDaily',
    description: 'Cryptocurrency, Investing, Finance News Site',
    url: 'https://cryptodaily.co.uk/',
    image: porfolioImage8,
  },
  {
    title: 'The Grove LA',
    description: 'E-Commerce, Booking Events ,Cinema',
    url: 'https://thegrovela.com/',
    image: porfolioImage9,
  },
  {
    title: 'Reforma News Site',
    description: 'News Listing Website based in Albania',
    url: 'https://gazetareforma.com/',
    image: porfolioImage10,
  },
  {
    title: 'SnapFood',
    description: 'Delivery App, Connecting customers to fast food & restaurants',
    url: 'https://snapfood.al/',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'October 2018 - July 2021',
    location: 'Tirana, Albania',
    title: 'Computer Science,Applied Informatics - University Barleti',
    content: <p>Starting computer science at "University Barlety" , I improved my front end skills and backend too.I have been able to
    develop a website with Technologies of WordPress/Laravel, building different ecommerce stores and listing websites
    from scratch.At the same time I was going to school I worked after it on a few companies</p>,
  },
  {
    date: 'March 2021',
    location: 'Tirana, Albania',
    title: 'MARKETING SPECIALIST - Albanian Marketing Academy',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'devklajd@proton.me',
      href: 'mailto:devklajd@proton.me',
    },
    {
      type: ContactType.Location,
      text: 'Tirana, Albania',
      href: 'https://www.google.com/maps/@41.3331847,19.8178232,13z?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@_klajd_',
      href: 'https://www.instagram.com/_klajd_/',
    },
    {
      type: ContactType.Github,
      text: 'devklajd',
      href: 'https://github.com/devklajd',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/devklajd'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/klajd26/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/_klajd_/'},
];
