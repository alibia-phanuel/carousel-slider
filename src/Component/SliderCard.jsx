import card from "../assets/card1.png";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
// -1445px
function SliderCard() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="mt-[100px] w-full container  flex  justify-center flex-col">
      <div className="text-center my-10">REACT SLIDER</div>
      <motion.div
        ref={carousel}
        className="carousel cursor-grab overflow-hidden  bg-orange-700"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex gap-2 bg-slate-400 "
        >
          <div className="  p-2  rounded h-[400px] w-[250px] flex justify-center min-w-[30rem]">
            <img src={card} alt="imgcard" className="rounded"></img>
          </div>

          <div className="  p-2  rounded h-[400px] w-[250px] flex justify-center min-w-[30rem]">
            <img src={card} alt="imgcard" className="rounded"></img>
          </div>

          <div className="  p-2  rounded h-[400px] w-[250px] flex justify-center min-w-[30rem]">
            <img src={card} alt="imgcard" className="rounded"></img>
          </div>

          <div className="  p-2  rounded h-[400px] w-[250px] flex justify-center min-w-[30rem]">
            <img src={card} alt="imgcard" className="rounded"></img>
          </div>

          <div className="  p-2  rounded h-[400px] w-[250px] flex justify-center min-w-[30rem]">
            <img src={card} alt="imgcard" className="rounded"></img>
          </div>

          <div className="  p-2  rounded h-[400px] w-[250px] flex justify-center min-w-[30rem]">
            <img src={card} alt="imgcard" className="rounded"></img>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SliderCard;
