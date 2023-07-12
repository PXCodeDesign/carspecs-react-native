import {Image, StyleSheet, Text, View} from 'react-native';

function DetailCompare({item}) {
  return (
    <View
      style={{
        borderRadius: 10,
        backgroundColor: '#171717',
        marginBottom: 20,
        paddingHorizontal: 4,
      }}>
      <View>
        <Image
          style={{resizeMode: 'cover', borderRadius: 10, height: 100}}
          source={{
            uri: item.model_image,
          }}
        />
      </View>
      <View
        style={{
          height: 60,
          backgroundColor: '#171717',
          borderRadius: 12,
          marginTop: 4,
        }}>
        <Text style={{fontSize: 14, fontWeight: '500', color: 'white'}}>
          {item.model_name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            color: '#007fff',
            flex: 1,
          }}>
          {item.model_full_name}
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Cylinders</Text>
        <Text style={styles.text}>{item.cylinders}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Displacement</Text>
        <Text style={styles.text}>{item.displacement}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Power</Text>
        <Text style={styles.text}>{item.power}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Torque</Text>
        <Text style={styles.text}>{item.torque}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Fuel System</Text>
        <Text style={styles.text}>{item.fuel_system}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Fuel</Text>
        <Text style={styles.text}>{item.fuel}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Fuel Capacity</Text>
        <Text style={styles.text}>{item.fuel_capacity}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Top Speed</Text>
        <Text style={styles.text}>{item.top_speed}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Acceleration</Text>
        <Text style={styles.text}>{item.acceleration}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Drive Type</Text>
        <Text style={styles.text}>{item.drive_type}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Gearbox</Text>
        <Text style={styles.text}>{item.gearbox}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Front</Text>
        <Text style={styles.text}>{item.front}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Rear</Text>
        <Text style={styles.text}>{item.rear}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Length</Text>
        <Text style={styles.text}>{item.length}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Width</Text>
        <Text style={styles.text}>{item.width}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Height</Text>
        <Text style={styles.text}>{item.height}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Front Track</Text>
        <Text style={styles.text}>{item.front_track}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Rear Track</Text>
        <Text style={styles.text}>{item.rear_track}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Wheelbase</Text>
        <Text style={styles.text}>{item.wheelbase}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Ground Clearance</Text>
        <Text style={styles.text}>{item.ground_clearance}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Cargo Volume</Text>
        <Text style={styles.text}>{item.cargo_volume}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Turning Circle</Text>
        <Text style={styles.text}>{item.turning_circle}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  item: {flexDirection: 'column', flex: 1, height: 60, marginTop: 2},
  title: {fontSize: 16, fontWeight: '500', color: 'white', margin: 3},
  text: {
    margin: 3,
    fontSize: 14,
    fontWeight: '400',
  },
});
export default DetailCompare;
