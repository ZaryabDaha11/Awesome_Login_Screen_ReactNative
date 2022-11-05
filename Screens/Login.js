import { StyleSheet, Text, View, TextInput, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Btn from '../Components/Btn'

const Login = ({ navigation }) => {

    const [username, setUsername] = useState('')
    const [passwd, setPasswd] = useState('')

  return (
    <KeyboardAvoidingView style={styles.container}>
        <ImageBackground source={require('../Components/background.jpg')} style={styles.container}>
            <View style={styles.upperView}> 
                <Text style={styles.loginTxt}>LOG IN</Text>
                <Text style={styles.loginTxt}>|</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.loginTxt}>SIGN UP</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.lowerView}>
                <View style={styles.inputsView}>
                    <TextInput placeholder='Username' value={username} onChangeText={setUsername} style={styles.textInputs} />
                    <TextInput placeholder='Password' value={passwd} onChangeText={setPasswd} style={styles.textInputs} secureTextEntry/>
                </View>

                <Btn value={'Login'} />

            </View>
        </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d9d9d9',
        width: '100%',
        height: '100%',
        
    },

    upperView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 100,

    },
    loginTxt: {
        margin: 30,
        fontSize: 16,
        color:'white'

    },

    lowerView: {
        margin: 30,
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 30,

    },
    inputsView: {
        marginBottom: 50,

    },
    textInputs: {
        fontSize: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 15,
    }

})