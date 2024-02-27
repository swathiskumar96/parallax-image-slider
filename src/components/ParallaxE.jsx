import React from 'react'
import { Parallax } from 'react-parallax';
import firstCar from '../components/images/first-car.jpg'
import secondCar from '../components/images/second-car.jpg'
import thirdCar from '../components/images/third-car.jpg'

function ParallaxE() {
  return (
    <>
      <Parallax className='image mt-5' bgImage={firstCar} strength={800}>
      </Parallax>
      <Parallax className='image' bgImage={secondCar} strength={800}>
      </Parallax>
      <Parallax className='image' bgImage={thirdCar} strength={800}>
      </Parallax>
    </>
  )
}

export default ParallaxE