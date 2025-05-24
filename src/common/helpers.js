import {animateScroll as scroll} from "react-scroll";

export const handleClick = () => {
    scroll.scrollToTop({
        duration: 0,
        smooth: 'easeInOutQuad',
    });
};