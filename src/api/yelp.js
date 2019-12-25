import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer in_oVnKRLI97xLJwU1ULKOKqceaCO-zviATQKXPHLJVhyEGErG57Ab--8ld3hIJddI7GF6WIznx8FTT7UxlLdijNjM2cDquBwPck3OufMFT19fSOOAZsxMMCDiPpXXYx'
    }
});

