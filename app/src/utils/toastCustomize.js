import { BaseToast, ErrorToast } from 'react-native-toast-message';

export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'green', backgroundColor: '#28a745' }} // Màu full success
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
      }}
      text2Style={{
        fontSize: 14,
        color: '#fff',
      }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: 'red', backgroundColor: '#dc3545' }} // Màu full error
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
      }}
      text2Style={{
        fontSize: 14,
        color: '#fff',
      }}
    />
  ),

  info: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'blue', backgroundColor: '#007bff' }} // Màu full info
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
      }}
      text2Style={{
        fontSize: 14,
        color: '#fff',
      }}
    />
  ),
};