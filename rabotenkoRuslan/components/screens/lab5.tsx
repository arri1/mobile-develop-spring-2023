import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { View, Text, TextInput, Button } from 'react-native';
import { gql } from 'graphql-tag';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      author
    }
  }
`;

const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      id
      title
      author
    }
  }
`;

const BookList = () => {
  const { loading, error, data, refetch } = useQuery(GET_BOOKS);
  const [addBook] = useMutation(ADD_BOOK);

  const [title, setTitle] = React.useState('');
  const [author, setAuthor] = React.useState('');

  const handleAddBook = () => {
    addBook({ variables: { title, author } }).then(() => {
      setTitle('');
      setAuthor('');
      refetch();
    });
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Enter book title"
          style={{ flex: 1 }}
        />
        <TextInput
          value={author}
          onChangeText={setAuthor}
          placeholder="Enter author name"
          style={{ flex: 1 }}
        />
        <Button title="Add" onPress={handleAddBook} />
      </View>
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