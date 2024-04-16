"use client";

import * as React from "react";
import { Carousel as NativeCarousel } from "@fancyapps/ui";
import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm";
import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm";
import { vi } from "./i10n/Carousel/vi";
import type { OptionsType } from "@fancyapps/ui/types/Carousel/options";

import "@fancyapps/ui/dist/carousel/carousel.css";
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";
import "@fancyapps/ui/dist/carousel/carousel.autoplay.css";

export interface Carousel extends NativeCarousel {}
export interface CarouselApi extends NativeCarousel {}
export interface ReactCarouselProps
  extends React.PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  options?: Partial<OptionsType>;
  setApi?: (api: NativeCarousel) => void;
}

const defaultOptions: ReactCarouselProps["options"] = {
  l10n: vi,
};

export function ReactCarousel({
  children,
  options = {},
  className,
  setApi,
  ...props
}: ReactCarouselProps) {
  const instance = React.useRef<NativeCarousel>();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = React.useState<boolean>(false);

  NativeCarousel.defaults.on = {
    ready: () => {
      setIsReady(true);
    },
  };

  React.useEffect(() => {
    instance.current = new NativeCarousel(
      containerRef.current,
      {
        ...defaultOptions,
        ...options,
      },
      { Thumbs, Autoplay }
    );

    if (setApi instanceof Function) setApi(instance.current);

    return () => {
      if (instance.current) instance.current.destroy();
    };
  });

  return (
    <div
      {...props}
      ref={containerRef}
      className={`f-carousel disabled:[&_.f-button]:invisible ${
        className || ""
      }`}
    >
      {isReady ? children : Array.isArray(children) ? children[0] : null}
    </div>
  );
}

export interface ReactCarouselItemProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export function ReactCarouselItem(props: ReactCarouselItemProps) {
  return (
    <div {...props} className={`f-carousel__slide ${props.className || ""}`} />
  );
}
