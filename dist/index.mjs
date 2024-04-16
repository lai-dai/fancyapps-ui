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
  setApi,
  ...props
}) {
  const containerRef = React.useRef(null);
  const [isReady, setIsReady] = React.useState(false);
  NativeCarousel.defaults.on = {
    ready: () => {
      setIsReady(true);
    }
  };
  React.useEffect(() => {
    const container = containerRef.current;
    const instance = new NativeCarousel(
      container,
      {
        ...defaultOptions,
        ...options
      },
      { Thumbs, Autoplay }
    );
    if (setApi instanceof Function) {
      setApi(instance);
    }
    return () => {
      instance.destroy();
    };
  });
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ref: containerRef,
      ...props,
      className: `f-carousel disabled:[&_.f-button]:invisible ${props.className || ""}`
    },
    isReady ? children : Array.isArray(children) ? children[0] : null
  );
}
function ReactCarouselItem(props) {
  return /* @__PURE__ */ React.createElement("div", { ...props, className: `f-carousel__slide ${props.className || ""}` });
}

// src/react-fancybox.tsx
import * as React2 from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";

// src/i10n/Panzoom/vi.ts
var vi2 = {
  PANUP: "\u0110i l\xEAn",
  PANDOWN: "\u0110i xu\u1ED1ng",
  PANLEFT: "Sang tr\xE1i",
  PANRIGHT: "Sang ph\u1EA3i",
  ZOOMIN: "Ph\xF3ng to",
  ZOOMOUT: "Thu nh\u1ECF",
  TOGGLEZOOM: "Chuy\u1EC3n m\u1EE9c \u0111\u1ED9 ph\xF3ng to",
  TOGGLE1TO1: "Chuy\u1EC3n m\u1EE9c \u0111\u1ED9 ph\xF3ng to",
  ITERATEZOOM: "Chuy\u1EC3n m\u1EE9c \u0111\u1ED9 ph\xF3ng to",
  ROTATECCW: "Xoay ng\u01B0\u1EE3c chi\u1EC1u kim \u0111\u1ED3ng h\u1ED3",
  ROTATECW: "Xoay theo chi\u1EC1u kim \u0111\u1ED3ng h\u1ED3",
  FLIPX: "L\u1EADt theo chi\u1EC1u ngang",
  FLIPY: "L\u1EADt theo chi\u1EC1u d\u1ECDc",
  FITX: "V\u1EEBa v\u1EB7n theo chi\u1EC1u ngang",
  FITY: "V\u1EEBa v\u1EB7n theo chi\u1EC1u d\u1ECDc",
  RESET: "\u0110\u1EB7t l\u1EA1i",
  TOGGLEFS: "B\u1EADt ch\u1EBF \u0111\u1ED9 to\xE0n m\xE0n h\xECnh"
};

// src/i10n/Fancybox/vi.ts
var vi3 = {
  ...vi2,
  CLOSE: "\u0110\xF3ng",
  NEXT: "Ti\u1EBFp",
  PREV: "Tr\u01B0\u1EDBc",
  MODAL: "B\u1EA1n c\xF3 th\u1EC3 \u0111\xF3ng n\u1ED9i dung b\u1EB1ng ph\xEDm ESC",
  ERROR: "\u0110\xE3 x\u1EA3y ra l\u1ED7i, vui l\xF2ng th\u1EED l\u1EA1i sau",
  IMAGE_ERROR: "Kh\xF4ng t\xECm th\u1EA5y h\xECnh \u1EA3nh",
  ELEMENT_NOT_FOUND: "Kh\xF4ng t\xECm th\u1EA5y ph\u1EA7n t\u1EED HTML",
  AJAX_NOT_FOUND: "L\u1ED7i t\u1EA3i AJAX: Kh\xF4ng t\xECm th\u1EA5y",
  AJAX_FORBIDDEN: "L\u1ED7i t\u1EA3i AJAX: B\u1ECB c\u1EA5m",
  IFRAME_ERROR: "L\u1ED7i t\u1EA3i trang",
  TOGGLE_ZOOM: "Chuy\u1EC3n m\u1EE9c \u0111\u1ED9 ph\xF3ng to",
  TOGGLE_THUMBS: "Chuy\u1EC3n h\xECnh thu nh\u1ECF",
  TOGGLE_SLIDESHOW: "Chuy\u1EC3n tr\xECnh chi\u1EBFu",
  TOGGLE_FULLSCREEN: "B\u1EADt ch\u1EBF \u0111\u1ED9 to\xE0n m\xE0n h\xECnh",
  DOWNLOAD: "T\u1EA3i xu\u1ED1ng"
};

// src/react-fancybox.tsx
import "@fancyapps/ui/dist/fancybox/fancybox.css";
var defaultOptions2 = {
  l10n: vi3
};
function ReactFancybox({
  children,
  delegate = "[data-fancybox]",
  options = {},
  setFancyboxIsActive,
  ...props
}) {
  const containerRef = React2.useRef(null);
  if (setFancyboxIsActive) {
    NativeFancybox.defaults.on = {
      init: () => {
        setFancyboxIsActive(true);
      },
      close: () => {
        setFancyboxIsActive(false);
      }
    };
  }
  React2.useEffect(() => {
    const container = containerRef.current;
    NativeFancybox.bind(container, delegate, {
      ...defaultOptions2,
      ...options
    });
    return () => {
      NativeFancybox.unbind(container);
    };
  });
  return /* @__PURE__ */ React2.createElement("div", { ...props, ref: containerRef }, children);
}

// src/react-panzoom.tsx
import * as React3 from "react";
import { Panzoom as NativePanzoom } from "@fancyapps/ui";
import "@fancyapps/ui/dist/panzoom/panzoom.css";
import { Toolbar } from "@fancyapps/ui/dist/panzoom/panzoom.toolbar.esm";
import "@fancyapps/ui/dist/panzoom/panzoom.toolbar.css";
var defaultOptions3 = {
  l10n: vi2
};
function ReactPanzoom({
  children,
  options = {},
  className,
  onReady,
  setApi,
  ...props
}) {
  const containerRef = React3.useRef(null);
  NativePanzoom.defaults.on = {
    ready: onReady
  };
  React3.useEffect(() => {
    const container = containerRef.current;
    const instance = new NativePanzoom(
      container,
      {
        ...defaultOptions3,
        ...options
      },
      { Toolbar }
    );
    if (setApi instanceof Function) {
      setApi(instance);
    }
    return () => {
      instance.destroy();
    };
  });
  return /* @__PURE__ */ React3.createElement(
    "div",
    {
      ref: containerRef,
      className: `f-panzoom ${className || ""}`,
      ...props
    },
    children
  );
}
export {
  ReactCarousel,
  ReactCarouselItem,
  ReactFancybox,
  ReactPanzoom
};
//# sourceMappingURL=index.mjs.map