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
        name: 'Node.js, MySQL, MongoDB,NextJS',
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
    content: <p>Albanian Marketing Academy Being able to build a website and publish it online it is not
    enough.Depending on what the website is about , another important skill what a
    developer needs is aswell to know marketing strategies in order to know how to bring
    customers,viewers back to the website.At "Albanian Marketing Academy" besides social
    media marketing, I developed my skills on GOOGLE ADS,SEO in order to make an
    particular website better on SEO Ranking and aswell to manage each AD no matter what
    platform we are using!</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '02/2019 - 02/2020',
    location: 'Tirana, Albania',
    title: 'Web Developer/Designer - TIRANA SQUARE CENTER ',
    content: (
      <p>
        At Tirana Square Center I used to build websites mostly on Wordpress, depending on
what the client was asking for, I used to work in a team of 4 other developers and
designers. We used to design specific icons with Illustrator and upload them as SVG
(keeping the highest quality possible) and implement each icon where it was needed.I
used to get different types of plugins and edit each plugin on what would be the best for
our project's needs.
From customizing templates up to making custom plugins.
-My main skills were : WordPress (ELEMENTOR , WP Bakery),
PHP 8, HTML Structure, CSS, MYSQL DB
      </p>
    ),
  },
  {
    date: '03/2020 - 04/2021',
    location: 'Tirana, Albania',
    title: 'Web/App Developer/Designer - ELECTRAL SHPK',
    content: (
      <p>
        At Electral I had to build and maintain different websites from WordPress to other
frameworks such as Laravel. Working alone with no one else was a huge challenge and I
was able to test myself on how much pressure I could handle. Mostly at the time, I was
able to build complex websites in Wordpress very easily and the delivery time of
Wordpress Websites was much faster than Laravel. Working at Electral made Me realize
how much work I could handle alone and being able to work on 2-3 projects at the same
time. Besides working on templates and making the needed changes, I was able to
integrate different API-s on Laravel Projects such as:
• Facebook Pixel (Marketing Tool)
• Laravel Routes
• Laravel Controllers
• NodeJS
• ExpressJS
• Laravel payment getaways with PayPal/Bank Payment Gateways 
• Front-End on REACT 
• Stripe API 
• 2Checkout 
Developed good knowledge and skills when I was introduced to Laravel framework which
I understood how web-apps work.
Continuing at Electral, I expanded my skills from WordPress to Laravel, mastering the
intricacies of web applications. In Laravel, I specialized in full-stack development,
optimizing payment gateways for secure transactions. Simultaneously, I excelled in
ReactJS, crafting dynamic user interfaces. Collaborating with APIs like Stripe and
2Checkout, I ensured end-to-end solutions, showcasing versatility as a developer. My
journey signifies a seamless transition from WordPress to becoming a proficient full-stack
developer in Laravel, ReactJS, NextJS.
      </p>
    ),
  },
  {
    date: '04/2021 - 01/2022',
    location: 'Tirana, Albania',
    title: ' Web Developer/Designer | Marketing Specialist - IMPACT SHPK',
    content:
    <p>Worked on different fields of IT at IMPACT SHPK.Besides working with Website
    Development, I managed social media of the company aswell
    on:Instagram,Facebook,Linkedin & YouTube.Each post of the company and each video
    was spcifically designed on Adobe Photoshop/Illustrator and for the videos there was
    used Sony Vegas Video Editor.I also managed company Facebook ADS campaigns aswell
    until the team got bigger so I became the head of Marketing & Web Development
    Department at IMPACT.
    • Meta ADS
    • Google ADS
    • Social Media Management
    • Laravel - Full Stack
    • WordPress
    • Adobe Illustrator
    • Adobe Photoshop
    </p>
  },
  {
      date: '09/2021 - 05/2023',
      location: 'Las - Vegas, Nevada | Los Angeles, California',
      title: 'Web Developer/Designer | Project Manager & Client Relations - 4-Ducks Corporation (Remote)',
      content:
      <p>
        Web Developer/Designer | Project Manager & Client Relations Since 4-Ducks Corporation
was located in Las Vegas USA, I had to work remotely from my home. Knowing that
Albanian time is ahead of the USA, my first "task" as I put myself into was to stay awake
all night and get to know project information and talk directly with the client on Zoom
Calls. Each project was different from the other ones. Some of them needed to be worked
on WordPress, other ones on fully custom code on Laravel & other ones on Shopify. I
didn't work on all projects myself but I had the responsibility of them all. Each project had
3-4 other developers and I had to give them each project information and each task to
each one of them. I was responsible for the project deadline and I had to run tests, check
for errors, and the quality of the site before it got delivered on the final process right
before we had to present it to our clients.
Skills used and developed from 4-Ducks Corporation :
• WordPress (Theme customization,Plugin Customization, ELEMENTOR, WP Bakery,SEO)
• Shopify (Custom Store Development, Design, Different Payment Gateways)
• FIGMA
• Illustrator
• Full Stack Development
• Laravel / Laravel Nova
• ReactJS
• NodeJS
• ExpressJS
• NextJS
• Azure
• AWS
• RESTful API Development
• Database Design and Management (MySQL, MongoDB, PostgreSQL)
• Error Handling and Debugging
• ORM (Object-Relational Mapping)
• Authentication and Authorization
• ReactJS
• State Management
• Component-Based Architecture
• Deployment
• Communication
• Project Management
      </p>
  }
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Emilio N.Francisco',
      text: 'Working with Klajd was a game-changer for our business. Their team not only designed a visually stunning website but also integrated a custom CRM system that streamlined our client management process. The attention to detail and commitment to understanding our unique needs truly set them apart.',
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
  description: 'You can send me a direct e-mail for further communications as well',
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
