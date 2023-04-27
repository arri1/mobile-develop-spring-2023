import { gql } from '@apollo/client';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import Config from 'react-native-config';

const GET_VIDEOS = gql`
  query GetVideos($query: String!) {
    search(q: $query, type: video, maxResults: 10, part: snippet) {
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

const Lab6 = () => {
  const [query, setQuery] = useState('');
  const apiKey = Config.API_KEY;
  const { loading, error, data } = useQuery(GET_VIDEOS, {
    variables: { query, apiKey },
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search videos..."
        onChangeText={setQuery}
        value={query}
      />
      <FlatList
        data={data.search.items}
        keyExtractor={(item) => item.id.videoId}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image style={styles.thumbnail} source={{ uri: item.snippet.thumbnails.medium.url }} />
            <Text style={styles.title}>{item.snippet.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  thumbnail: {
    width: 120,
    height: 90,
    marginRight: 10,
  },
  title: {
    flex: 1,
  },
});

export default Lab6;