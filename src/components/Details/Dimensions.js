import {View, Text} from 'react-native';

function Dimensions({item}) {
  return (
    <View
      style={{
        marginHorizontal: 10,
        borderRadius: 12,
        backgroundColor: '#171717',
        marginVertical: 5,
        flexDirection: 'column',
      }}>
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 16,
            flex: 4,
            fontWeight: '500',
            color: 'white',
          }}>
          Length
        </Text>
        <Text style={{fontSize: 14, flex: 5, fontWeight: '400'}}>
          {item.length}
        </Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 16,
            flex: 4,
            fontWeight: '500',
            color: 'white',
          }}>
          Width
        </Text>
        <Text style={{fontSize: 14, flex: 5, fontWeight: '400'}}>
          {item.width}
        </Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 16,
            flex: 4,
            fontWeight: '500',
            color: 'white',
          }}>
          Height
        </Text>
        <Text style={{fontSize: 14, flex: 5, fontWeight: '400'}}>
          {item.height}
        </Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 16,
            flex: 4,
            fontWeight: '500',
            color: 'white',
          }}>
          Front Track
        </Text>
        <Text style={{fontSize: 14, flex: 5, fontWeight: '400'}}>
          {item.front_track}
        </Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 16,
            flex: 4,
            fontWeight: '500',
            color: 'white',
          }}>
          Rear Track
        </Text>
        <Text style={{fontSize: 14, flex: 5, fontWeight: '400'}}>
          {item.rear_track}
        </Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 16,
            flex: 4,
            fontWeight: '500',
            color: 'white',
          }}>
          Wheelbase
        </Text>
        <Text style={{fontSize: 14, flex: 5, fontWeight: '400'}}>
          {item.wheelbase}
        </Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 16,
            flex: 4,
            fontWeight: '500',
            color: 'white',
          }}>
          Ground Clearance
        </Text>
        <Text style={{fontSize: 14, flex: 5, fontWeight: '400'}}>
          {item.ground_clearance}
        </Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 16,
            flex: 4,
            fontWeight: '500',
            color: 'white',
          }}>
          Cargo Volume
        </Text>
        <Text style={{fontSize: 14, flex: 5, fontWeight: '400'}}>
          {item.cargo_volume}
        </Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 16,
            flex: 4,
            fontWeight: '500',
            color: 'white',
          }}>
          Turning Circle
        </Text>
        <Text style={{fontSize: 14, flex: 5, fontWeight: '400'}}>
          {item.turning_circle}
        </Text>
      </View>
    </View>
  );
}
export default Dimensions;
