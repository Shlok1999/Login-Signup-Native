/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import Fb from '../images/fb-icon.png'
import Google from '../images/gplus-icon.png'
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TextInputComponent,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';

import BckImg from '../images/bg.jpg'
import Logo from '../images/logo.png'
import { useNavigation } from "@react-navigation/native";

import { useForm, Controller } from 'react-hook-form';

export default function Login() {


    const { control, handleSubmit, formState: {errors} } = useForm();

    // const [Email, setEmail] = useState('')
    // const [Password, setPassword] = useState('')

    const navigation = useNavigation();



    const onPress = (data) => {
        console.log(data)
        navigation.navigate("home")
    }

    return (
        <>
            <ImageBackground source={BckImg} style={{ height: "100%", display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: "flex", alignItems: "center", marginTop: -20 }}>
                    <Image style={{ width: "130%", position: "absolute", transform: [{ scale: 0.5 }] }} source={Logo} />
                </View>

                <View style={{position: 'absolute',backgroundColor: '#3b5998', top: 200, width: "100%", height: 60, display: 'flex', alignItems: 'center'}}>
                    <Image style={{transform:[{scale: 0.4}], marginTop: -10}} source={Fb}/>
                </View>
                <View style={{backgroundColor: '#DD4B39', width: "100%", position: 'absolute', top: 280,height: 60, display: 'flex', alignItems: 'center'}}>
                <Image style={{transform:[{scale: 0.4}], marginTop: -10}} source={Google}/>
                </View>
                <Text style={{color: 'green', textAlign: 'center', 
                fontWeight: 'bold', fontSize: 14, top: 370}}> 
                Or You can sign in Using </Text>


               

                {/* Input Field For Signup */}
                <View style={{ top: "40%", padding: 30, marginBottom: 20 }}>
                    {/* Using Email */}

                    <Controller
                        control={control}
                        rules={{required: true, minLength: 5}}
                        name="email"
                        render={({ field: { value, onChange, onBlur, rules }, fieldState:{error} }) => {
                            return (
                                <>
                                <TextInput
                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    rules={{required: true}}
                                    placeholder={'Enter EmailID'}
                                    style={{borderColor: error?'red':'white', marginTop: 70, backgroundColor: 'white', borderWidth: 1, height: 40}} />
                                    <Text style={{color: 'red', alignSelf: 'stretch'}}>{error? 'Error' : ''}</Text></>

                            )

                        }}
                    />
                    <Controller
                        control={control}
                        rules={{required: true, minLength: 5}}

                        name="password"
                        render={({ field: { value, onChange,rules, onBlur, secureTextEntry }, fieldState:{error} }) => {
                            return (
                                <>
                                <TextInput

                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    secureTextEntry={true}
                                    placeholder={'Enter Password'}
                                    rules={{required: true}}
                                    style={{borderColor: error?'red':'white', marginTop: 6, backgroundColor: 'white', borderWidth: 1, height: 40}} />
                                    <Text style={{color: 'red', alignSelf: 'stretch'}}>{error?'Error': ''}</Text>
                                    </>
                            )

                        }}
                    />

              


                </View>

               


                <View style={{ backgroundColor: 'yellow', height: 44, margin: 30, top: 210, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={handleSubmit(onPress)}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>LOGIN</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: 'green', display: 'flex', position: 'absolute', width: "100%", bottom: 0, alignItems: 'center', height: 50, justifyContent: 'space-around' }}>
                    <Text style={{ color: 'white' }}>Already have an account
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("signup")
                        }}>
                            <Text style={{ color: 'yellow' }}> Signup</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </ImageBackground>


        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#ffffff',
    },
    inputEmail: {
        borderRadius: 5,
        width: "100%",
        height: 40,
        padding: 10,
        marginBottom: 0,
        backgroundColor: '#e8e8e8',
        top: "50%",
        fontSize: 12
    },


});
