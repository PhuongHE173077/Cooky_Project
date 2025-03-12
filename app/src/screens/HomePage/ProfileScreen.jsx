import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialIcons as Icon } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { logoutUserAPI } from '../../redux/user/userSlice';

export const ProfileScreen = ({ navigation }) => {

  const dispath = useDispatch()
  const handleLogout = () => {
    dispath(logoutUserAPI())
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={{ color: 'white' }}>Account</Text>
        <Icon name="stars" size={24} color="#000" />
      </View>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dl3ucqngx/image/upload/v1737726636/users/lhmjydx5zmh0msohikr8.jpg',
          }}
          style={styles.avatar}
        />
        <Text style={styles.username}>Qp 0852 Do Dang Phuong</Text>
      </View>

      <ScrollView horizontal={true} style={styles.couponContainer} showsHorizontalScrollIndicator={false}>
        <View style={styles.coupon}>
          <Text style={styles.couponText}>20K</Text>
          <Text>Miễn phí ship</Text>
        </View>
        <View style={styles.coupon}>
          <Text style={styles.couponText}>30K</Text>
          <Text>Giảm giá đơn hàng</Text>
        </View>

        <View style={styles.coupon}>
          <Text style={styles.couponText}>30K</Text>
          <Text>Giảm giá đơn hàng</Text>
        </View>

        <View style={styles.coupon}>
          <Text style={styles.couponText}>30K</Text>
          <Text>Giảm giá đơn hàng</Text>
        </View>

        <View style={styles.coupon}>
          <Text style={styles.couponText}>30K</Text>
          <Text>Giảm giá đơn hàng</Text>
        </View>

        <View style={styles.coupon}>
          <Text style={styles.couponText}>30K</Text>
          <Text>Giảm giá đơn hàng</Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.menuItem}>
        <Icon name="stars" size={24} color="#000" />
        <Text style={styles.menuText}>Cooky Coins</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Icon name="payment" size={24} color="#000" />
        <Text style={styles.menuText}>Thanh toán</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Icon name="location-on" size={24} color="#000" />
        <Text style={styles.menuText}>Địa chỉ</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Icon name="favorite" size={24} color="green" />
        <Text style={styles.menuText}>Đã lưu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.setting}>
        <Icon name="description" size={24} />
        <Text style={styles.menuText}>Introduction to Cooky</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="settings-outline" size={24} color="#000" />
        <Text style={styles.menuText}>Setting</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => handleLogout()} >
        <Ionicons name="settings-outline" size={24} color="#000" />
        <Text style={styles.menuText}>Log out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'red',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: { flex: 1, backgroundColor: '#dfe6e9' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 20 },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  username: { fontSize: 18, fontWeight: 'bold' },
  couponContainer: { padding: 10 },
  coupon: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  couponText: { fontSize: 18, fontWeight: 'bold', color: '#007AFF' },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  menuText: { marginLeft: 10, fontSize: 16 },
  setting: { flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: '#fff', marginTop: 20, borderBottomColor: '#eee', },
});
