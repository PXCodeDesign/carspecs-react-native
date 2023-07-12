import {View, SafeAreaView, ScrollView, Text} from 'react-native';
import BottomBar from '../components/BottomBar';
import LogoTitle from '../components/LogoTitle';
import ProfileCard from '../components/Profile/ProfileCard';
import MenuCard from '../components/Profile/MenuCard';

function ProfilePage({navigation}) {
  return (
    <SafeAreaView
      style={{
        height: '100%',
        backgroundColor: 'black',
      }}>
      <View
        style={{
          height: '100%',
        }}>
        <LogoTitle />
        <ScrollView accessibilityElementsHidden={true}>
          <ProfileCard />
          <View
            style={{
              backgroundColor: '#171717',
              flexDirection: 'column',
              marginHorizontal: 10,
              borderRadius: 12,
              padding: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                color: 'white',
              }}>
              Pyrexia
            </Text>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 8,
                fontSize: 15,
                color: 'grey',
              }}>
              Frontend Developer
            </Text>
          </View>
          <MenuCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
export default ProfilePage;
