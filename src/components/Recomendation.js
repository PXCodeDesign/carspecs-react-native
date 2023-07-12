import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';

function Recomendation({item, navigation}) {
  const randomModels = item.sort(() => 0.5 - Math.random()).slice(0, 6);
  return (
    <>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          marginVertical: 10,
          marginHorizontal: 10,
        }}>
        <Text style={{fontSize: 18, fontWeight: '700', color: 'white'}}>
          Recomendation
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', color: 'lightgrey'}}>
          View All
        </Text>
      </View>

      <FlatList
        numColumns={2}
        scrollEnabled={false}
        data={randomModels}
        renderItem={({item, key}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeModelDetailPage', {item})}
            key={key}
            style={{
              height: 150,
              width: '50%',
            }}>
            <View style={{borderRadius: 10, flex: 1}}>
              <Image
                style={{
                  borderRadius: 10,
                  flex: 3,
                  resizeMode: 'cover',
                  marginHorizontal: 10,
                }}
                source={{
                  uri: `${item.model_image}`,
                }}
              />
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  marginVertical: 5,
                  marginHorizontal: 10,
                  flex: 1,
                }}>
                {item.model_name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
}
export default Recomendation;
