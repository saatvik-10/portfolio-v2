"use client";

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
import { toast } from "sonner";
import Autoplay from "embla-carousel-autoplay";

const Projects = () => {
  return (
    <section className="flex flex-col gap-y-3">
      <Heading title="Projects" />
      <div>
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 2500,
            }),
          ]}
          className="w-full md:hidden lg:hidden"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="flex">
                <Card
                  className="inset-0 flex h-full w-full flex-col overflow-hidden border p-0"
                  key={index}
                >
                  <CardContent className="flex h-full w-full flex-col items-start p-0">
                    <div className="relative h-52 w-full">
                      <Image
                        src={project.image || "/projects/cs.avif"}
                        alt={``}
                        fill
                        className="bg-black object-cover"
                        quality={100}
                      />
                    </div>
                    <div className="flex grow flex-col justify-between p-2.5">
                      <p className="mb-3 text-sm leading-4.25 text-zinc-950">
                        {project.description}
                      </p>
                      <div className="flex flex-row items-center justify-end gap-1 text-xs">
                        {project.demo === "NA" ? (
                          <div
                            onClick={() =>
                              toast.info(
                                "This is a mobile app — visit the link in repo and run it locally via Expo.",
                              )
                            }
                            className="cursor-not-allowed"
                          >
                            <Badge className="flex items-center gap-1 rounded-md bg-zinc-950 text-zinc-100 opacity-50">
                              <ExternalLink />
                              Demo
                            </Badge>
                          </div>
                        ) : (
                          <Link
                            className="cursor-pointer hover:font-bold hover:underline"
                            href={project.demo}
                            target="_blank"
                          >
                            <Badge className="flex items-center gap-1 rounded-md bg-zinc-950 text-zinc-100 hover:bg-zinc-800">
                              <ExternalLink />
                              Demo
                            </Badge>
                          </Link>
                        )}
                        {project.source === "NA" ? (
                          <div
                            onClick={() =>
                              toast.info(
                                "This repository is private as it was developed for a company client.",
                              )
                            }
                            className="cursor-not-allowed"
                          >
                            <Badge className="flex items-center gap-1 rounded-md bg-zinc-950 text-zinc-100 opacity-50">
                              <Github />
                              Source
                            </Badge>
                          </div>
                        ) : (
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
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>

        <div className="hidden grid-cols-3 gap-2 md:grid lg:grid">
          {projects.map((project, index) => (
            <Card
              className="flex h-full flex-col overflow-hidden p-0"
              key={index}
            >
              <CardContent className="flex h-full w-full flex-col items-start p-0">
                <div className="relative h-36 w-full">
                  <Image
                    src={project.image || "/projects/cs.avif"}
                    alt={``}
                    fill
                    className="bg-black object-cover"
                    quality={100}
                  />
                </div>
                <div className="flex grow flex-col justify-between p-2.5">
                  <p className="mb-3 text-sm leading-4.25 text-zinc-950">
                    {project.description}
                  </p>
                  <div className="flex flex-row items-center justify-end gap-1 text-xs">
                    {project.demo === "NA" ? (
                      <div
                        onClick={() =>
                          toast.info(
                            "This is a mobile app — visit the link in repo and run it locally via Expo.",
                          )
                        }
                        className="cursor-not-allowed"
                      >
                        <Badge className="flex items-center gap-1 rounded-md bg-zinc-950 text-zinc-100 opacity-50">
                          <ExternalLink />
                          Demo
                        </Badge>
                      </div>
                    ) : (
                      <Link
                        className="cursor-pointer hover:font-bold hover:underline"
                        href={project.demo}
                        target="_blank"
                      >
                        <Badge className="flex items-center gap-1 rounded-md bg-zinc-950 text-zinc-100 hover:bg-zinc-800">
                          <ExternalLink />
                          Demo
                        </Badge>
                      </Link>
                    )}
                    {project.source === "NA" ? (
                      <div
                        onClick={() =>
                          toast.info(
                            "This repository is private as it was developed for a company client.",
                          )
                        }
                        className="cursor-not-allowed"
                      >
                        <Badge className="flex items-center gap-1 rounded-md bg-zinc-950 text-zinc-100 opacity-50">
                          <Github />
                          Source
                        </Badge>
                      </div>
                    ) : (
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
                    )}
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
