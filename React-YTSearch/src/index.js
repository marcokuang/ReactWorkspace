import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// Create a new component, which should produce some HTML

const YOUTUBE_API_KEY = 'AIzaSyDy92FI1kxKdpSXUn1clsq8qoV1XnnG4Hg';



class App extends Component {
    
    constructor (props){
        super (props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: YOUTUBE_API_KEY, term: 'Surface book'}, (data) => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
                }
            );
            console.log(this.state.videos);
        });
    }

    render (){
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
            </div>
        );
    }
}
// React will render the component in the DOM
ReactDOM.render(<App />, document.querySelector('#target'));