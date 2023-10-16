import React from 'react';
import { CarouselProvider, Slider, Slide, Dot, DotGroup, ButtonBack, ButtonNext } from 'pure-react-carousel'; // Import Dot and DotGroup
import { IProduct } from '../Home/models';
import ApImage from '@/components/images/image';
import 'pure-react-carousel/dist/react-carousel.es.css'; // Import CSS
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

interface IProps {
    product: IProduct;
}

export const ProductCarousel: React.FC<IProps> = ({ product }): any => {
    return (
        <CarouselProvider
            naturalSlideWidth={30}
            naturalSlideHeight={30}
            // hasMasterSpinner={true}
            touchEnabled={true}
            infinite={true}
            dragEnabled={true}
            totalSlides={product?.images?.length as any}
            className='relative '>

            <Slider>
                {product.images?.map((image: any, index: number) => (
                    <Slide index={index} key={index}>
                        <ApImage
                            className='d-block w-[40rem]'
                            imgUrl={image.uri}
                            alt={image.uri}
                        />
                        <div className='absolute inset-0 flex items-center justify-center '>
                            <div className=' flex space-x-[16rem] justify-center items-center'>
                                <div>
                                    <ButtonBack className='text-black'><BsArrowLeftCircle size={30} /></ButtonBack>
                                </div>
                                <div>
                                    <ButtonNext><BsArrowRightCircle size={30} /></ButtonNext>
                                </div>


                            </div>
                        </div>
                    </Slide>
                ))}



            </Slider>

            <DotGroup className='py-3' >
                {product.images?.map((image: any, index: number) => (
                    <Dot slide={index} key={index} className=''>
                        <ApImage
                            className=' w-[7rem] gap-x-5 rounded-lg border-3 product-card-image border-black'
                            imgUrl={image.uri}
                            alt='image'
                        />
                    </Dot>
                ))}
            </DotGroup>


        </CarouselProvider>
    );
};
