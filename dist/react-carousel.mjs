"use client";

// src/react-carousel.tsx
import * as React from "react";
import { Carousel as NativeCarousel } from "@fancyapps/ui";
import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm";
import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm";

// src/i10n/Carousel/vi.ts
var vi = {
  NEXT: "Ti\u1EBFp",
  PREV: "Tr\u01B0\u1EDBc",
  GOTO: "\u0110i \u0111\u1EBFn slide #%d"
};

// src/react-carousel.tsx
import "@fancyapps/ui/dist/carousel/carousel.css";
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";
import "@fancyapps/ui/dist/carousel/carousel.autoplay.css";
var defaultOptions = {
  l10n: vi
};
function ReactCarousel({
  children,
  options = {},
  className,
  setApi,
  ...props
}) {
  const instance = React.useRef();
  const containerRef = React.useRef(null);
  const [isReady, setIsReady] = React.useState(false);
  NativeCarousel.defaults.on = {
    ready: () => {
      setIsReady(true);
    }
  };
  React.useEffect(() => {
    instance.current = new NativeCarousel(
      containerRef.current,
      {
        ...defaultOptions,
        ...options
      },
      { Thumbs, Autoplay }
    );
    if (setApi instanceof Function)
      setApi(instance.current);
    return () => {
      if (instance.current)
        instance.current.destroy();
    };
  });
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ...props,
      ref: containerRef,
      className: `f-carousel disabled:[&_.f-button]:invisible ${className || ""}`
    },
    isReady ? children : Array.isArray(children) ? children[0] : null
  );
}
function ReactCarouselItem(props) {
  return /* @__PURE__ */ React.createElement("div", { ...props, className: `f-carousel__slide ${props.className || ""}` });
}
export {
  ReactCarousel,
  ReactCarouselItem
};
//# sourceMappingURL=react-carousel.mjs.map