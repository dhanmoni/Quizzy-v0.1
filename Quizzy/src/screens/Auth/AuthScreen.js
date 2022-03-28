import { View, Text, Button } from 'react-native'
import React from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'

import {loginUser} from '../../redux/actions/AuthActions'

const AuthScreen = (props) => {
  return (
    <View>
      <Text>AuthScreen Screen : You are not logged in...</Text>
      <Button onPress={props.loginUser} title="Login"/> 
    </View>
  )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
      }
};


const mapDispatchToProps = dispatch => (
    bindActionCreators({
        loginUser
    }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen)