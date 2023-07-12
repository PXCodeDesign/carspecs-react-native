import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BrandApi} from '../data/brandApi';
import GoBack from '../components/GoBack';
import {Icon} from '../Icon';
import {useNavigation} from '@react-navigation/native';

function BrandPage() {
  const [data, setData] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const getData = async () => {
      const BrandsApi = await BrandApi();
      setData(BrandsApi);
    };
    getData();
  }, []);

  useEffect(() => {
    filterData();
  }, [data, searchText]);

  const filterData = () => {
    if (searchText === '') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item => {
        const brandNameMatch = item.brand_name
          .toLowerCase()
          .includes(searchText.toLowerCase());
        const brandYearMatch = item.brand_year
          .toLowerCase()
          .includes(searchText.toLowerCase());
        return brandNameMatch || brandYearMatch;
      });
      setFilteredData(filtered);
    }
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('BrandDetailPage', {item})}
        key={item._id}>
        <Image
          source={{uri: item.brand_logo}}
          resizeMode="contain"
          style={styles.img}
        />
        <Text style={styles.title}>{item.brand_name}</Text>
      </TouchableOpacity>
    );
  };

  const handleRefresh = async () => {
    const BrandsApi = await BrandApi();
    setData(BrandsApi);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{flex: 1}}>
        <GoBack navigation={navigation} />
        <View
          style={{
            backgroundColor: '#171717',
            paddingHorizontal: 10,
            borderRadius: 10,
            marginVertical: 10,
            flexDirection: 'row',
            alignContent: 'center',
            marginHorizontal: 10,
          }}>
          <View style={{alignContent: 'center', justifyContent: 'center'}}>
            <Icon name="search" size={28} />
          </View>
          <TextInput
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              fontSize: 16,
              fontWeight: '600',
            }}
            placeholder="Search"
            onChangeText={setSearchText}
          />
        </View>
        <FlatList
          data={filteredData || data}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          numColumns={2}
          contentContainerStyle={styles.container}
          ListFooterComponent={<View style={{height: 60}} />}
          refreshing={false}
          onRefresh={handleRefresh}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
  item: {
    flex: 2,
    height: 100,
    backgroundColor: '#171717',
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  title: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});

export default BrandPage;
