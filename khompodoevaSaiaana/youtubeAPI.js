import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import Config from 'react-native-config';

const apiKey = Config.API_KEY;

const client = new ApolloClient({
  link: new HttpLink({
    uri: `https://www.googleapis.com/youtube/v3/search?key=${apiKey}`,
  }),
  cache: new InMemoryCache(),
});

const GET_VIDEOS = gql`
  query search($q: String!) {
    search(q: $q, type: video) {
      items {
        id {
          videoId
        }
        snippet {
          title
          thumbnails {
            medium {
              url
            }
          }
        }
      }
    }
  }
`;

const searchVideos = async (query) => {
  const response = await client.query({
    query: GET_VIDEOS,
    variables: { q: query },
  });
  return response.data.search.items;
};

export default { searchVideos };
