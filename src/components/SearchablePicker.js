import React from 'react';
import { TextInput, View, StyleSheet, FlatList, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class SearchablePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }

  render() {
    return (
      <View>
        <View style={styles.searchContainer}>
          <MaterialCommunityIcons
            name="magnify" 
            style={styles.searchIcon}
            size={24}
          />
          <TextInput
            placeholder={this.props.placeholder} 
            style={styles.input}
            value={this.state.searchValue}
            onChangeText={text => this.setState({ searchValue: text })}
          />
        </View>
        <FlatList
          data={this.props.data.filter(item => item.label.toLowerCase().includes(this.state.searchValue.toLowerCase()))} 
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text>{item.label}</Text>
              <Text>{item.value}</Text>
            </View>
          )} 
          keyExtractor={item => item.label+item.value}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

export default SearchablePicker;

const styles = StyleSheet.create({
  input: {
    
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e4e5e9',
    marginVertical: 10,
    borderRadius: 5
  },
  searchIcon: {
    paddingHorizontal: 10
  }
});