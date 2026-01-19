import Image from "next/image";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-col gap-y-1">
          <span className="text-3xl font-bold text-zinc-100 md:text-5xl">
            Saatvik Madan
          </span>
          <p className="text-xs text-zinc-300 md:text-base">
            Breaking code since birth...
            <br />
            You're welcome :{")"}
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <Button className="cursor-pointer bg-zinc-100 text-xs text-gray-950 transition-colors hover:bg-gray-400 md:text-base">
            CONTACT ME
          </Button>
          <Button className="cursor-pointer bg-zinc-100 text-xs text-gray-950 transition-colors hover:bg-zinc-400 md:text-base">
            HIRE ME
          </Button>
        </div>
      </div>
      <div className="size-28 overflow-hidden rounded-lg md:size-38">
        <Image
          src="/pfp.jpeg"
          alt="Profile picture"
          height={256}
          width={256}
          className="h-full w-full object-cover hover:scale-110 hover:transition-transform"
        />
      </div>
    </div>
  );
};

export default About;
