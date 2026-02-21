import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <h1 className="hero-name">Michelle Zhang</h1>
      <p className="hero-role">Fullstack Engineer</p>
      <p className="hero-desc">
        I'm a Staff Software Engineer at CallRail, where I work across the stack in TypeScript, Angular, and Ruby and help lead front-end efforts. I care about building accessible, maintainable UIs and shipping products that people actually use.
      </p>
      <a href="#projects" className="hero-cta">
        View my work
      </a>
    </section>
  );
}
