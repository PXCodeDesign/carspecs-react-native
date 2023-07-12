import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {ModelApi} from '../data/modelApi';
import {Icon} from '../Icon';
import GoBack from '../components/GoBack';
import {useNavigation} from '@react-navigation/native';

function BrandDetailPage({route}) {
  const {item} = route.params;
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const getData = async () => {
      const ModelsApi = await ModelApi();
      setData(ModelsApi);
    };
    getData();
  }, []);

  const filteredData = data.filter(model => model._brandId === item._id);

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: 'black'}}>
      <View style={{height: '100%'}}>
        <GoBack navigation={navigation} />
        <ScrollView
          accessibilityElementsHidden={true}
          style={{height: '100%', marginTop: 10}}>
          <View style={styles.brand_card}>
            <View style={styles.brand_img}>
              <Image
                source={{uri: item.brand_logo}}
                resizeMode="contain"
                style={styles.brand_logo}
              />

              <Text style={styles.brand_year}>{item.brand_year}</Text>
              <Image
                source={{uri: item.brand_flag}}
                resizeMode="contain"
                style={styles.brand_flag}
              />
            </View>
            <View style={styles.brand_text}>
              <Text style={styles.brand_name}>{item.brand_name}</Text>
              <Text numberOfLines={8} style={styles.brand_title}>
                {item.brand_title}
              </Text>
            </View>
          </View>
          <FlatList
            data={filteredData}
            scrollEnabled={false}
            keyExtractor={item => item._id}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.container}
                onPress={() =>
                  navigation.navigate('BrandModelDetailPage', {item})
                }
                key={item._id}>
                <View style={styles.item}>
                  <Text style={styles.model_name}>{item.model_name}</Text>
                  <Text numberOfLines={1} style={styles.model_full_name}>
                    {item.model_full_name}
                  </Text>
                </View>
                <Icon name="right" size={28} />
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#171717',
    margin: 5,
    padding: 5,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  brand_card: {
    flex: 1,
    borderRadius: 10,
    margin: 5,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#171717',
  },
  brand_img: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  brand_logo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  brand_flag: {height: 20, marginVertical: 10, flex: 2},
  brand_year: {
    flex: 1,
    fontSize: 16,
    marginTop: 8,
    fontWeight: 'normal',
    color: 'white',
    textAlign: 'center',
  },
  brand_text: {
    flex: 5,
    marginLeft: 5,
  },
  model_name: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'normal',
    color: 'white',
  },
  model_full_name: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'normal',
    color: '#007fff',
  },
  brand_name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  brand_title: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'normal',
    color: 'white',
  },
});

export default BrandDetailPage;
