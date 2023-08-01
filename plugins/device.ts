import {defineNuxtPlugin, useRequestHeaders} from '#app';
import MobileDetect from 'mobile-detect';

export default defineNuxtPlugin(() => {
    let headers = useRequestHeaders()

    const md = process.server ? new MobileDetect(headers['user-agent']) : new MobileDetect(navigator.userAgent)
    var isMobile: boolean = md.phone() !== null || md.mobile() === 'UnknownMobile'
    const isTablet: boolean = md.tablet() !== null || md.mobile() === 'UnknownTablet'
    const isDesktop: boolean = !isMobile && !isTablet   

    return {
        provide: {
            isMobile: ():boolean => isMobile || isTablet,
            isTablet: ():boolean  => isTablet,
            isDesktop: ():boolean  => isDesktop
        },
    };
})
