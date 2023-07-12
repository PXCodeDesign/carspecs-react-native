import React from 'react';
import {FlatList, Image, ImageBackground, Text, View} from 'react-native';

function TrendingCar({item}) {
  const latestModels = item.slice(-5).reverse();

  return (
    <FlatList
      horizontal={true}
      style={{
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginTop: 10,
      }}
      data={latestModels}
      keyExtractor={item => item._id}
      renderItem={({item}) => (
        <View
          style={{
            height: 270,
            width: '100%',
            overflow: 'hidden',
          }}>
          <ImageBackground
            style={{
              flex: 1,
              resizeMode: 'cover',
              borderRadius: 10,
            }}
            blurRadius={100}
            source={{
              uri: item.model_image,
            }}>
            <View
              style={{
                height: 270,
                width: '95%',
              }}>
              <Image
                style={{
                  height: 200,
                  width: '100%',
                  borderRadius: 10,
                  marginHorizontal: 10,
                  marginTop: 10,
                }}
                source={{
                  uri: item.model_image,
                }}
              />
              <View
                style={{
                  flex: 1,
                  marginVertical: 4,
                  marginHorizontal: 10,
                  flexDirection: 'column',
                }}>
                <Text
                  style={{
                    marginVertical: 2,
                    textAlign: 'left',
                    color: 'white',
                    fontSize: 18,
                    fontWeight: '700',
                    letterSpacing: 1,
                  }}>
                  {item.model_name}
                </Text>
                <Text
                  style={{
                    flex: 1,
                    marginVertical: 1,
                    textAlign: 'left',
                    color: 'white',
                    fontSize: 12,
                    fontWeight: '700',
                    letterSpacing: 1,
                  }}>
                  ({item.model_full_name})
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      )}
    />
  );
}

export default TrendingCar;
