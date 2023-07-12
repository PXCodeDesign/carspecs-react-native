import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import TrendingCar from '../components/TrendingCar';
import Recomendation from '../components/Recomendation';
import LogoTitle from '../components/LogoTitle';
import {ModelApi} from '../data/modelApi';

function HomePage({navigation}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const ModelsApi = await ModelApi();
      setData(ModelsApi);
    };
    getData();
  }, []);

  return (
    <>
      <SafeAreaView
        style={{
          height: '100%',
          backgroundColor: 'black',
        }}>
        <ScrollView
          style={{
            height: '100%',
          }}>
          <LogoTitle />
          <View
            style={{
              height: '100%',
            }}>
            <TrendingCar item={data} />
            <Recomendation navigation={navigation} item={data} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default HomePage;
