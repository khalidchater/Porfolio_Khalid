"use client"
import {useSwiper} from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

function Workslide({containerStyle, btnStyle, iconeStyle}) {
    const swiper = useSwiper()
  return (
    <div className={containerStyle}>
      <button
        className={btnStyle}
        onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconeStyle} />
      </button>
      <button
        className={btnStyle}
        onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconeStyle} />
      </button>
    </div>
  );
}

export default Workslide