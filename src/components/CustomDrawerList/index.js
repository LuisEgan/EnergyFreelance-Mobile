import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import screens from '../../constants/screens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 15,
    height: 44,
  },
});

const CustomDrawerList = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text
          style={{
            left: 30,
            top: 0,
          }}>
          {screens.main.MyProfile}
        </Text>
      </TouchableOpacity>
      <FlatList
        style={{
          left: 30,
          top: 50,
        }}
        data={[
          { key: 'Open Projects' },
          { key: 'Applications' },
          { key: 'Current Projects' },
          { key: 'Drafts' },
          { key: 'Past Projects' },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default CustomDrawerList;
