"use client";

import * as React from "react";
import { Panzoom as NativePanzoom } from "@fancyapps/ui";
import { Toolbar } from "@fancyapps/ui/dist/panzoom/panzoom.toolbar.esm";
import { vi } from "./i10n/Panzoom/vi";
import type { OptionsType } from "@fancyapps/ui/types/Panzoom/options";

import "@fancyapps/ui/dist/panzoom/panzoom.css";
import "@fancyapps/ui/dist/panzoom/panzoom.toolbar.css";

export interface Panzoom extends NativePanzoom {}
export interface PanzoomApi extends NativePanzoom {}
export interface ReactPanzoomProps
  extends React.PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  options?: Partial<OptionsType>;
  onReady?: (...args: any[]) => void;
  setApi?: (api: NativePanzoom) => void;
}

const defaultOptions: ReactPanzoomProps["options"] = {
  l10n: vi,
};

export function ReactPanzoom({
  children,
  options = {},
  className,
  onReady,
  setApi,
  ...props
}: ReactPanzoomProps) {
  const instance = React.useRef<NativePanzoom>();
  const containerRef = React.useRef<HTMLDivElement>(null);

  NativePanzoom.defaults.on = {
    ready: onReady,
  };

  React.useEffect(() => {
    instance.current = new NativePanzoom(
      containerRef.current,
      {
        ...defaultOptions,
        ...options,
      },
      { Toolbar }
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
      className={`f-panzoom ${className || ""}`}
    >
      {children}
    </div>
  );
}
