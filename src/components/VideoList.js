import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos,onVideoSelect}) =>{
    const rendereredList = videos.map(video =>{
        return <VideoItem onVideoSelect={onVideoSelect} video={video}/>;
    })
    return <div className="ui relaxed divided list">{rendereredList}</div>;
};

export default VideoList;