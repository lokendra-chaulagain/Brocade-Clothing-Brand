import Image from 'next/image'
import React from 'react'
import style from '../../../styles/Exclusive.module.css'
import { motion } from 'framer-motion'

const itemVariants = {
    offscreen: {
        y: 70,
        opacity: 0,
    },

    imgScreen: {
      y: -70,
      opacity: 0,
    },

    onscreen: {
        y: 0,
        opacity: 1,
        delayChildren: 0.5,
        transition: {
            // ease: "anticipate",
            duration: .7,
        },
    }
}
const Exclusivenew = () => {
  return (
    <div className={`container`}>
      <div>
        {/* <h1 className={style.exc}>Our Exclusive Products</h1> */}
      </div>
      <div className={`${style.wrapper} row row-cols-1 row-cols-md-2 row-cols-lg-2 d-sm-flex justify-content-center`}>
        <motion.div initial='imgScreen' whileInView='onscreen' viewport={{ once: false, amount: 0.1 }} className='col'>
          <motion.div variants={ itemVariants } className={`d-flex justify-content-center`}>
            {/* <Image src={exclusiveImg} height={700} width={250} objectFit='cover' alt='exclusive' /> */}
          </motion.div>
        </motion.div>
        
        <motion.div className='col mt-0 mt-md-5 pt-0 pt-md-5' initial='offscreen' whileInView='onscreen' viewport={{ once: false, amount: 0.5 }}>
            <motion.h1 variants={itemVariants} className={style.h1}>Yellow Jump Suit</motion.h1>
            <motion.p variants={itemVariants}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab mollitia aut hic quo placeat eius temporibus qui! In nam est repellendus quidem consectetur? Provident minus ipsum eligendi tempora. Nam!</motion.p>
            <motion.button variants={itemVariants} className="myBtn px-5 mt-2">Reedem Now</motion.button>
        </motion.div>
      </div>
      
      <div className={`${style.wrapper} row row-cols-1 row-cols-md-2 row-cols-lg-2 d-sm-flex justify-content-center`}>
        <motion.div initial='imgScreen' whileInView='onscreen' viewport={{ once: false, amount: 0.5 }} className='order-md-2 col-12'>
          <motion.div variants={ itemVariants } className={` d-flex justify-content-center`}>
            {/* <Image src={exclusiveImg} height={700} width={250} objectFit='cover' alt='exclusive' /> */}
          </motion.div>
        </motion.div>
        
        <motion.div className='col mt-0 mt-md-5 pt-0 pt-md-5 order-md-1' initial='offscreen' whileInView='onscreen' viewport={{ once: false, amount: 0.5 }}>
            <motion.h1 variants={itemVariants} className={style.h1}>Yellow Jump Suit</motion.h1>
            <motion.p variants={itemVariants}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab mollitia aut hic quo placeat eius temporibus qui! In nam est repellendus quidem consectetur? Provident minus ipsum eligendi tempora. Nam!</motion.p>
            <motion.button variants={itemVariants} className="myBtn px-5 mt-2">Reedem Now</motion.button>
        </motion.div>
      </div>
      
      <div className={`${style.wrapper} row row-cols-1 row-cols-md-2 row-cols-lg-2 d-sm-flex justify-content-center`}>
        <motion.div initial='imgScreen' whileInView='onscreen' viewport={{ once: false, amount: 0.5 }} className='col-12'>
          <motion.div variants={ itemVariants } className={` d-flex justify-content-center`}>
            {/* <Image src={exclusiveImg} height={700} width={250} objectFit='cover' alt='exclusive' /> */}
          </motion.div>
        </motion.div>
        
        <motion.div className='col mt-0 mt-md-5 pt-0 pt-md-5' initial='offscreen' whileInView='onscreen' viewport={{ once: false, amount: 0.5 }}>
            <motion.h1 variants={itemVariants} className={style.h1}>Yellow Jump Suit</motion.h1>
            <motion.p variants={itemVariants}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab mollitia aut hic quo placeat eius temporibus qui! In nam est repellendus quidem consectetur? Provident minus ipsum eligendi tempora. Nam!</motion.p>
            <motion.button variants={itemVariants} className="myBtn px-5 mt-2">Reedem Now</motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Exclusivenew
