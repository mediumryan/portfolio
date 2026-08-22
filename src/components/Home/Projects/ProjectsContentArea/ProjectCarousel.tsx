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
    <div className="w-full py-6">
      <div className="w-full flex justify-center px-4 md:px-12">
        <Carousel className="w-full max-w-5xl">
          <CarouselContent className="-ml-4">
            {data.map((item) => (
              <CarouselItem
                key={`project-${item.id}`}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="py-2">
                  <Card className="overflow-hidden border-none shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl bg-white">
                    <CardContent className="group relative flex aspect-[4/3] w-full items-center justify-center p-0">
                      <Image
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        src={item.image_path}
                        alt={item.title}
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-white/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center z-10">
                        <h4 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2">
                          {item.title}
                        </h4>
                        <div className="flex flex-wrap justify-center items-center gap-2 mb-6">
                          {item.tag.slice(0, 3).map((tagItem, tagIndex) => {
                            return (
                              <span
                                key={`project-tag-${tagIndex}`}
                                className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full"
                              >
                                #{tagItem}
                              </span>
                            );
                          })}
                        </div>
                        <div className="flex items-center gap-4">
                          <a
                            href={item.github_link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 hover:text-blue-600 transition-colors"
                          >
                            <FaGithub className="w-7 h-7 hover:scale-110 transition-transform" />
                          </a>
                          <a
                            href={item.url_link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 hover:text-blue-600 transition-colors"
                          >
                            <FaLocationArrow className="w-7 h-7 hover:scale-110 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-white hover:bg-blue-50 hover:text-blue-600 border-gray-200" />
          <CarouselNext className="hidden md:flex -right-12 bg-white hover:bg-blue-50 hover:text-blue-600 border-gray-200" />
        </Carousel>
      </div>
    </div>
  );
}
