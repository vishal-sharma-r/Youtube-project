import React from 'react'

const VideoCard = ({info}) => {
  // console.log(info);
    const {snippet,statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;

  return (
    <div className='p-2 m-2 w-64 h-96 shadow-lg flex flex-col hover:scale-110'>
        <img src={thumbnails.high.url} alt='videothubnails' className='rounded-lg '/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard;