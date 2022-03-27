import { View, Text, Button } from 'react-native'
import React from 'react'

import { connect } from 'react-redux';

const HomeScreen = (props) => {

    return (
        <View>
        
        <Text style={{fontFamily:'OpenSans-Regular'}}>{props.post.text}</Text>
        </View>
    )
}
const mapStateToProps = (state) => {
    return {
        post: state.post
      }
};

export default connect(mapStateToProps)(HomeScreen);