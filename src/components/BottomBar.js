import {TouchableOpacity, View} from 'react-native';
import {Icon} from '../Icon';

function BottomBar(props) {
  function homeScreen() {
    props.navigation.navigate('HomeTab');
  }
  function searchScreen() {
    props.navigation.navigate('SearchTab');
  }
  function brandScreen() {
    props.navigation.navigate('BrandTab');
  }
  function toCompareScreen() {
    props.navigation.navigate('ToCompareTab');
  }
  return (
    <>
      <View
        style={{
          flex: 1,
          borderRadius: 15,
          flexDirection: 'row',
          backgroundColor: '#171717',
          position: 'absolute',
          bottom: 10,
          paddingVertical: 12,
          paddingHorizontal: 10,
          marginBottom: 6,
          marginHorizontal: 10,
        }}>
        <TouchableOpacity
          onPress={homeScreen}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Icon name="home" size={36} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={searchScreen}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Icon name="search" size={36} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={brandScreen}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Icon name="car" size={36} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}
          onPress={toCompareScreen}>
          <Icon name="compare" size={36} />
        </TouchableOpacity>
      </View>
    </>
  );
}

export default BottomBar;
