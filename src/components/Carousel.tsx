import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselIndicator } from './motion-primitives/carousel';

interface CarouselProps {
  items: React.ReactNode[];
}

export default function ResponsivePanelLayout({ items }: CarouselProps) {
  return (
    <>
      <div className="xl:hidden relative mx-4">
        <Carousel>
          <CarouselContent>
            {items.map((element, index) => (
              <CarouselItem 
                key={React.isValidElement(element) && element.key ? element.key : index} 
                className="flex justify-center pb-12"
              >
                {element}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselIndicator />
        </Carousel>
      </div>

      <div className="hidden xl:flex flex-wrap xl:flex-row gap-8 justify-center items-center">
        {items.map((element) => (
          <>
            {element}
          </>
        ))}
      </div>
    </>
  );
}
