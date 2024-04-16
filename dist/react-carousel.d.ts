import * as React from 'react';
import { OptionsType } from '@fancyapps/ui/types/Carousel/options';

type ReactCarouselProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement> & {
    options?: Partial<OptionsType>;
}>;
declare function ReactCarousel({ children, options, ...props }: ReactCarouselProps): React.JSX.Element;
interface ReactCarouselItemProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}
declare function ReactCarouselItem(props: ReactCarouselItemProps): React.JSX.Element;

export { ReactCarousel, ReactCarouselItem, ReactCarouselItemProps, ReactCarouselProps };
