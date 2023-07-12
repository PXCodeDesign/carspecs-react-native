import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import Specs from '../components/Details/Specs';
import Dimensions from '../components/Details/Dimensions';
import {useState, useEffect, useCallback} from 'react';
import {Icon} from '../Icon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GoBack from '../components/GoBack';

function ModelDetailPage(props) {
  const {item} = props.route.params;

  const [activeTab, setActiveTab] = useState('specs');
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
  }, []);

  const handleAddIconClick = useCallback(() => {
    const isModelAdded = selectedModels.some(model => model._id === item._id);
    const isMaxModelsAdded = selectedModels.length >= 2;

    if (isModelAdded) {
      const updatedModels = selectedModels.filter(
        model => model._id !== item._id,
      );
      setSelectedModels(updatedModels);
    } else {
      if (!isMaxModelsAdded) {
        const updatedModels = [...selectedModels, {...item, isAdded: true}];
        setSelectedModels(updatedModels);
      } else {
        const updatedModels = selectedModels.slice(1);
        updatedModels.push({...item, isAdded: true});
        setSelectedModels(updatedModels);
      }
    }
  }, [item, selectedModels]);

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

  return (
    <View style={{backgroundColor: 'black', height: '100%'}}>
      <GoBack navigation={props.navigation} />
      <ScrollView
        accessibilityElementsHidden={true}
        style={{marginBottom: 60}}
        removeClippedSubviews={true}>
        <View style={{height: 200, margin: 10}}>
          <Image
            style={{resizeMode: 'cover', borderRadius: 12, height: 200}}
            source={{
              uri: item.model_image,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#171717',
            borderRadius: 12,
            flex: 1,
            marginHorizontal: 10,
            marginVertical: 5,
            padding: 10,
          }}>
          <Text
            style={{fontSize: 20, fontWeight: '500', color: 'white', flex: 1}}>
            {item.model_name}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: '#007fff',
              flex: 1,
            }}>
            {item.model_full_name}
          </Text>
          <Text
            numberOfLines={4}
            style={{fontSize: 14, fontWeight: '400', flex: 3}}>
            {item.model_title}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
            marginVertical: 6,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 10,
              marginVertical: 6,
            }}>
            <TouchableOpacity
              onPress={() => setActiveTab('specs')}
              style={{
                backgroundColor: activeTab === 'specs' ? '#007fff' : '#171717',
                padding: 10,
                borderRadius: 12,
                marginRight: 10,
              }}>
              <Text style={{fontSize: 16, fontWeight: '400', color: 'white'}}>
                Specs
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActiveTab('dimensions')}
              style={{
                backgroundColor:
                  activeTab === 'dimensions' ? '#007fff' : '#171717',
                padding: 10,
                borderRadius: 12,
              }}>
              <Text style={{fontSize: 16, fontWeight: '400', color: 'white'}}>
                Dimensions
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: selectedModels.some(
                model => model._id === item._id && model.isAdded,
              )
                ? '#007fff'
                : '#171717',
              padding: 10,
              borderRadius: 12,
              flexDirection: 'row',
            }}
            onPress={handleAddIconClick}>
            <View
              style={{
                borderColor: 'white',
                borderWidth: 1,
                borderRadius: 5,
                padding: 1,
                marginRight: 5,
              }}>
              <Icon
                name={
                  selectedModels.some(
                    model => model._id === item._id && model.isAdded,
                  )
                    ? 'check'
                    : 'add'
                }
                size={18}
                color="white"
              />
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: selectedModels.some(
                  model => model._id === item._id && model.isAdded,
                )
                  ? 'white'
                  : 'white',
              }}>
              {selectedModels.some(
                model => model._id === item._id && model.isAdded,
              )
                ? 'Added'
                : 'Add'}
            </Text>
          </TouchableOpacity>
        </View>
        {activeTab === 'specs' ? (
          <Specs item={item} />
        ) : (
          <Dimensions item={item} />
        )}
      </ScrollView>
    </View>
  );
}

export default ModelDetailPage;
