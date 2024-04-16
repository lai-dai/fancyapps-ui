import * as React from 'react';
import { OptionsType } from '@fancyapps/ui/types/Carousel/options';

type ReactCarouselProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement> & {
    options?: Partial<OptionsType>;
}>;
declare function ReactCarousel({ children, options, ...props }: ReactCarouselProps): React.JSX.Element;
interface CarouselItemProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}
declare function CarouselItem(props: CarouselItemProps): React.JSX.Element;

export { CarouselItem, CarouselItemProps, ReactCarousel, ReactCarouselProps };
