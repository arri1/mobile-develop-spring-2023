import { ApolloClient, InMemoryCache } from '@apollo/client';
import Config from 'react-native-config';

const client = new ApolloClient({
    uri: `https://www.googleapis.com/youtube/v3/search?key=${Config.API_KEY}&part=snippet&q=reactnative`,
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Bearer ${Config.API_KEY}`,
    },
});

export default client;