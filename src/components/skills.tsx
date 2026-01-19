import { skills } from "@/data/skills";
import { Badge } from "./ui/badge";
import Heading from "./heading";

const Skills = () => {
  return (
    <section className="flex flex-col gap-y-3">
      <Heading title="Skills" />
      <div className="flex flex-row flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <Badge
            className="cursor-pointer rounded-md bg-zinc-100 text-base text-gray-950 transition-transform hover:-translate-y-1"
            key={idx}
          >
            {skill.name}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default Skills;
