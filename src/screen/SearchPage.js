import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import LogoTitle from '../components/LogoTitle';
import {Icon} from '../Icon';
import {ModelApi} from '../data/modelApi';

function SearchPage({navigation}) {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const modelsData = await ModelApi();
      setData(modelsData);
    };
    getData();
  }, []);

  useEffect(() => {
    filterData();
  }, [data, searchText]);

  const filterData = () => {
    const filtered = data.filter(item => {
      const modelNameMatch = item.model_name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const modelFullNameMatch = item.model_full_name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      return modelNameMatch || modelFullNameMatch;
    });
    setFilteredData(filtered);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('SearchModelDetailPage', {item})}
        key={item._id}>
        <View style={styles.item}>
          <Image
            source={{uri: item.model_image}}
            resizeMode="cover"
            style={styles.img}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: 'black'}}>
      <View style={{height: '100%'}}>
        <LogoTitle />
        <ScrollView>
          <View>
            <View style={styles.searchContainer}>
              <View style={styles.iconContainer}>
                <Icon name="search" size={28} />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Search"
                onChangeText={setSearchText}
              />
            </View>
          </View>
          <View style={styles.container}>
            <FlatList
              scrollEnabled={false}
              data={filteredData}
              renderItem={renderItem}
              keyExtractor={item => item._id}
              numColumns={2}
            />
          </View>
        </ScrollView>
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
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 100,
    width: '100%',
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchContainer: {
    backgroundColor: '#171717',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  iconContainer: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SearchPage;
