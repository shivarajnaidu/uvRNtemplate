import React from 'react';

import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';

const Signup = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text
              onPress={() => {
                navigation.navigate('Login');
              }}>
              Signup
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Signup;
