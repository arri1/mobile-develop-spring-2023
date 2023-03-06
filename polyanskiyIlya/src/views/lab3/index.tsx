import axios, {AxiosResponse} from 'axios';
import React, {useMemo, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Post} from './post.model';

const Lab3 = () => {
  const [postId, setPostId] = useState<string>('1');
  const [postData, setPostData] = useState<Partial<Post>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [_, setDummy] = useState(0);

  const getData: () => Promise<AxiosResponse<Post> | undefined> = async () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

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

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View>
      <View style={styles.buttonContainer}>
        <Button
          title="Call rerender"
          onPress={() => {
            setDummy(prev => prev + 1);
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Call `getData`"
          onPress={() => {
            getData();
          }}
        />
      </View>
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

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 5,
  },
});

export default Lab3;
