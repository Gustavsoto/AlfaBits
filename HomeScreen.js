import * as React from 'react';
import { Component } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Styles from './styles';


export default function HomeScreen({ navigation }) {
  return (
    <View
      style={Styles.home}>
      <View style={Styles.cont}>
        <Text style={{ fontSize: 18, marginBottom:20}}>AlfaBits</Text>
        <Image style={{width:200,height:200}}
        source={require('./assets/images/alfabits.png')}
        />
        <View style={{flex: 1,justifyContent: 'center'}}>
        <Text style={{ fontSize: 18, justifyContent: 'center'}}>Alfabēta spēle:</Text>
        <Text> </Text>
        <Button
         title="Spēle"
          onPress={() => navigation.navigate('Game')}
        />
        </View>
      </View>
    </View>
  );
}
