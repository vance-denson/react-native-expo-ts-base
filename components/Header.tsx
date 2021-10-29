import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { t } from 'react-native-tailwindcss';

interface HeaderProps {}

const textStyleHeader: any[] = [
  t.textWhite,
  t.alignCenter,
  t.trackingWide,
  t.fontBold,
  t.text2xl,
];

const textStyleSubHeader: any[] = [
  t.alignCenter,
  t.trackingWide,
  t.fontBold,
  t.textLg,
  t.textGray500,
];

const Header: React.FC = (props: HeaderProps) => {
  return (
    <>
      <View
        style={[
          t.mT12,
          t.bgBlack,
          t.h20,
          t.flex,
          t.itemsCenter,
          t.justifyCenter,
          t.shadowMd,
        ]}
      >
        <Text style={textStyleHeader}>Hold On...</Text>
        <Text style={textStyleSubHeader}>Test Test Test Tailwind</Text>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  textStyle: {},
});
