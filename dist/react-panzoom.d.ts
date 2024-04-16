import * as React from 'react';
import { Panzoom } from '@fancyapps/ui';
import { OptionsType } from '@fancyapps/ui/types/Panzoom/options';

type ReactPanzoomProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement> & {
    options?: Partial<OptionsType>;
    onReady?: (...args: any[]) => void;
    setApi?: (api: Panzoom) => void;
}>;
declare function ReactPanzoom({ children, options, className, onReady, setApi, ...props }: ReactPanzoomProps): React.JSX.Element;

export { ReactPanzoom, ReactPanzoomProps };
