import React, { useState } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { COLORS } from '../../common';

export const Ingredient = ({ name, amount, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.amount}>{amount} tsp</Text>
      </View>
      { onDelete && 
      <TouchableOpacity onPress={onDelete}>
        <MaterialIcon name="close" size={16} />
      </TouchableOpacity>}
      {/* <TouchableOpacity onPress={onDelete}>
        <MaterialIcon name="close" size={16} />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    borderRadius: 15,
    padding: 16,
    backgroundColor: COLORS.darkGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {},
  name: {
    fontSize: 16,
    fontWeight: '700',
  },
  amount: {
    fontSize: 13,
  },
});
