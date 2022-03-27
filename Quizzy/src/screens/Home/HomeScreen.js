import { View, Text, Button } from 'react-native'
import React from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {getPosts} from '../../redux/actions/PostActions'

const HomeScreen = (props) => {

    
    return (
        <View>
        
        <Text style={{fontFamily:'OpenSans-Regular'}}>{props.post.text}</Text>
        <Button title="Get post"/>
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