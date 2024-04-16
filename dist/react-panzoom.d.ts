import * as React from 'react';
import { Panzoom as Panzoom$1 } from '@fancyapps/ui';
import { OptionsType } from '@fancyapps/ui/types/Panzoom/options';

interface Panzoom extends Panzoom$1 {
}
interface PanzoomApi extends Panzoom$1 {
}
interface ReactPanzoomProps extends React.PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
    options?: Partial<OptionsType>;
    onReady?: (...args: any[]) => void;
    setApi?: (api: Panzoom$1) => void;
}
declare function ReactPanzoom({ children, options, className, onReady, setApi, ...props }: ReactPanzoomProps): React.JSX.Element;

export { Panzoom, PanzoomApi, ReactPanzoom, ReactPanzoomProps };
