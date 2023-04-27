import React from "react";
import { View, Text, FlatList } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import client from "./client";

const BOOKS_QUERY = gql`
  query {
    volumes(q: "Harry Potter") {
      items {
        id
        volumeInfo {
          title
          authors
          description
          imageLinks {
            smallThumbnail
            thumbnail
          }
        }
      }
    }
  }`
;

const BookList = () => (
  <Query query={BOOKS_QUERY} client={client}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error :(</Text>;

      return (
        <FlatList
          data={data.volumes.items}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View>
              <Text>{item.volumeInfo.title}</Text>
              <Text>{item.volumeInfo.authors.join(", ")}</Text>
            </View>
          )}
        />
      );
    }}
  </Query>
);

export default BookList;