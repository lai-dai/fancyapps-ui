import * as React from 'react';
import { Fancybox as Fancybox$1 } from '@fancyapps/ui';
import { OptionsType } from '@fancyapps/ui/types/Fancybox/options';

interface Fancybox extends Fancybox$1 {
}
interface ReactFancyboxProps extends React.PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
    delegate?: string;
    options?: Partial<OptionsType>;
    setFancyboxIsActive?: (isActive: boolean) => void;
}
declare function ReactFancybox({ children, delegate, options, setFancyboxIsActive, ...props }: ReactFancyboxProps): React.JSX.Element;

export { Fancybox, ReactFancybox, ReactFancyboxProps };
