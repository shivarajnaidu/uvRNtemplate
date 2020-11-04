import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ImageBackground,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Item, Label, Input, Icon, CheckBox, ListItem } from 'native-base';

import { Fonts, FontSize, Images, Layout, Colors, Gutters } from '../../Theme';

import styles from './SignupStyle';
import { RoundedCornerButton } from '../../Components/RoundedCornerButton';
import RBSheet from 'react-native-raw-bottom-sheet';

const Signup = ({ navigation }) => {
  const [acceptTerms, setAcceptTerms] = useState(false);

  const isValidMobile = true;
  let BottomSheetRef;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {/* Logo */}
          <View style={[styles.logoContainer, Gutters.pt10]}>
            <Image source={Images.logo} style={[styles.logo, Gutters.mt30]} />
          </View>

          {/* Card */}

          <View style={styles.card}>
            <View style={Gutters.mt15}>
              <Item floatingLabel>
                <Label style={[FontSize.regular]}>Enter Name</Label>
                <Input />
              </Item>
            </View>
            <View style={Gutters.mt15}>
              <Item floatingLabel>
                <Label style={[FontSize.regular]}>Enter Mobile No</Label>
                <Input keyboardType="phone-pad" />
                {isValidMobile ? (
                  <Icon
                    name="checkmark-circle"
                    style={{ color: Colors.teal }}
                  />
                ) : (
                  <></>
                )}
              </Item>
            </View>
            <View style={Gutters.mt15}>
              <Item floatingLabel>
                <Label style={[FontSize.regular]}>Enter Email ID.</Label>
                <Input keyboardType="email-address" />
              </Item>
              <Text style={[FontSize.small]}>
                Incorrect ID? Kindly raise request{' '}
                <Text style={[Fonts.textUnderline, Fonts.textPrimary]}>
                  HERE
                </Text>
              </Text>
              {/* <Image source={Images.auth.greenCheck} /> */}
            </View>
            <View style={Gutters.mt15}>
              <Item floatingLabel>
                <Label style={[FontSize.regular]}>Alternate Mobile No.</Label>
                <Input keyboardType="phone-pad" />
              </Item>
              {/* <Image source={Images.auth.greenCheck} /> */}
            </View>
            <View
              style={[Layout.row, Layout.justifyContentCenter, Gutters.mt30]}>
              <View>
                <RoundedCornerButton
                  title="Signup"
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{ paddingHorizontal: 35, paddingVertical: 11 }}
                  onPress={() => {
                    console.log('Navigating to Login Page');
                    navigation.navigate('Login');
                  }}
                />
              </View>
            </View>
          </View>

          {/* Acccept Conditions */}

          <ListItem
            itemDivider={true}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: Colors.transparent,
              // marginBottom: -20,
            }}>
            <CheckBox
              checked={acceptTerms}
              color={Colors.primary}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{ borderRadius: 3 }}
              onPress={() => {
                setAcceptTerms(!acceptTerms);
              }}
            />

            <View style={styles.termsAndConditionTextContainer}>
              <Text style={styles.termsAndConditionText}>
                {' '}
                Agree to our{' '}
                <Text
                  onPress={() => BottomSheetRef.open()}
                  style={{
                    ...styles.termsAndConditionText,
                    ...styles.termsAndConditionTextPrimary,
                  }}>
                  Terms and conditions
                </Text>
              </Text>
            </View>
          </ListItem>

          <RBSheet
            ref={(ref) => {
              BottomSheetRef = ref;
            }}
            closeOnDragDown
            height={450}
            customStyles={{
              container: {
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              },
            }}>
            <ScrollView>
              <TouchableOpacity activeOpacity={1} style={[Gutters.p15]}>
                <Text style={[Fonts.textSecondary, { lineHeight: 30 }]}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <View
                  style={[Layout.row, Layout.justifySpaceAround, Gutters.pv15]}>
                  <View style={[Layout.row]}>
                    <RoundedCornerButton
                      title={'Accept'}
                      textStyle={Gutters.ph5}
                      onPress={() => {
                        BottomSheetRef.close();
                      }}
                    />
                  </View>
                  <View style={[Layout.row, Gutters.ml5]}>
                    <RoundedCornerButton
                      title={'Reject'}
                      color={Colors.emtelGrey}
                      textStyle={{
                        ...Gutters.ph5,
                        color: Colors.white,
                      }}
                      onPress={() => {
                        BottomSheetRef.close();
                      }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </RBSheet>
        </ScrollView>

        <ImageBackground source={Images.loginBg} style={styles.bgImage} />
      </SafeAreaView>
    </>
  );
};

export default Signup;
