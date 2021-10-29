import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { t } from 'react-native-tailwindcss';

interface ToDoProps {}

const ToDoItemStyle = [t.flex, t.flexRow];
const ToDoListStyle = [t.flex, t.flexCol, t.justifyEvenly, t.hFull];
const ButtonStyle = [t.w127, t.h127];

const ToDo = (props: ToDoProps) => {
  return (
    <View style={[styles.container, t.bgGray100, t.wFull, t.itemsCenter]}>
      <Text style={[t.text3xl, t.textGray900, t.mAuto]}>ToDo List Fun</Text>

      <View style={ToDoListStyle}>
        <View style={[ToDoItemStyle, ButtonStyle]}>
          <TextInput />
          <Button
            title={`Add to List`}
            testID="button1"
            accessibilityLabel="Add to List"
          />
        </View>
        <View style={ToDoItemStyle}>
          <TextInput />
          <Button title={`Add to List`} />
        </View>
        <View style={ToDoItemStyle}>
          <TextInput />
          <Button title={`Add to List`} />
        </View>
      </View>
    </View>
  );
};

export default ToDo;

const styles = StyleSheet.create({
  container: {
    height: '80%',
  },
});
