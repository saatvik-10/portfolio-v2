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
          {Array.from({ length: 6 }).map((_, index) => (
            <Card className="overflow-hidden p-0" key={index}>
              <CardContent className="flex w-full flex-col items-start border-0 border-none p-0">
                <Image src="" alt="" className="h-36 w-full bg-black" />
                <div className="p-3">
                  <p className="text-sm leading-4.5 text-zinc-950">
                    A website uptime monitoring platform to monitor your
                    websites, APIs, and endpoints with real-time status checks,
                    email alerts, and dashboards.
                  </p>
                  <div className="flex flex-row items-center justify-end gap-3 text-xs">
                    <Link
                      className="cursor-pointer hover:font-bold hover:underline"
                      href=""
                    >
                      Demo
                    </Link>
                    <Link
                      className="cursor-pointer hover:font-bold hover:underline"
                      href=""
                    >
                      Souce
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
