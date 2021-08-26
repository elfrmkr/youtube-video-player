import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './searchbar';
import VideoDetail from './videoDetail';
import VideoList from './videoList';


// class component
class App extends React.Component {

state = {videos: [],
        selectedVideo: null
};
// initial search for the users to make prettier page
componentDidMount() {
    this.onTermSubmit('hello');
};
// async api request to youtube
onTermSubmit = async term => {
   const response = await youtube.get('/search', {
        params: {
            q: term
        }
    });
    // show video items and select the first one to demonstrate on the page
    this.setState({
        videos: response.data.items, 
        selectedVideo: response.data.items[0]
    });
};
// video pbject that we fetched from youtube api
onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
};

render(){
 return (
  <div style = {{backgroundColor: 'grey'}}>
    <div className = "ui container" style = {{backgroundColor: 'grey'}} >
    <SearchBar onFormSubmit = {this.onTermSubmit}/>
    <div className = "ui grid">
        <div className = "ui column">
           <div className = "eleven wide column" >   
                <VideoDetail video = {this.state.selectedVideo} />
           </div>
            <div className = 'five wide column' style = {{backgroundColor: 'white', padding:'10px'}}>
            <VideoList 
                onVideoSelect = {this.onVideoSelect} 
                videos = {this.state.videos} />
            </div> 
        </div>
    </div>
    </div>
   </div>)
    }
};

export default App;