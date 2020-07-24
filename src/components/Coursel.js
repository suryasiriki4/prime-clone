import React, {useState} from 'react';
import { Carousel } from 'react-bootstrap'
import $ from 'jquery';
import Iframe from 'react-iframe';
import ReactPlayer, {onPlay} from 'react-player/youtube'
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';


const BannerLinks = [
  {
    add: "https://www.youtube.com/watch?v=Nt9L1jCKGnE",
    img: "images/posters/poster1.webp",
  },
  {
    add: "https://www.youtube.com/watch?v=AbyJignbSj0",
    img: "images/posters/poster2.webp",
  },
  {
    add: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    img: "images/posters/poster3.webp",
  },
  {
    add: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
    img: "images/posters/poster4.webp",
  },
  {
    add: "https://www.youtube.com/watch?v=mfokPqeSNcw",
    img: "images/posters/poster5.webp",
  },
];


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [click, setClick] = useState({
      check: false,
      img: "",
    });


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

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    //https://www.youtube.com/watch?v=Nt9L1jCKGnE

    

    return (
      
      <div>
          <Carousel activeIndex={index} onSelect={handleSelect}>
              {
              BannerLinks.map(link => 

                              <Carousel.Item>
                                  <img
                                    className="banner"
                                    src={link.img}
                                    alt="First slide"
                                    onClick={() => clicked(link.add)}
                                  />     

                              </Carousel.Item>)
              }
          </Carousel>

          {click.check && 
        
        <div className="video-player" onMouseOver={() => ShowCross()} onMouseOut={() => HideCross()}>
            <CloseIcon id="cross" onClick={() => clicked(click.Add)} />
            <ReactPlayer url={click.video} height="500px" width="100%" playing="true" onPlay={() => HideCross()} onPause={() => ShowCross()} onEnded={() => clicked(click.add)}/>
        </div>
        
        }
      </div>
      
    );
  }
  
 export default ControlledCarousel;
