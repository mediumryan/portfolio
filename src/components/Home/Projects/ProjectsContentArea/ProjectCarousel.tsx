import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ProjectsType } from '@/data/projects';
import Image from 'next/image';
import React from 'react';
import { FaGithub, FaLocationArrow } from 'react-icons/fa';

export default function ProjectCarousel({ data }: { data: ProjectsType[] }) {
  return (
    <div className="w-full py-2">
      <div className="w-full flex justify-center">
        <Carousel className="w-3/4 md:w-full">
          <CarouselContent className="-ml-1">
            {data.map((item) => (
              <CarouselItem
                key={`project-${item.id}`}
                className="pl-1 md:basis-1/3"
              >
                <div className="p-1">
                  <Card className="hover:-translate-y-4 duration-300">
                    <CardContent className="group relative flex aspect-square items-center justify-center p-2 origin-bottom duration-300 ">
                      <Image
                        fill={true}
                        sizes="100%"
                        className="group-hover:opacity-15 rounded-md"
                        src={item.image_path}
                        alt={item.title}
                      />
                      <div className="group absolute font-extrabold text-blue-400 top-0 left-0 w-full h-full pt-4 px-4 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                        <h4 className="text-xl md:text-md truncate text-center w-64">
                          {item.title}
                        </h4>
                        <div className="flex flex-wrap justify-center items-center gap-2 mt-2">
                          {item.tag.slice(0, 3).map((tagItem, tagIndex) => {
                            return (
                              <span
                                key={`project-tag-${tagIndex}`}
                                className="bg-blue-400 text-white text-xs p-1 rounded-sm"
                              >
                                #{tagItem}
                              </span>
                            );
                          })}
                        </div>
                        <div className="flex items-center mt-4 gap-2">
                          <a
                            className="hidden group-hover:block"
                            href={item.github_link}
                            target="blank"
                          >
                            <FaGithub className=" w-6 h-6 hover:scale-105 hover:rotate-12 hover:opacity-75 duration-300" />
                          </a>
                          <a
                            className="hidden group-hover:block"
                            href={item.url_link}
                            target="blank"
                          >
                            <FaLocationArrow className=" w-6 h-6 hover:scale-105 hover:rotate-12 hover:opacity-75 duration-300" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
