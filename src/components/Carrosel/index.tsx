'use client'

import React from 'react'
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick';
import styles from "./styles.module.css";
import slide1 from "../../../public/banner/DSC_0416.jpg";
import slide2 from "../../../public/banner/DSC_0605.jpg";
import slide3 from "../../../public/banner/DSC_0693.jpg";
import Image from 'next/image';
import { BsBoxArrowInDownLeft } from 'react-icons/bs';

// Settings for the slider
const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
}

export default function Carrosel() {
    const [slider, setSlider] = React.useState<Slider | null>(null)

    const top = useBreakpointValue({ base: '90%', md: '50%' })
    const side = useBreakpointValue({ base: '30%', md: '10px' })

    return (
        <Box position={'relative'} width={'full'} height={"50vh"} md={{height: "80vh"}} overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <IconButton
                className='hidden md:flex'
                aria-label="left-arrow"
                colorScheme="messenger"
                bg={"#496fb1b5"}
                borderRadius="full"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt color='#fff' size={20} />
            </IconButton>
            <IconButton
                className='hidden md:flex'
                aria-label="right-arrow"
                colorScheme="messenger"
                borderRadius="full"
                position="absolute"
                bg={"#496fb1b5"}
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt color='#fff' />
            </IconButton>
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {/* {cards.map((url, index) => (
                    <Box
                        key={index}
                        height={'xl'}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={`url(${url})`}
                        _before={{
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(194, 223, 85, 0.6) 100%)',
                            zIndex: 1,
                        }}
                    >

                    </Box>
                ))
                } */}
                <Box _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(194, 223, 85, 0.6) 100%)',
                    zIndex: 1,
                }}>
                    <Image src={slide1} width={1920} height={1080} alt='slide1' />
                </Box>
                <Box _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(194, 223, 85, 0.6) 100%)',
                    zIndex: 1,
                }}>
                    <Image src={slide2} width={1920} height={1080} alt='slide1' />
                </Box>
                <Box _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(194, 223, 85, 0.6) 100%)',
                    zIndex: 1,
                }}>
                    <Image src={slide3} width={1920} height={1080} alt='slide1' />
                </Box>
            </Slider >
        </Box >
    )
}