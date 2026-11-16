import React, {
    ComponentPropsWithRef,
    useCallback,
    useSyncExternalStore
  } from 'react'
  import { EmblaCarouselType } from 'embla-carousel'

  const emptyScrollSnaps: number[] = []
  
  type UseDotButtonType = {
    selectedIndex: number
    scrollSnaps: number[]
    onDotButtonClick: (index: number) => void
  }
  export const useDotButton = (
    emblaApi: EmblaCarouselType | undefined
  ): UseDotButtonType => {
    const subscribe = useCallback((onChange: () => void) => {
      if (!emblaApi) return () => {}
      emblaApi.on('reInit', onChange).on('select', onChange)
      return () => {
        emblaApi.off('reInit', onChange).off('select', onChange)
      }
    }, [emblaApi])

    const selectedIndex = useSyncExternalStore(
      subscribe,
      () => emblaApi?.selectedScrollSnap() ?? 0,
      () => 0
    )
    const scrollSnaps = useSyncExternalStore(
      subscribe,
      () => emblaApi?.scrollSnapList() ?? emptyScrollSnaps,
      () => emptyScrollSnaps
    )
  
    const onDotButtonClick = useCallback(
      (index: number) => {
        if (!emblaApi) return
        emblaApi.scrollTo(index)
      },
      [emblaApi]
    )
  
    return {
      selectedIndex,
      scrollSnaps,
      onDotButtonClick
    }
  }
  
  type PropType = ComponentPropsWithRef<'button'>
  
  export const DotButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props
  
    return (
      <button type="button" {...restProps}>
        {children}
      </button>
    )
  }
