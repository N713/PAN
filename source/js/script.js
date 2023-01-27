import { setSelect } from "./components/select";
import { setProgress } from "./components/progress";
import { setScroll } from "./components/scroll";
import { setSwiper } from "./components/slider";

if (document.body) {
    setSelect();
    setSwiper();
    setProgress();
    setScroll();
}
