import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ListView,
  Keyboard,
  Linear
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from './header';
import Footer from './footer';
import Row from './row';

const filterItems = (filter, items) => {
  return items.filter((item) => {
    if(filter === 'ALL') return true;
    if(filter === 'COMPLETE') return item.complete;
    if(filter === 'ACTIVE') return !item.complete;
  })
}

class App extends Component {
  constructor(props){
  super(props);
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 }) // datasource for ListView item that helps it render efficiently
      this.state = {
      allComplete: false, // track current completion status
      filter: 'ALL',
      loading: true,
      value: '',
      items: [],
      dataSource: ds.cloneWithRows([])
    }

 this.handleAddItem = this.handleAddItem.bind(this)
 this.handleToggleAllComplete = this.handleToggleAllComplete.bind(this)
 this.setSource = this.setSource.bind(this)
 this.handleToggleComplete = this.handleToggleComplete.bind(this)
 this.handleRemoveItem = this.handleRemoveItem.bind(this)
 this.handleFilter = this.handleFilter.bind(this)
 this.handleClearComplete = this.handleClearComplete.bind(this)
 this.handleToggleEditing = this.handleToggleEditing.bind(this)
 this.handleUpdateText = this.handleUpdateText.bind(this)
}

/*
destructuring and terseness of code (such as if statement without {} )
is a very common pattern I've seen in React Native development
 */

// helper func,
setSource(items, itemsDatasource, otherState = {}) {
  this.setState({
    items,
    dataSource: this.state.dataSource.cloneWithRows(itemsDatasource), // allows us to keep track of diff items that are rendered on the screen
    ...otherState
  })
  //AsyncStorage.setItem('items', JSON.stringify(items));
}

handleUpdateText(key, text){
    const newItems = this.state.items.map((item) => {
    if(item.key !== key) return item;
    return {
      ...item,
      text
    }
  })
  this.setSource(newItems, filterItems(this.state.filter, newItems));
}



handleToggleEditing(key, editing) {
  const newItems = this.state.items.map((item) => {
    if(item.key !== key) return item;
    return {
      ...item,
      editing
    }
  })
  this.setSource(newItems, filterItems(this.state.filter, newItems))

}


handleClearComplete() {
  const newItems = filterItems('ACTIVE', this.state.items);
  this.setSource(newItems, filterItems(this.state.filter, newItems))
}

handleFilter(filter) {
  this.setSource(this.state.items, filterItems(filter, this.state.items), { filter })
}


handleRemoveItem(key) {
  const newItems = this.state.items.filter((item) => {
    return item.key !== key
  })
  this.setSource(newItems, filterItems(this.state.filter, newItems));
}


handleToggleComplete(key, complete) {
  const newItems = this.state.items.map((item) => {
    if(item.key !== key) return item;
    return {
      ...item,
      complete
    }
  })
  this.setSource(newItems, filterItems(this.state.filter, newItems));
}


handleToggleAllComplete() {
  const complete = !this.state.allComplete;
  const newItems = this.state.items.map((item) => ({
    ...item, complete // set completion status that we toggeled over all of them
  }))
  console.table(newItems);
  //this.setState({ items: newItems, allComplete: complete })
  this.setSource( newItems, filterItems(this.state.filter, newItems), { allComplete: complete })
}

handleAddItem(){
  if (!this.state.value) return; // so we wont add empty text to array
    const newItems = [
    ...this.state.items, //spread new items into array
    {
      key: Date.now(),
      text: this.state.value,
      complete: false
      }
    ]
    //this.setState({ items: newItems, value: '' })
    this.setSource(newItems, filterItems(this.state.filter, newItems), { value : '' })
  }


  render() {
    return (
        <View style={styles.container}>
          <Header
            value={this.state.value}
            onAddItem={this.handleAddItem}
            onChange={(value) => this.setState({ value })}
            onToggleAllComplete={this.handleToggleAllComplete}

            />
          <View style={styles.content}>
            <ListView
              style={styles.list}
              enableEmptySections
              dataSource={this.state.dataSource}
              onScroll={() => Keyboard.dismiss()}
              renderRow={({ key, ...value }) => {
                return (
                  <Row
                  key={key}
                  onUpdate={(text) => this.handleUpdateText(key, text)}
                  onToggleEdit={(editing) => this.handleToggleEditing(key, editing)}
                  onRemove={() => this.handleRemoveItem(key)}
                  onComplete={(complete) => this.handleToggleComplete(key, complete)}
                    {...value}
                  />
                )
              }}
          renderSeperator={(sectionId, rowId) => {
            return <View key={rowId} style={styles.seperator}/>
          }}
          />
          </View>
            <Footer
              filter={this.state.filter}
               onFilter= {this.handleFilter}
               count={filterItems('ACTIVE', this.state.items).length}
              onClearComplete={this.handleClearComplete}
              />
        </View>
      )
  }
}
/*
we define a var and set it equal to a StyleSheet component objectusing the create method.
This validates our css in React Native. Fromm here we pass the object.defined style to the
React component
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    ...Platform.select({ // platforms we only want to target
      ios: { paddingTop: 30 }
    })
  },
  content: {
    flex: 1
  },
  list:{
    backgroundColor:'#FFF'
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#F5F5F5'
  },


})

export default App
