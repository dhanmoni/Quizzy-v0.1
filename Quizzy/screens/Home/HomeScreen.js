import { View, Text, Button } from 'react-native'
import React, {useEffect} from 'react'

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {getPosts} from '../../redux/actions/PostActions'

const HomeScreen = (props) => {

    useEffect(()=> {
        console.log('getting post')
    }, [])
    return (
        <View>
        
        <Text style={{fontFamily:'OpenSans-Regular'}}>{props.post.text}</Text>
        <Button onPress={()=> props.getPosts()}  title="Get post"/>
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
        getPosts,
    }, dispatch)
);
  
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);