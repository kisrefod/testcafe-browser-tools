import getInstallations from './api/get-installations';
import open from './api/open';
import close from './api/close';
import resize from './api/resize';
import isValidDeviceName from './api/is-valid-device-name';
import screenshot from './api/screenshot';
import getBrowserInfo from './api/get-browser-info';


export default {
    getInstallations,
    getBrowserInfo,
    open,
    close,
    resize,
    screenshot,
    isValidDeviceName
};
