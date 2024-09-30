"use client"
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";
import { NextButton, PrevButton, usePrevNextButtons } from './carouselarrow';
import { DotButton, useDotButton } from './carouseldot';
import { cn } from '@/lib/utils';

export function EmblaCarousel({images, title}: {images: string[], title: string}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
      } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla w-100 aspect-video">
        <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container w-100 aspect-video">
                    {images.map((image, index) => (
                        <div className="embla__slide" key={index}>
                            <Image src={image} alt={title} fill={true} />
                        </div>
                    ))}
            </div>
            
            <div className={cn('grid text-center mb-3 font-light text-sm md:hidden', scrollSnaps.length==1 ? "opacity-0":"")}>{"<< swipe for more >>"}</div>
            <div className={cn("embla__controls md:grid hidden", scrollSnaps.length==1 ? "opacity-0":"")}>
                <div className="embla__buttons">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                
                <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                    key={index}
                    onClick={() => onDotButtonClick(index)}
                    className={'embla__dot'.concat(
                        index === selectedIndex ? ' embla__dot--selected' : ''
                    )}
                    />
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}