import axios from 'axios';

const KEY = 'AIzaSyDe8ttTSGoYpBsBjpu-h409QupKYZ9QK14';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params :{
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
});




