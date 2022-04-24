import { View, Text, Button, ScrollView, RefreshControl } from 'react-native'
import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {getPosts} from '../../redux/actions/PostActions'
import {loginUser, registerUser, logoutUser} from '../../redux/actions/AuthActions'
import PostCard from '../../components/PostCard';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

const HomeScreen = (props) => {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    props.getPosts() 
    setRefreshing(true);
    wait(500).then(() => setRefreshing(false));
  }, []);

    useEffect(() => {
        props.getPosts()
    }, [])

    // just printing the questions
    return (
        <ScrollView refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }>
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