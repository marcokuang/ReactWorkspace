import React from 'react';

const VideoListItem = (props) => {

    const imageUrl = props.video.snippet.thumbnails.default.url;
    return (
        <div>
            <li id={props.id} className='list-group-item' onClick={() => props.onVideoSelect(props.video)}> 
                
                <div className='video-list media'>
                    <div className='media-left'>
                        <img className='media-object' src={imageUrl} />
                    </div>

                    <div className='media-body'>
                        <div className='media-heading'>
                            {props.video.snippet.title}
                        </div>
                    </div>
                </div>
            </li>
        </div>
    );
}

export default VideoListItem;