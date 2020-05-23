import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class Main extends React.Component{
  render(){
    return(
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Note</Text>
          </View>

          <ScrollView style={styles.ScrollView}>

          </ScrollView>

          <View style={styles.footer}>
               <TextInput
                style={styles.TextInput}
                placeholder='> note'
                placeholderTextColor='white'
                underlineColorAndroid='transparent'
               >
               </TextInput>
          </View>

          <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  header:{
    backgroundColor: '#E91E63',
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:10,
    borderBottomColor:'#ddd'
  },
  headerText:{
    color:'white',
    fontSize:18,
    padding:20
  },
  ScrollView:{
    flex:1,
    marginBottom:100
  },
  footer:{
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    zIndex:10
  },
  TextInput:{
    alignSelf: 'stretch',
    color:'#fff',
    padding:20,
    backgroundColor:'#252525',
    borderTopWidth:2,
    borderTopColor:'#ededed'
  },
  addButton:{
    position:'absolute',
    zIndex:10,
    right:10,
    bottom:40,
    backgroundColor:'#E91E63',
    width:80,
    height:80,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    elevation: 8
  },
  addButtonText:{
    color:'#fff',
    fontSize:24
  }
});
