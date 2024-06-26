import * as React from 'react';
import { Carousel as Carousel$1 } from '@fancyapps/ui';
import { OptionsType } from '@fancyapps/ui/types/Carousel/options';

interface Carousel extends Carousel$1 {
}
interface CarouselApi extends Carousel$1 {
}
interface ReactCarouselProps extends React.PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
    options?: Partial<OptionsType>;
    setApi?: (api: Carousel$1) => void;
}
declare function ReactCarousel({ children, options, className, setApi, ...props }: ReactCarouselProps): React.JSX.Element;
interface ReactCarouselItemProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}
declare function ReactCarouselItem(props: ReactCarouselItemProps): React.JSX.Element;

export { Carousel, CarouselApi, ReactCarousel, ReactCarouselItem, ReactCarouselItemProps, ReactCarouselProps };
