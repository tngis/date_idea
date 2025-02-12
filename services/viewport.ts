import { useNuxtApp } from '#app'

type breakPointTypes = 'mobile' | 'desktop' | 'tablet' | 'desktopMedium' | 'desktopWide' | 'mobileMedium' | 'mobileWide'

interface ViewPort {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  breakPointValue: (value: breakPointTypes) => number
  isGreaterThan: (value: breakPointTypes) => boolean
  isGreaterOrEquals: (breakpoint: breakPointTypes) => boolean
  isLessThan: (value: breakPointTypes) => boolean
}

export const useViewPort = (): ViewPort => {
  const { $viewport } = useNuxtApp()
  const viewport = $viewport as {
    breakpointValue: (breakpoint: breakPointTypes) => number
    isGreaterThan: (breakpoint: breakPointTypes) => boolean
    isGreaterOrEquals: (breakpoint: breakPointTypes) => boolean
    isLessThan: (breakpoint: breakPointTypes) => boolean
  }

  return {
    isMobile: viewport.isLessThan('tablet'),
    isTablet: viewport.isGreaterOrEquals('tablet') && viewport.isLessThan('desktop'),
    isDesktop: viewport.isGreaterOrEquals('desktop'),
    breakPointValue: (value: breakPointTypes) => viewport.breakpointValue(value),
    isGreaterThan: (value: breakPointTypes) => viewport.isGreaterThan(value),
    isGreaterOrEquals: (value: breakPointTypes) => viewport.isGreaterOrEquals(value),
    isLessThan: (value: breakPointTypes) => viewport.isLessThan(value),
  }
}
