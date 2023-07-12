import {View, Image} from 'react-native';

function ProfileCard() {
  return (
    <View
      style={{
        position: 'relative',
        height: 200,
      }}>
      <Image
        style={{
          height: 120,
          marginHorizontal: 10,
          marginVertical: 10,
          resizeMode: 'cover',
          borderRadius: 10,
        }}
        source={{
          uri: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: 80,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <Image
          style={{
            position: 'absolute',
            bottom: 0,
            height: 120,
            width: 120,
            marginTop: 10,
            resizeMode: 'cover',
            borderRadius: 70,
            borderColor: 'black',
            borderWidth: 5,
          }}
          source={{
            uri: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
        />
      </View>
    </View>
  );
}
export default ProfileCard;
