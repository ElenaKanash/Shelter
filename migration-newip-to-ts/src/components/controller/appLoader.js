import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '4e3bd25c3927473687295d0495c2aa48', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
