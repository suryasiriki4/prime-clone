import React, {useState} from 'react';
import $ from 'jquery';
// import Swiper core and required components
import ReactDOM from 'react-dom';


import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


//video-player
import ReactPlayer, {onPlay} from 'react-player/youtube'
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const links = [
  {
  add: "https://www.youtube.com/watch?v=YoHD9XEInc0",
  img: "images/second-row-images/1.webp",
  },
  {
  add: "https://www.youtube.com/watch?v=k10ETZ41q5o",
  img: "images/second-row-images/2.webp",
  },
  {
  add: "https://www.youtube.com/watch?v=H6MLJG0RdDE",
  img: "images/second-row-images/3.webp",
  },
  {
  add: "https://www.youtube.com/watch?v=Im6koyYDwcA",
  img: "images/second-row-images/4.webp",
  },
  {
  add: "https://www.youtube.com/watch?v=sN75MPxgvX8",
  img: "images/second-row-images/5.webp",
  },
  {
    add: "https://www.youtube.com/watch?v=hAUTdjf9rko",
    img: "images/second-row-images/6.webp",
  },
  {
    add: "https://www.youtube.com/watch?v=UrIbxk7idYA",
    img: "images/second-row-images/7.webp",
  },
  {
  add: "https://www.youtube.com/watch?v=paFgQNPGlsg",
  img: "images/second-row-images/8.webp",
  },
];


export default () => {

  const [click, setClick] = useState({
    check: false,
    img: "",
  });

  const [cross, setCross] = useState(true);

  function clicked(imgAdd) {
      setClick(prev => {return {
        check: !prev.check,
        video: imgAdd,
      }});
  }

  function HideCross() {
    $('#cross').css('visibility', 'hidden');
  }

  function ShowCross() {
    $('#cross').css('visibility', 'visible');
  }

  return (
      <div className="prime">

        {click.check && 
        
        <div className="video-player" onMouseOver={() => ShowCross()} onMouseOut={() => HideCross()}>
            <CloseIcon id="cross" onClick={() => clicked(click.Add)} />
            <ReactPlayer url={click.video} height="500px" width="100%" playing="true" onPlay={() => HideCross()} onPause={() => ShowCross()}/>
        </div>
        
        }

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>

            {links.map((link) =>          
            
                <SwiperSlide >
                <div className="player-wrapper">                  
                  <img src={link.img} onClick={() => clicked(link.add)}></img>
                </div>
                
                </SwiperSlide> 
            
            )}
        </Swiper>
    </div>
  );
};

