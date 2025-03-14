import { BaseToast } from 'react-native-toast-message';

export const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: 'green',
        backgroundColor: '#d1fae5'
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 16,
        fontWeight: '600',
        color: '#065f46'
      }}
      text2Style={{
        fontSize: 14,
        color: '#047857'
      }}
    />
  ),
  error: (props: any) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: 'red',
        backgroundColor: '#fee2e2'
      }}
      text1Style={{
        fontSize: 16,
        fontWeight: '600',
        color: '#991b1b'
      }}
      text2Style={{
        fontSize: 14,
        color: '#dc2626'
      }}
    />
  ),
  info: (props: any) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: '#3b82f6',
        backgroundColor: '#dbeafe'
      }}
      text1Style={{
        fontSize: 16,
        fontWeight: '600',
        color: '#1e40af'
      }}
      text2Style={{
        fontSize: 14,
        color: '#1e3a8a'
      }}
    />
  )
}
