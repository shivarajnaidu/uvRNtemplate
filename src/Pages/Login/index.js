import React from 'react';

import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';

const Login = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>Login</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Login;
