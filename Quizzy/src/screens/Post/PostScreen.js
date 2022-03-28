import { View, Text, Button } from 'react-native'
import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'

import {addPost} from '../../redux/actions/PostActions'


const PostScreen = (props) => {

  // sends the data to firebase on UseEffect -- the data will be used from the form later
  const postData = {
    Question: "Did I just send data from UI?",
    Options: [true, false],
    Answer: true,
    Author: {
      id: "PVuAYpHE4FGD16s77p38" // this is a test,to simulate the reference of collection, we wrap the id inside an "author object"
    }
  }

    useEffect(() => {
        props.addPost(postData)
    }, [])

    if(props.post.loading){
      return (
        <View>
          <Text style={{fontFamily:'OpenSans-Regular'}}>Loading...</Text>
        </View>
      )
    }
    return (
        <View>
          <Text style={{fontFamily:'OpenSans-Regular'}}>Data Uploaded</Text>
        </View>
    )
}
const mapStateToProps = (state) => {
    return {
        post: state.post
      }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addPost,
    }, dispatch)
);
  
export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);