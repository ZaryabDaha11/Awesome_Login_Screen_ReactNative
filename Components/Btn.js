import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Btn = ( { value } ) => {
  return (
    <View style={styles.container}>
      <View style={styles.btnView}>
        <Text style={styles.btn}>{value}</Text>
      </View>
    </View>
  )
}

export default Btn

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnView: {
        backgroundColor: '#00b4d8',
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,

    },
    btn: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',

    },
})