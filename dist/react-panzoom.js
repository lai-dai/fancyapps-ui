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

// src/react-panzoom.tsx
var react_panzoom_exports = {};
__export(react_panzoom_exports, {
  ReactPanzoom: () => ReactPanzoom
});
module.exports = __toCommonJS(react_panzoom_exports);
var React = __toESM(require("react"));
var import_ui = require("@fancyapps/ui");
var import_panzoom = require("@fancyapps/ui/dist/panzoom/panzoom.css");
var import_panzoom_toolbar = require("@fancyapps/ui/dist/panzoom/panzoom.toolbar.esm");
var import_panzoom_toolbar2 = require("@fancyapps/ui/dist/panzoom/panzoom.toolbar.css");

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
  ...props
}) {
  const containerRef = React.useRef(null);
  import_ui.Panzoom.defaults.on = {
    ready: onReady
  };
  React.useEffect(() => {
    const container = containerRef.current;
    const instance = new import_ui.Panzoom(
      container,
      {
        ...defaultOptions,
        ...options
      },
      { Toolbar: import_panzoom_toolbar.Toolbar }
    );
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ReactPanzoom
});
//# sourceMappingURL=react-panzoom.js.map