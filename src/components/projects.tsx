import Heading from "./heading";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <section className="flex flex-col gap-y-3">
      <Heading title="Projects" />
      <div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full md:hidden lg:hidden"
        >
          <CarouselContent>
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex w-full items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>

        <div className="hidden grid-cols-3 gap-4 md:grid lg:grid">
          {projects.map((project, index) => (
            <Card className="flex flex-col overflow-hidden p-0" key={index}>
              <CardContent className="flex h-full w-full flex-col items-start border-0 border-none p-0">
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={``}
                    width={400}
                    height={144}
                    className="h-36 w-full bg-black object-cover"
                    quality={100}
                  />
                  <span className="absolute right-1 bottom-1 flex-1 rounded-md bg-white p-1 text-xs text-zinc-950">
                    {project.title}
                  </span>
                </div>
                <div className="flex grow flex-col justify-between p-2">
                  <p className="mb-3 text-xs leading-4.25 text-zinc-950">
                    {project.description}
                  </p>
                  <div className="flex flex-row items-center justify-end gap-1 text-xs">
                    <Link
                      className="cursor-pointer hover:font-bold hover:underline"
                      href={project.demo}
                      target="_blank"
                    >
                      <Badge className="flex items-center gap-1 rounded-md bg-zinc-950 text-zinc-100 hover:bg-zinc-700">
                        <ExternalLink />
                        Demo
                      </Badge>
                    </Link>
                    <Link
                      className="cursor-pointer hover:font-bold hover:underline"
                      href={project.source}
                      target="_blank"
                    >
                      <Badge className="flex items-center gap-1 rounded-md bg-zinc-950 text-zinc-100 hover:bg-zinc-800">
                        <Github />
                        Source
                      </Badge>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
