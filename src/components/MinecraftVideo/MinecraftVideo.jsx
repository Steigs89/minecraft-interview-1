import React from 'react';
import Style from './MinecraftVideo.css';

const MinecraftVideo = () => {
	return(
		<div style={Style} className="container minecraft-video">
			<h3 className="font-color-sky">ARIZONA MINECRAFT EXPERIENCE</h3>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/a7GITgqwDVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
	)
}

export default MinecraftVideo;





