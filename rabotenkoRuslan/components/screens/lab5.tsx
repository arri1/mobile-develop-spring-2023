import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { View, Text } from 'react-native';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      author
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      {data.books.map((book: { id: string; title: string; author: string }) => (
        <View key={book.id}>
          <Text>{book.title}</Text>
          <Text>{book.author}</Text>
        </View>
      ))}
    </View>
  );
};

export default BookList;