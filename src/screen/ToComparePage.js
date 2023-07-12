import React, {useState, useEffect} from 'react';
import {FlatList, Text, ScrollView, TouchableOpacity, View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import LogoTitle from '../components/LogoTitle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DetailCompare from '../components/DetailCompare';

function ToComparePage() {
  const isFocused = useIsFocused();
  const [selectedModels, setSelectedModels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem('selectedModels');
        if (value !== null) {
          setSelectedModels(JSON.parse(value));
        }
      } catch (error) {
        console.log('Error retrieving selected models:', error);
      }
    };

    fetchData();
  }, [isFocused]);

  const handleDeleteModel = async modelId => {
    const updatedModels = selectedModels.filter(model => model._id !== modelId);
    setSelectedModels(updatedModels);
    try {
      await AsyncStorage.setItem(
        'selectedModels',
        JSON.stringify(updatedModels),
      );
      console.log('Selected models:', updatedModels);
    } catch (error) {
      console.log('Error storing selected models:', error);
    }
  };

  const renderModelItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'column'}}>
        <TouchableOpacity
          onPress={() => handleDeleteModel(item._id)}
          style={{
            backgroundColor: 'red',
            padding: 6,
            borderRadius: 10,
            marginVertical: 4,
            marginHorizontal: 2,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              color: 'white',
              textAlign: 'center',
            }}>
            Delete
          </Text>
        </TouchableOpacity>
        <DetailCompare item={item} />
      </View>
    </View>
  );

  useEffect(() => {
    const storeData = async () => {
      try {
        await AsyncStorage.setItem(
          'selectedModels',
          JSON.stringify(selectedModels),
        );
      } catch (error) {
        console.log('Error storing selected models:', error);
      }
    };

    storeData();
  }, [selectedModels]);

  const splitData = data => {
    const midIndex = Math.ceil(data.length / 2);
    const firstHalf = data.slice(0, midIndex);
    const secondHalf = data.slice(midIndex);
    return [firstHalf, secondHalf];
  };

  const [firstHalf, secondHalf] = splitData(selectedModels);

  return (
    <View style={{backgroundColor: 'black', height: '100%'}}>
      <LogoTitle />
      <ScrollView accessibilityElementsHidden={true}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 2,
          }}>
          <View style={{flex: 1, width: '50%'}}>
            <FlatList
              scrollEnabled={false}
              data={firstHalf}
              keyExtractor={item => item._id}
              renderItem={renderModelItem}
            />
          </View>
          <View style={{flex: 1, width: '50%'}}>
            <FlatList
              scrollEnabled={false}
              data={secondHalf}
              keyExtractor={item => item._id}
              renderItem={renderModelItem}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default ToComparePage;
