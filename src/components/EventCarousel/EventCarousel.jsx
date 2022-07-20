import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel} from 'react-responsive-carousel';
import Style from './EventCarousel.css';
import carouImgs from '../../img/carousel';
import chevLeft from '../../img/carousel/chevron-left.png';
import chevRight from '../../img/carousel/chevron-right.png';


const EventCarousel = () => {
	const carouselOptions = {
		showArrows: true,
		showIndicators: true,
		infiniteLoop: true,
		autoPlay: false,
		showStatus: false,
		thumbWidth: 0
	}
	const arrowStyles = {
		position: 'relative',
		width: '30px',
		padding: '0',
		top: '0',
		bottom: '0',
		marginTop: '0',
		background: 'transparent',
		border: 'none'
    };
	return(
		<div style={Style} className="container minecraft-carousel">
			<h3 className="font-color-sky">EVENT HIGHLIGHTS</h3>
			<Carousel {...carouselOptions}
				renderArrowPrev={(onClickHandler, hasPrev, label) => hasPrev && (
						<button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, marginRight: '15px' }}>
							<img src={chevLeft} alt=" " />
						</button>
					)
				}

				renderArrowNext={(onClickHandler, hasNext, label) => hasNext && (
						<button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, marginLeft: '15px' }}>
							<img src={chevRight} alt=" " />
						</button>
					)
				}
				
				>
                {
					carouImgs.map(thisImg => 
						<div key={thisImg.id}>
							<img src={thisImg.src} alt={thisImg.alt} />
						</div>
					)
				}
            </Carousel>
		</div>
	)
}

export default EventCarousel