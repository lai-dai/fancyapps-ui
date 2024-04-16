import * as React from 'react';
import { Carousel } from '@fancyapps/ui';
import { OptionsType } from '@fancyapps/ui/types/Carousel/options';

type ReactCarouselProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement> & {
    options?: Partial<OptionsType>;
    setApi?: (api: Carousel) => void;
}>;
declare function ReactCarousel({ children, options, setApi, ...props }: ReactCarouselProps): React.JSX.Element;
interface ReactCarouselItemProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}
declare function ReactCarouselItem(props: ReactCarouselItemProps): React.JSX.Element;

export { ReactCarousel, ReactCarouselItem, ReactCarouselItemProps, ReactCarouselProps };
