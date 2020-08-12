import React, { useState, useEffect } from 'react';
import './App.css';
import Video from './Components/Video';
import db from './firebase';


function App() {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot =>
      {
        console.log(snapshot);
        setVideos(snapshot.docs.map(doc => doc.data()))
      }
    )
  }, [])
  return (
    <div className="app">
      {/* <h1>Hello clever programmer</h1> */}
      <div className="app__videos">

        {videos.map(({id, url, channel, description, song, likes, messages, shares}, index) => (
          <Video 
            key={index}
            url={url}
            channel={channel}
            song={song}
            likes={likes}
            messages={messages}
            description={description}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
