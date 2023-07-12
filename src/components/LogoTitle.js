import {View} from 'react-native';
import {Icon} from '../Icon';

function LogoTitle() {
  return (
    <View
      style={{
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon name="logo" size={32} />
    </View>
  );
}
export default LogoTitle;
