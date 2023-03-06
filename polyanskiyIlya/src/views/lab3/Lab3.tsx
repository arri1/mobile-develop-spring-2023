import axios, {AxiosResponse} from 'axios';
import React, {useMemo, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {Post} from './post.model';

const Lab3 = () => {
  const [postId, setPostId] = useState('1');
  const [postData, setPostData] = useState<Partial<Post>>({});

  const [_, setDummy] = useState(0);

  const getData: () => Promise<AxiosResponse<Post> | undefined> = async () => {
    let result: AxiosResponse<Post> | undefined;

    try {
      result = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
      );
    } catch {
      result = undefined;
    }

    return result;
  };

  useMemo(async () => {
    const result = await getData();
    setPostData(result?.data || {});

    return result;
  }, [postId]);

  return (
    <View>
      <Button
        title="Call rerender"
        onPress={() => {
          setDummy(prev => prev + 1);
        }}
      />
      <TextInput
        editable
        inputMode="decimal"
        value={postId}
        onChangeText={(text: string) => {
          setPostId(text);
        }}
      />
      <Text>{postData.body || 'Нет данных'}</Text>
    </View>
  );
};

export default Lab3;
