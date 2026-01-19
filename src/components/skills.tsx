import { skills } from "@/data/skills";
import { Badge } from "./ui/badge";
import Heading from "./heading";
import Image from "next/image";
import { Modal } from "./ui/animated-modal";

const Skills = () => {
  return (
    <section className="flex flex-col gap-y-3">
      <Heading title="Skills" />
      <div className="flex flex-row flex-wrap gap-1 md:gap-2">
        {skills.map((skill, idx) => (
          <Modal key={idx}>
            <Badge className="group/modal-btn relative flex cursor-pointer justify-center overflow-hidden rounded-md border-0 bg-zinc-100 px-2 py-0.5 text-xs text-gray-950 md:text-base">
              <span className="text-center transition duration-500 group-hover/modal-btn:translate-x-80">
                {skill.name}
              </span>
              <div
                className={`absolute inset-0 flex -translate-x-80 items-center justify-center transition duration-500 group-hover/modal-btn:translate-x-0 ${skill.bg}`}
              >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  height={24}
                  width={24}
                  className="object-contain"
                />
              </div>
            </Badge>
          </Modal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
