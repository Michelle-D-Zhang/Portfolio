import './About.css';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Python',
  'Flutter',
  'Angular',
  'Node.js',
  'Express',
  'HTML & CSS',
  'PHP',
  'MySQL',
  'SQL Server',
  'MongoDB',
  'Oracle',
  'PostgreSQL',
  'JSON',  
  'Docker',
  'Github',  
  'Front-end Development',
  'Back-end Development',
  'Mobile Application Development',
  'Microsoft Office',
  'Microsoft Excel',
  'Microsoft Word',  
  'User Acceptance Testing',
  'Problem Solving',
  'Communication',
  'Leadership',
  'Data Analysis',
  'Technical Writing',
  'Research',
  'Troubleshooting',
  'Product Management',
  'Project Management',
  'Team Management',
  'Presentation Skills',
  'Analytical Skills',
  'Time Management',
];

export default function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section-heading">
        <span className="section-number">01.</span>
        About Me
      </h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a Fullstack Engineer with over 8 years of experience building web applications and leading front-end efforts. I'm currently a Staff Software Engineer at CallRail, where I work in TypeScript, Angular, and Ruby and helped launch CallRail's first Voice AI product.
          </p>
          <p>
            Previously I've worked at AT&T as a Software Engineer (Angular, Express, React), at Ciena on NFV orchestration and OpenStack, and as an Undergraduate Researcher at Georgia Tech exploring Software Defined Networking. I've also held roles in network support and as a Research Intern at the University of Central Florida.
          </p>
          <p>
            I care about clean architecture, reducing build times, and building accessible, maintainable UIs. When I'm not coding, I enjoy staying active and learning new tools and practices.
          </p>
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
