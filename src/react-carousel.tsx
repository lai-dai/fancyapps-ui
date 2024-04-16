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
      ref={containerRef}
      {...props}
      className={`f-carousel disabled:[&_.f-button]:invisible ${
        props.className || ""
      }`}
    >
      {isReady
        ? children
        : React.cloneElement(Array.isArray(children) ? children[0] : null)}
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
