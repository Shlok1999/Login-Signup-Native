/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
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

import { useForm, Controller } from 'react-hook-form';





export default function Signup() {
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm();

    //  const [Email, setEmail] = useState('')
    //  const [Password, setPassword] = useState('')
    //  const [fullName, setFullName] = useState('')
    //  const [add, setAdd] = useState('')
    //  const [mobile, setMobile] = useState('')


    const onPress = (data) => {
        console.log(data)


    }

    const navigateToLogin = () => {
        console.log("Navigated to Login")
        navigation.navigate("login")

    }

    return (
        <>
            <ImageBackground source={BckImg} style={{ height: "100%", display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: "flex", alignItems: "center" }}>
                    <Image style={{ width: "130%", position: "absolute", transform: [{ scale: 0.5 }] }} source={Logo} />
                </View>

                {/* Input Field For Signup */}
                <View style={{ top: "30%", padding: 30, marginBottom: 20 }}>
                    {/* Using Email */}
                    <Controller
                        control={control}
                        rules={{ required: true, minLength: 5 }}
                        name="email"
                        render={({ field: { value, onChange, onBlur, rules }, fieldState: {error} }) => {
                            return (
                                <TextInput
                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    rules={{ required: true }}
                                    placeholder={'Enter EmailID'}
                                    style={styles.inputEmail, {borderColor: error?'red':'white', borderWidth: 1, backgroundColor: '#ffffff', marginTop: 2}} />
                            )

                        }}
                    />
                    <Controller
                        rules={{ required: true, minLength: 5 }}
                        control={control}
                        name="set password"
                        render={({ field: { value, onChange, onBlur, rules, secureTextEntry }, fieldState: {error} }) => {
                            return (
                                <TextInput
                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    secureTextEntry={true}
                                    rules={{ required: true }}
                                    placeholder={'set password'}
                                    style={styles.inputEmail, {borderColor: error?'red':'white', borderWidth: 1, backgroundColor: '#ffffff', marginTop: 2}} />
                                    
                            )

                        }}
                    />
                    <Controller
                        rules={{ required: true, minLength: 5 }}
                        control={control}
                        name="Full name"
                        render={({ field: { value, onChange, onBlur, rules }, fieldState:{error} }) => {
                            return (
                                <TextInput
                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    rules={{ required: true }}
                                    placeholder={'Full Name'}
                                    style={styles.inputEmail, {borderColor: error?'red':'white', borderWidth: 1, backgroundColor: '#ffffff', marginTop: 2}} />
                                    
                            )

                        }}
                    />
                    <Controller
                        rules={{ required: true, minLength: 5 }}
                        control={control}
                        name="address"
                        render={({ field: { value, onChange, onBlur, rules }, fieldState:{error} }) => {
                            return (
                                <TextInput
                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    rules={{ required: true }}
                                    placeholder={'Full Address'}
                                    style={styles.inputEmail, {borderColor: error?'red':'white', borderWidth: 1, backgroundColor: '#ffffff', marginTop: 2}} 
                                    />
                            )

                        }}
                    />
                    <Controller
                        rules={{ required: true, minLength: 5 }}
                        control={control}
                        name="phome"
                        render={({ field: { value, onChange, onBlur, rules }, fieldState: {error} }) => {
                            return (
                                <TextInput
                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    rules={{ required: true }}
                                    placeholder={'Mobile Number'}
                                    style={styles.inputEmail, {borderColor: error?'red':'white', borderWidth: 1, backgroundColor: '#ffffff', marginTop: 2}} 
                                    />
                            )

                        }}
                    />

                </View>
                <View style={{ backgroundColor: 'yellow', height: 44, margin: 30, top: 180, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={handleSubmit(onPress)}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>CREATE ACCOUNT</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: 'green', display: 'flex', position: 'absolute', width: "100%", bottom: 0, alignItems: 'center', height: 50, justifyContent: 'space-around' }}>
                    <Text style={{ color: 'white' }}>Already have an account
                        <TouchableOpacity onPress={navigateToLogin}>
                            <Text style={{ color: 'yellow' }}> Login</Text>
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
        height: 50,
        padding: 10,
        marginTop: 2,
        marginBottom: 3,
        backgroundColor: '#e8e8e8',
        top: "40%",
        fontSize: 12
    },


});
