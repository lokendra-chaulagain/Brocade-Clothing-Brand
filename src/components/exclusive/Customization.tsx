import Image from "next/image";
import React from "react";
import style from "../../../styles/Exclusive.module.css";
import { motion } from "framer-motion";
import products from "../../data/banners.json";
import Link from "next/link";

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
      duration: 0.7,
    },
  },
};
const Customization = () => {
  const product1 = products[4];
  const product2 = products[1];
  const product3 = products[2];

  return (
    <div className="container mb-5">
      <div className={`${style.wrapper} row row-cols-1 row-cols-md-2 row-cols-lg-2 d-sm-flex justify-content-center`}>
        <motion.div
          initial="imgScreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.1 }}
          className="col">
          <motion.div
            variants={itemVariants}
            className={`d-flex justify-content-center`}>
            <Image
              src={product1.image}
              objectFit="scale-down"
              alt="exclusive"
              height={600}
              width={600}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="col mt-0 mt-md-5 pt-0 pt-md-5"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.5 }}>
          <motion.h1
            variants={itemVariants}
            className={style.h1}>
            Speed Demons- Brown
          </motion.h1>
          <motion.p variants={itemVariants}>Speed Demons wearing brown jackets are a tight-knit community of speed enthusiasts who live for the rush of the open road. With a passion for high-performance vehicles, they push themselves and their machines to the limit, weaving through traffic and leaving a trail of excitement and awe in their wake.</motion.p>
          <Link href={"/product/speed-demon-brown"}>
            <motion.button
              variants={itemVariants}
              className="global_black_button px-5 mt-2">
              Redeem Now
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <div className={`${style.wrapper} row row-cols-1 row-cols-md-2 row-cols-lg-2 d-sm-flex justify-content-center`}>
        <motion.div
          initial="imgScreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.5 }}
          className="order-md-2 col-12">
          <motion.div
            variants={itemVariants}
            className={` d-flex justify-content-center`}>
            <Image
              src={product2.image}
              objectFit="scale-down"
              alt="exclusive"
              height={600}
              width={600}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="col mt-0 mt-md-5 pt-0 pt-md-5 order-md-1"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.5 }}>
          <motion.h1
            variants={itemVariants}
            className={style.h1}>
            Speed Demons - Green
          </motion.h1>
          <motion.p variants={itemVariants}>Speed Demons sporting green jackets are a group of high-octane thrill-seekers who live for the adrenaline rush of fast cars and motorcycles. With a fierce determination and a love for speed, they race through the streets, their engines roaring, leaving a trail of awe and excitement behind them.</motion.p>
          <Link href={"/product/speed-demon-green"}>
            <motion.button
              variants={itemVariants}
              className="global_black_button px-5 mt-2">
              Redeem Now
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <div className={`${style.wrapper} row row-cols-1 row-cols-md-2 row-cols-lg-2 d-sm-flex justify-content-center`}>
        <motion.div
          initial="imgScreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.5 }}
          className="col-12">
          <motion.div
            variants={itemVariants}
            className={` d-flex justify-content-center`}>
            <Image
              src={product3.image}
              objectFit="scale-down"
              alt="exclusive"
              height={600}
              width={600}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="col mt-0 mt-md-5 pt-0 pt-md-5"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.5 }}>
          <motion.h1
            variants={itemVariants}
            className={style.h1}>
            Speed Demons - Red
          </motion.h1>
          <motion.p variants={itemVariants}>Speed Demons decked out in red jackets are a bold and fearless crew of speed freaks who live for the thrill of the race. With their high-performance vehicles revving, they tear up the roads with reckless abandon, pushing themselves to the limit and leaving a trail of excitement and danger in their wake.</motion.p>
          <Link href={"/product/speed-demon-red"}>
            <motion.button
              variants={itemVariants}
              className="global_black_button px-5 mt-2">
              Redeem Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Customization;
