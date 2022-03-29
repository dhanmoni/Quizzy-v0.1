import { View, Text, Button } from 'react-native'
import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'

import {getPosts} from '../../redux/actions/PostActions'
import {loginUser, registerUser, logoutUser} from '../../redux/actions/AuthActions'


const HomeScreen = (props) => {

    useEffect(() => {
        props.getPosts()
    }, [])

    if(props.post.loading){
        return (
            <View>
        <Text style={{fontFamily:'OpenSans-Regular'}}>Loading...</Text>
        </View>
        )
    }
    // just printing the questions
    return (
        <View>
             {
                props.post.posts.map((p) => {
                    return (<Text key={p.id}>{p.Question}</Text>);
                })
            }
            <Button onPress={props.logoutUser} title="Logout"/> 
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
        registerUser,
        logoutUser
    }, dispatch)
);
  
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);