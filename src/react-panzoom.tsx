"use client";

import * as React from "react";
import { Panzoom as NativePanzoom } from "@fancyapps/ui";
import "@fancyapps/ui/dist/panzoom/panzoom.css";

import { Toolbar } from "@fancyapps/ui/dist/panzoom/panzoom.toolbar.esm";
import "@fancyapps/ui/dist/panzoom/panzoom.toolbar.css";

import { vi } from "./i10n/Panzoom/vi";

import type { OptionsType } from "@fancyapps/ui/types/Panzoom/options";

export interface Panzoom extends NativePanzoom {}
export interface ReactPanzoomProps
  extends React.PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  options?: Partial<OptionsType>;
  onReady?: (...args: any[]) => void;
}

const defaultOptions: ReactPanzoomProps["options"] = {
  l10n: vi,
};

export function ReactPanzoom({
  children,
  options = {},
  className,
  onReady,
  ...props
}: ReactPanzoomProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  NativePanzoom.defaults.on = {
    ready: onReady,
  };

  React.useEffect(() => {
    const container = containerRef.current;

    const instance = new NativePanzoom(
      container,
      {
        ...defaultOptions,
        ...options,
      },
      { Toolbar }
    );

    return () => {
      instance.destroy();
    };
  });

  return (
    <div
      ref={containerRef}
      className={`f-panzoom ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
