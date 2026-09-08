import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselIndicator,
} from "./motion-primitives/carousel";

interface CarouselProps {
  items: React.ReactNode[];
}

export default function ResponsivePanelLayout({ items }: CarouselProps) {
  return (
    <>
      <div className="relative mx-4 xl:hidden">
        <Carousel>
          <CarouselContent>
            {items.map((element, index) => (
              <CarouselItem
                key={
                  React.isValidElement(element) && element.key
                    ? element.key
                    : index
                }
                className="flex justify-center pb-12"
              >
                {element}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselIndicator />
        </Carousel>
      </div>

      <div className="hidden flex-wrap items-center justify-center gap-8 xl:flex xl:flex-row">
        {items.map((element) => (
          <>{element}</>
        ))}
      </div>
    </>
  );
}
