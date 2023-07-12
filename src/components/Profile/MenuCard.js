import {View, Text, FlatList} from 'react-native';
import {Icon} from '../../Icon';

function MenuCard() {
  const menu = [
    {id: 0, title: 'Favorites', title_icon: 'heart', right: true},
    {id: 1, title: 'Account', title_icon: 'account', right: true},
    {
      id: 2,
      title: 'Languages',
      title_icon: 'lang',
      right: true,
      lang: 'English',
    },
    {id: 3, title: 'About', title_icon: 'about', right: true},
    {id: 4, title: 'Help', title_icon: 'help', right: true},
    {id: 5, title: 'Logout', title_icon: 'logout', right: false},
  ];
  return (
    <View
      style={{
        backgroundColor: '#171717',
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 12,
        paddingHorizontal: 10,
      }}>
      <FlatList
        data={menu}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name={item.title_icon} size={28} />
              <Text style={{marginLeft: 10, fontSize: 16, fontWeight: '400'}}>
                {item.title}
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 14, color: 'grey'}}>{item.lang}</Text>
              {item.right === true ? <Icon name="right" size={28} /> : null}
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
export default MenuCard;
