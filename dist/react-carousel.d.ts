import * as React from 'react';
import { Carousel as Carousel$1 } from '@fancyapps/ui';
import { OptionsType } from '@fancyapps/ui/types/Carousel/options';

interface Carousel extends Carousel$1 {
}
interface ReactCarouselProps extends React.PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
    options?: Partial<OptionsType>;
}
declare function ReactCarousel({ children, options, ...props }: ReactCarouselProps): React.JSX.Element;
interface ReactCarouselItemProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}
declare function ReactCarouselItem(props: ReactCarouselItemProps): React.JSX.Element;

export { Carousel, ReactCarousel, ReactCarouselItem, ReactCarouselItemProps, ReactCarouselProps };
