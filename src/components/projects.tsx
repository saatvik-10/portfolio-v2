import Heading from "./heading";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
            <Card key={index}>
              <CardContent className="flex w-full items-start flex-col">
                <span className="text-3xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
