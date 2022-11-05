import { StyleSheet, Text, View, TextInput,  ImageBackground, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import Btn from '../Components/Btn'

const Signup = ({ navigation }) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [passwd, setPasswd] = useState('')
    const [passwd2, setPasswd2] = useState('')

  return (
    <View >
        <ImageBackground source={require('../Components/background.jpg')} style={styles.container}>
            <View style={styles.upperView}> 
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginTxt}>LOG IN</Text>
                </TouchableOpacity>

                    <Text style={styles.loginTxt}>|</Text>
                    <Text style={styles.loginTxt}>SIGN UP</Text>
            </View>

            <View style={styles.lowerView}>

                <View style={styles.inputsView}>
                    <TextInput placeholder='Username' value={username} onChangeText={setUsername} style={styles.textInputs} />
                    <TextInput placeholder='Email' value={email} onChangeText={setEmail} style={styles.textInputs}/>
                    <TextInput placeholder='Password' value={passwd} onChangeText={setPasswd} style={styles.textInputs} secureTextEntry/>
                    <TextInput placeholder='Confirm password' value={passwd2} onChangeText={setPasswd2} style={styles.textInputs} secureTextEntry/>
                </View>

                <Btn value={'Signup'} />

            </View>

        </ImageBackground>
    </View>
  )
}

export default Signup

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
        color: 'white',

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