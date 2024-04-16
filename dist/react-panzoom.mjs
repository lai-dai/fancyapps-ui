"use client";

// src/react-panzoom.tsx
import * as React from "react";
import { Panzoom as NativePanzoom } from "@fancyapps/ui";
import "@fancyapps/ui/dist/panzoom/panzoom.css";
import { Toolbar } from "@fancyapps/ui/dist/panzoom/panzoom.toolbar.esm";
import "@fancyapps/ui/dist/panzoom/panzoom.toolbar.css";

// src/i10n/Panzoom/vi.ts
var vi = {
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

// src/react-panzoom.tsx
var defaultOptions = {
  l10n: vi
};
function ReactPanzoom({
  children,
  options = {},
  className,
  onReady,
  setApi,
  ...props
}) {
  const containerRef = React.useRef(null);
  NativePanzoom.defaults.on = {
    ready: onReady
  };
  React.useEffect(() => {
    const container = containerRef.current;
    const instance = new NativePanzoom(
      container,
      {
        ...defaultOptions,
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
  return /* @__PURE__ */ React.createElement(
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
  ReactPanzoom
};
//# sourceMappingURL=react-panzoom.mjs.map