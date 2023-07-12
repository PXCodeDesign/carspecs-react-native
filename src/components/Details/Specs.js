import {View, Text} from 'react-native';

function Specs({item}) {
  return (
    <View
      style={{
        flexDirection: 'column',
        marginHorizontal: 10,
        borderRadius: 12,
        backgroundColor: '#171717',
        marginVertical: 5,
        flex: 1,
      }}>
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: 'white',
            flex: 4,
          }}>
          Cylinders
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', flex: 5}}>
          {item.cylinders}
        </Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: 'white',
            flex: 4,
          }}>
          Displacement
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', flex: 5}}>
          {item.displacement}
        </Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: 'white',
            flex: 4,
          }}>
          Power
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', flex: 5}}>
          {item.power}
        </Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: 'white',
            flex: 4,
          }}>
          Torque
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', flex: 5}}>
          {item.torque}
        </Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: 'white',
            flex: 4,
          }}>
          Fuel System
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', flex: 5}}>
          {item.fuel_system}
        </Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: 'white',
            flex: 4,
          }}>
          Fuel
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', flex: 5}}>
          {item.fuel}
        </Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: 'white',
            flex: 4,
          }}>
          Fuel Capacity
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', flex: 5}}>
          {item.fuel_capacity}
        </Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: 'white',
            flex: 4,
          }}>
          Top Speed
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', flex: 5}}>
          {item.top_speed}
        </Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: 'white',
            flex: 4,
          }}>
          Acceleration
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', flex: 5}}>
          {item.acceleration}
        </Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: 'white',
            flex: 4,
          }}>
          Drive Type
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', flex: 5}}>
          {item.drive_type}
        </Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: 'white',
            flex: 4,
          }}>
          Gearbox
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', flex: 5}}>
          {item.gearbox}
        </Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: 'white',
            flex: 4,
          }}>
          Front
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', flex: 5}}>
          {item.front}
        </Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: 'white',
            flex: 4,
          }}>
          Rear
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', flex: 5}}>
          {item.rear}
        </Text>
      </View>
    </View>
  );
}
export default Specs;
