/* @ts-ignore-next-line */
import { useMediaQuery } from 'react-responsive';

const useIsMobile = () => useMediaQuery({ maxWidth: 767 });

export { useIsMobile };