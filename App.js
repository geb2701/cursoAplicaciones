import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TextInput, View, Text, FlatList, Modal, Pressable, TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])
  const [itemSelect, setItemSelect] = useState({})
  const [modalVisibility, setModalVisibility] = useState(false)

  const elementList = ({item}) =>{
    return(
      <View style={styles.itemStyle}>
        <TouchableOpacity onPress={()=>ItemSelect(item.id)}>
          <Text>{item.value}</Text>
        </TouchableOpacity>
      </View>
    )
  };

  const ItemChange = (t) =>{
    setTextItem(t)
  };

  const ItemSelect = (id) =>{
    setItemSelect(itemList.filter(item=>item.id===id)[0])
    setModalVisibility(true)
  };

  const DeleteItem = () =>{
    setItemList((currentState) => currentState.filter((item) => item.id !==itemSelect.id));
    setItemSelect({})
    setModalVisibility(false)
  };

  const AddItem = () =>{
    if (textItem!="" && textItem!=null){
      setItemList(currentItems => [
        ...currentItems,
        {
          id: Math.random().toString(),
          value: textItem,
        }
      ])
      setTextItem("")
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upBar}>
        <TextInput placeholder='Add Item' style={styles.inputText} value={textItem} onChangeText={ItemChange}/>
        <TouchableOpacity style={styles.addBtn} onPress={AddItem}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={itemList}
          renderItem={elementList}
          keyExtractor={(item)=>item.id}
        />
      </View>
      <Modal animationType='slide' transparent={true} visible={modalVisibility} onRequestClose={()=>{setModalVisibility(!modalVisibility)}}>
        <View style={styles.centerView}>
          <View style={{backgroundColor: 'white'}}>
            <Text>Delete the Element???</Text>
            <TouchableOpacity style={styles.addBtn} onPress={()=>DeleteItem()}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    marginTop: 50,
  },
  upBar:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  inputText:{
    borderColor:'#C1C1C1',
    borderWidth:1,
    width: 200,
    padding: 5,
    margin: 10,
  },
  addBtn:{
    backgroundColor:'yellow',
    padding:10,
    borderRadius:10
  },
  itemStyle:{
    margin: 6,
    color: 'blue',
  },
  centerView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
  }
});