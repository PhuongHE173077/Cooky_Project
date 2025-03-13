import { View, Text, Modal, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/src/services/Colors'

export default function LoadingDialog({ visible = false, text = 'Loading...' }: { visible?: boolean, text?: string }) {
  return (
    <Modal transparent visible={visible}>
      <View style={styles.overLay}>
        <View style={{
          padding: 20,
          borderRadius: 15,
          backgroundColor: Colors.PRIMARY,
          alignItems: 'center',

        }}>
          <ActivityIndicator size={'large'}
            color={Colors.WHITE}
          />
          <Text style={styles.text}>{text}</Text>
        </View>

      </View>

    </Modal>
  )
}

const styles = StyleSheet.create({
  overLay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000070'
  },
  text: {
    marginTop: 10,
    color: Colors.WHITE,
    fontFamily: 'outfit-bold',
    fontSize: 16
  }
})