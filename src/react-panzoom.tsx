"use client";

import * as React from "react";
import { Panzoom as NativePanzoom } from "@fancyapps/ui";
import "@fancyapps/ui/dist/panzoom/panzoom.css";

import { Toolbar } from "@fancyapps/ui/dist/panzoom/panzoom.toolbar.esm";
import "@fancyapps/ui/dist/panzoom/panzoom.toolbar.css";

import { vi } from "./i10n/Panzoom/vi";

import type { OptionsType } from "@fancyapps/ui/types/Panzoom/options";

export type ReactPanzoomProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & {
    options?: Partial<OptionsType>;
    onReady?: (...args: any[]) => void;
    setApi?: (api: NativePanzoom) => void;
  }
>;

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

    if (setApi instanceof Function) {
      setApi(instance);
    }

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
