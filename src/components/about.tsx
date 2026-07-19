import Heading from "./heading";

const About = () => {
  return (
    <section className="flex flex-col gap-y-3">
      <Heading title="About" />
      <span className="text-sm text-zinc-300 md:text-base">
        A <b>Full-Stack</b>, <b>AI</b>, and <b>Web3</b> Engineer passionate
        about building production-grade software. I enjoy working across the
        stack, from frontend experiences and backend infrastructure to
        intelligent retrieval systems and blockchain applications, with a focus
        on scalability, reliability, and clean architecture.
      </span>
    </section>
  );
};

export default About;
