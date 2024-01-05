import tabs from './modules/tabs'
import scroll from './modules/scroll'

window.addEventListener('DOMContentLoaded', () => {
    tabs('.adventages__tabs', '.adventages__tab', '.adventages__content-wrapper');
    scroll();
})