import { View, Text, Button, StyleSheet, TextInput , TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'

import {addPost} from '../../redux/actions/PostActions' 
import {Picker} from '@react-native-picker/picker'
import { async } from '@firebase/util';
const PostScreen = (props) => {

  const [greet, setGreet] = useState("")
  const [question, setQuestion] = useState("")
  const [optionOne, setOptionOne] = useState("")
  const [optionTwo, setOptionTwo] = useState("")
  const [optionThree, setOptionThree] = useState("")
  const [optionFour, setOptionFour] = useState("")
  const [correctOption, setCorrectOption] = useState("")

  let today = new Date()
  let curHr = today.getHours()

  useEffect(()=> {
    if (curHr < 12) {
      setGreet("morning")
    } else if (curHr < 18) {
      setGreet("afternoon")
    } else {
      setGreet('evening')
    }
  }, [])

  const postQuestion = async ()=> {
    if(!question){
      alert('Please add a question!')
      return;
    }
    if(!optionOne && !optionTwo){
      alert('Please provide minimum 2 options!')
      return;
    }
    if(!correctOption){
      alert('Please select a valid correct option!')
      return;
    }

    const optionsArr = []
    
    
    optionOne && optionsArr.push(optionOne)
    optionTwo && optionsArr.push(optionTwo)
    optionThree && optionsArr.push(optionThree)
    optionFour && optionsArr.push(optionFour)
    const data = {
      Question: question,
      Options: optionsArr,
      Answer: correctOption,
      Author: props.auth.currentUser.id,
      AuthorName: props.auth.currentUser.name
    }
    console.log(data)
    await props.addPost(data)
    setQuestion("")
    setOptionOne("")
    setOptionTwo("")
    setOptionThree("")
    setOptionFour("")
  }

    
    return (
        <View style={styles.container}>
          {
            props.post.loading && (
            <View>
              <Text style={{fontFamily:'OpenSans-Regular'}}>Posting... Please wait</Text>
            </View>
            )
          }
          <View>
            <Text style={styles.greetText}>Good {greet}, {props.auth.currentUser.name}</Text>
            <Text style={styles.postText}>Post something here:</Text>
          </View>
          <View style={styles.postContainer}>
            <View style={styles.questionContainer}>

              <Text style={styles.postText}>Add a question:</Text>
              <TextInput
                style={styles.input}
                onChangeText={setQuestion}
                value={question}
                placeholder="Your Question"
                placeholderTextColor={'grey'}
                />
            </View>
            <View style= {styles.optionContainer}>
              <Text style={styles.postText}>Add options: (minimum 2)</Text>
              <View style={{flexDirection:"row", paddingTop:10}}>
                  <View style={{flex:1}}>
                      <TextInput 
                      onChangeText={setOptionOne}
                      value={optionOne}
                      placeholder="Option 1" 
                      style={styles.leftOptions}
                      placeholderTextColor={'grey'} />
                  </View>
                  <View style={{flex:1}}>
                      <TextInput 
                      onChangeText={setOptionTwo}
                      value={optionTwo}
                      placeholder="Option 2" 
                      style={styles.rightOptions}
                      placeholderTextColor={'grey'} />
                  </View>
              </View>
              <View style={{flexDirection:"row"}}>
                  <View style={{flex:1}}>
                      <TextInput 
                      onChangeText={setOptionThree}
                      value={optionThree}
                      placeholder="Option 3" 
                      style={styles.leftOptions}
                      placeholderTextColor={'grey'} />
                  </View>
                  <View style={{flex:1}}>
                      <TextInput 
                      onChangeText={setOptionFour}
                      value={optionFour}
                      placeholder="Option 4" 
                      style={styles.rightOptions}
                      placeholderTextColor={'grey'} />
                  </View>
              </View>
            </View>
            <View>
            <Text style={styles.postText}>Choose the correct option:</Text>
            <Picker
              selectedValue={correctOption}
              style={{ height: 50, width: 150, color: 'grey' }}
              onValueChange={(itemValue, itemIndex) => setCorrectOption(itemValue)}
            >
              <Picker.Item label="Option 1" value={optionOne} />
              <Picker.Item label="Option 2" value={optionTwo} />
              <Picker.Item label="Option 3" value={optionThree} />
              <Picker.Item label="Option 4" value={optionFour} />
            </Picker>
            </View>
          </View>
          <View>
          <TouchableOpacity
              style={styles.button}
              onPress={postQuestion}
            >
              <Text style={styles.postButtonText}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
}
const mapStateToProps = (state) => {
    return {
        post: state.post,
        auth: state.auth
      }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addPost,
    }, dispatch)
);
  
export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  greetText: {
    fontSize: 22,
    color: '#333',
    fontFamily:'OpenSans-Regular'
  },
  postText: {
    fontSize: 18,
    marginTop: 20,
    fontFamily:'OpenSans-Regular',
    color: '#333',
  },
  postContainer: {
    marginTop:2
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: '#333',
    fontFamily:'OpenSans-Regular'
  },
  leftOptions: {
    justifyContent: 'flex-start',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: '#333',
    fontFamily:'OpenSans-Regular'
  },
  rightOptions:{
    justifyContent: 'flex-end',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: '#333',
    fontFamily:'OpenSans-Regular'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#5350d2",
    padding: 10,
    marginTop:20,
    borderRadius:12
  },
  postButtonText:{
    color:'#fff',
    fontFamily:'OpenSans-Regular'
  }
})