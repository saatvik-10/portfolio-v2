import Heading from "./heading";

const About = () => {
  return (
    <section className="flex flex-col gap-y-3">
      <Heading title="About" />
      <span className="text-sm md:text-base text-zinc-300">
        A Full-Stack and Web3 Developer interested in building and understanding
        reliable, scalable web systems. I enjoy working across the stack, from
        user-facing interfaces to backend and blockchain logic, with a focus on
        clean architecture and predictable behavior.
      </span>
    </section>
  );
};

export default About;
