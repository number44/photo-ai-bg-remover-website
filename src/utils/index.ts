import throttle from './throttle';
import detectScroll from './scrolling';
import lerp from './lerp';
import range from './range';
import calculateDistance from './calculateDistance';
import debounce from './debounce';
const utils = {
	throttle: throttle,
	detectScroll: detectScroll,
	range: range,
};

export { debounce, throttle, detectScroll, range, lerp, calculateDistance };
