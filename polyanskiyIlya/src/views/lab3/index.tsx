import axios, {AxiosResponse} from 'axios';
import React, {useEffect, useMemo, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Post} from '../../models/post.model';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Comment from '../../components/Comment';

const Lab3 = () => {
  const [postId, setPostId] = useState<string>('1');
  const [postIdForRequest, setPostIdForRequest] = useState<string>('1');
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
        `https://jsonplaceholder.typicode.com/posts/${postIdForRequest}`,
      );
    } catch {
      result = undefined;
    }

    return result;
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => setPostIdForRequest(postId), 1000);
    return () => clearTimeout(timeOutId);
  }, [postId]);

  useMemo(async () => {
    const result = await getData();
    setPostData(result?.data || {});

    return result;
  }, [postIdForRequest]);

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
      <Input
        inputMode="decimal"
        placeholder="Введите номер поста"
        value={postId}
        onChange={(text: string) => {
          setPostId(text);
        }}
      />
      <Comment text={postData.body} title={postData.title} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 5,
  },
});

export default Lab3;
