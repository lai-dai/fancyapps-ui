"use client";

import * as React from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { vi } from "./i10n/Fancybox/vi";
import type { OptionsType } from "@fancyapps/ui/types/Fancybox/options";

import "@fancyapps/ui/dist/fancybox/fancybox.css";

export interface Fancybox extends NativeFancybox {}
export interface ReactFancyboxProps
  extends React.PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  delegate?: string;
  options?: Partial<OptionsType>;
  setFancyboxIsActive?: (isActive: boolean) => void;
}

const defaultOptions: ReactFancyboxProps["options"] = {
  l10n: vi,
};

export function ReactFancybox({
  children,
  delegate = "[data-fancybox]",
  options = {},
  setFancyboxIsActive,
  ...props
}: ReactFancyboxProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  if (setFancyboxIsActive) {
    NativeFancybox.defaults.on = {
      init: () => {
        setFancyboxIsActive(true);
      },
      close: () => {
        setFancyboxIsActive(false);
      },
    };
  }

  React.useEffect(() => {
    const container = containerRef.current;

    NativeFancybox.bind(container, delegate, {
      ...defaultOptions,
      ...options,
    });

    return () => {
      NativeFancybox.unbind(container);

      // !!! Commented out to prevent closing on re-render
      // NativeFancybox.close();
    };
  });

  return (
    <div {...props} ref={containerRef}>
      {children}
    </div>
  );
}
