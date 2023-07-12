import {View, TouchableOpacity} from 'react-native';
import {Icon} from '../Icon';

function GoBack(props) {
  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <View
      style={{
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 6,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        style={{transform: [{rotate: '180deg'}]}}
        onPress={goBack}>
        <Icon name="right" size={28} />
      </TouchableOpacity>
      <Icon name="logo" size={32} />
      <View style={{height: 28, width: 28}}></View>
    </View>
  );
}

export default GoBack;
