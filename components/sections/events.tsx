import { UpcomingEvents } from "@/lib/events";
import Section from "../section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Badge } from "../ui/badge";

const Events = () => {
  const setEventType = (type: string) => {
    switch (type) {
      case "workshop":
        return "bg-rose-500 hover:bg-rose-600";
      case "social":
        return "bg-teal-500 hover:bg-teal-600";
      default:
        return "bg-orange-500 hover:bg-orange-600";
    }
  };

  return (
    <Section className="w-full min-h-[75vh] mb-8 px-2 md:px-0" id="events">
      <div className="mx-auto px-8">
        <h2 className="text-center md:text-3xl font-semibold text-gray-900 uppercase">
          Events & Workshops
        </h2>

        {UpcomingEvents.length === 0 ? (
          <Card className="w-full mx-auto mt-8 h-[50vh] flex items-center justify-center">
            <CardContent className="flex items-center justify-items-center">
              <h2 className="text-center text-2xl text-gray-300 text-center">
                No Upcoming Events. Check back later!
              </h2>
            </CardContent>
          </Card>
        ) : (
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full mt-8"
          >
            <CarouselContent>
              {UpcomingEvents.map((event, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="flex p-0 md:p-1 w-full min-h-full">
                    <Card className="flex flex-col p-1 md:p-3 justify-between basis-full aspect-auto md:aspect-square">
                      <CardHeader className="items-start">
                        <CardTitle className="text-xl md:text-2xl lg:text-3xl">
                          {event.title}
                        </CardTitle>
                        <CardDescription className="text-gray-900 text-sm md:text-base">
                          {event.location}
                        </CardDescription>
                        <Badge
                          className={`rounded-lg text-xs md:text-sm text-white uppercase ${setEventType(
                            event.type
                          )}`}
                        >
                          {event.type}
                        </Badge>
                      </CardHeader>
                      <CardContent className="flex flex-col text-wrap">
                        <p className="text-gray-900 font-medium text-xs md:text-base">
                          {event.description}
                        </p>
                      </CardContent>
                      <CardFooter className="flex text-wrap">
                        <p className="text-gray-900 font-medium text-xs md:text-sm">
                          {event.date}
                        </p>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </Section>
  );
};

export default Events;
