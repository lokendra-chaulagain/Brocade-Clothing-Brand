import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Style from '../../../styles/Giveaway.module.css'

const Giveawaycounter = () => {
    const vidRef = useRef()
    useEffect(() => {
      vidRef.current.play()
    }, [])

    return (
    <>
      <section className={Style.brVideo}>
        {/* <div className="overlay"></div> */}
        <video ref={vidRef} src="https://designsupply-web.com/samplecontent/vender/codepen/20181014.mp4" autoPlay loop muted />
        <div className={`${Style.giveAway}`}>
          <h1>Giveaway</h1>
          <h3>20 hr. 12 min. 19 sec.</h3>
          <button className="global_black_button mt-3 px-4">Enter the giveAway</button>
        </div>
      </section>
    </>
  );
};

export default Giveawaycounter;
