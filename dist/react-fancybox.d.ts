import * as React from 'react';
import { OptionsType } from '@fancyapps/ui/types/Fancybox/options';

type ReactFancyboxProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement> & {
    delegate?: string;
    options?: Partial<OptionsType>;
    setFancyboxIsActive?: (isActive: boolean) => void;
}>;
declare function ReactFancybox({ children, delegate, options, setFancyboxIsActive, ...props }: ReactFancyboxProps): React.JSX.Element;

export { ReactFancybox, ReactFancyboxProps };
