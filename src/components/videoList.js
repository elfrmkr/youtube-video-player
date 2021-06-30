import React from 'react';
import VideoItem from './videoItem';

const VideoList = ({videos, onVideoSelect}) => {
 // props.videos   
 const renderedList = videos.map((video) => {
    return (
        <VideoItem
        key = {video.id.videoId} 
        onVideoSelect = {onVideoSelect}
        video = {video}/>
    );
 });
return (
    <div className = "ui relaxed divided list">
        {renderedList}
    </div>
);
};

export default VideoList;