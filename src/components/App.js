import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component{
    state = {videos : [], selectedVideo : null};

    onSearchTerm = async term =>{
        const response = await youtube.get('/search',{
            params : {
                q : term
            }
        });

        this.setState({videos: response.data.items});
    }

    onVideoSelect = video =>{
        console.log('Coming from App!',video);
    }
    render(){
        return(
            <div className="ui-container">
                <div><SearchBar onFormSubmit={this.onSearchTerm}/></div>
                <VideoList onVideoSelect = {this.onVideoSelect} videos = {this.state.videos}/>
            </div>
        );
    }
}

export default App;