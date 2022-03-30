import { View, Text, Button, ScrollView } from 'react-native'
import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {getPosts} from '../../redux/actions/PostActions'
import {loginUser, registerUser, logoutUser} from '../../redux/actions/AuthActions'
import PostCard from '../../components/PostCard';


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
        <ScrollView>
             {
                props.post.posts.map((post) => {
                    console.log(post)
                    return (<PostCard post={post} key={post.id}/>);
                })
            }
            {/* <Button onPress={props.logoutUser} title="Logout"/>  */}
        </ScrollView>
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