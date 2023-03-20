import {ActivityIndicator, Text, View} from 'react-native';
import {gql, useQuery} from '@apollo/client';

const GET_ALL_FILMS = gql`
  query {
    allFilms {
      films {
        title
      }
    }
  }
`;

const ApolloExample = () => {
  const {data, loading} = useQuery(GET_ALL_FILMS);

  console.log(data);
  if (loading)
    return (
      <View>
        <ActivityIndicator />
      </View>
    );

  return (
    <View>
      {data.allFilms.films.map((item: any) => (
        <Text style={{color:'white',marginBottom:10}}>{item.title}</Text>
      ))}
    </View>
  );
};

export default ApolloExample;
