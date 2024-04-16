"use client";

import * as React from "react";
import { Carousel as NativeCarousel } from "@fancyapps/ui";

import { vi } from "./i10n/Carousel/vi";

import "@fancyapps/ui/dist/carousel/carousel.css";

import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm";

import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";

import type { OptionsType } from "@fancyapps/ui/types/Carousel/options";

export type ReactCarouselProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & {
    options?: Partial<OptionsType>;
  }
>;

const defaultOptions: ReactCarouselProps["options"] = {
  l10n: vi,
};

export function ReactCarousel({
  children,
  options = {},
  ...props
}: ReactCarouselProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = React.useState<boolean>(false);

  NativeCarousel.defaults.on = {
    ready: () => {
      setIsReady(true);
    },
  };

  React.useEffect(() => {
    const container = containerRef.current;

    const instance = new NativeCarousel(
      container,
      {
        ...defaultOptions,
        ...options,
      },
      { Thumbs }
    );

    return () => {
      instance.destroy();
    };
  });

  return (
    <div
      {...props}
      className={`f-carousel disabled:[&_.f-button]:invisible ${
        props.className || ""
      }`}
      ref={containerRef}
    >
      {isReady ? (
        children
      ) : (
        <div className="size-full flex items-center justify-center">
          loading...
        </div>
      )}
    </div>
  );
}

export interface CarouselItemProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export function CarouselItem(props: CarouselItemProps) {
  return (
    <div {...props} className={`f-carousel__slide ${props.className || ""}`} />
  );
}
