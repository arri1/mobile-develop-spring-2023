import React, { useState } from 'react';
import { View, TextInput, Button, Image, Text } from 'react-native';
import youtubeApi from '../youtubeAPI';
import AppButton from '../components/appButton';


const Lab6 = () => {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);

  const handleSearch = async () => {
    const items = await youtubeApi.searchVideos(query);
    setVideos(items);
  };

  return (
      <View style={{ padding: 20 }}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search YouTube..."
          style={{ marginBottom: 10, fontSize: 24 }}
        />
        <AppButton title="Search" onPress={handleSearch} />
        <View>
          {videos.map((video) => (
            <View key={video.id.videoId} style={{ marginBottom: 20 }}>
              <Image
                source={{ uri: video.snippet.thumbnails.medium.url }}
                style={{ width: '100%', height: 200 }}
              />
              <Text style={{ marginTop: 10, fontWeight: 'bold' }}>
                {video.snippet.title}
              </Text>
            </View>
          ))}
        </View>
      </View>
  );
};

export default Lab6;
