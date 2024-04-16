"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/react-carousel.tsx
var react_carousel_exports = {};
__export(react_carousel_exports, {
  ReactCarousel: () => ReactCarousel,
  ReactCarouselItem: () => ReactCarouselItem
});
module.exports = __toCommonJS(react_carousel_exports);
var React = __toESM(require("react"));
var import_ui = require("@fancyapps/ui");

// src/i10n/Carousel/vi.ts
var vi = {
  NEXT: "Ti\u1EBFp",
  PREV: "Tr\u01B0\u1EDBc",
  GOTO: "\u0110i \u0111\u1EBFn slide #%d"
};

// src/react-carousel.tsx
var import_carousel = require("@fancyapps/ui/dist/carousel/carousel.css");
var import_carousel_thumbs = require("@fancyapps/ui/dist/carousel/carousel.thumbs.esm");
var import_carousel_thumbs2 = require("@fancyapps/ui/dist/carousel/carousel.thumbs.css");
var defaultOptions = {
  l10n: vi
};
function ReactCarousel({
  children,
  options = {},
  ...props
}) {
  const containerRef = React.useRef(null);
  const [isReady, setIsReady] = React.useState(false);
  import_ui.Carousel.defaults.on = {
    ready: () => {
      setIsReady(true);
    }
  };
  React.useEffect(() => {
    const container = containerRef.current;
    const instance = new import_ui.Carousel(
      container,
      {
        ...defaultOptions,
        ...options
      },
      { Thumbs: import_carousel_thumbs.Thumbs }
    );
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
    isReady ? children : React.cloneElement(Array.isArray(children) ? children[0] : null)
  );
}
function ReactCarouselItem(props) {
  return /* @__PURE__ */ React.createElement("div", { ...props, className: `f-carousel__slide ${props.className || ""}` });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ReactCarousel,
  ReactCarouselItem
});
//# sourceMappingURL=react-carousel.js.map