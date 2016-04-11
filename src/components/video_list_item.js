import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => { /*Here video and onVideoSelect are passed to VideoListItem from VideoList*/

  /*ES6 Syntax Shortcut: We can pass video and onVideoSelect to VideoListItem in object brackets, but this is the same as
  const video = props.video and const onVideoSelect = props.onVideoSelect */

  const imageURL = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      {/*this li tag is passed an event handler that calls the onVideoSelect function when clicked*/}
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>

    </li>
  );
};

export default VideoListItem;
