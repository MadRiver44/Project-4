import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';


class Header extends Component {
  render() {
    return (
        <View style={styles.header}>
          <TouchableOpacity onPress={this.props.onToggleAllComplete}>
            <Text style={styles.toggleIcon}>{String.fromCharCode(10003)} </Text>
          </TouchableOpacity>

          <TextInput style={styles.input}
          value={this.props.value}
          onChangeText={this.props.onChange}
          onSubmitEditing={this.props.onAddItem}
          placeholder="What's left to do?"
          blurOnSubmit={false}
          returnKeyType='done'
          />


        </View>
      )
  }
}


const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 50,
    marginLeft: 16
  },
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
    toggleIcon: {
    fontSize: 30,
    color: '#CCC'
  }

})


export default Header;
