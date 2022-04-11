import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'

const UserCard = (props) => {

   
  return (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <Icon name="user" color={'#5350d2'} size={120}/>
        <Text style={styles.userName}>{props.auth.currentUser.name}</Text>
      </View>
      <View style={styles.contents}>
          <Text style={styles.user}>Posts</Text>
          <Text style={styles.user}>Followers</Text>
          <Text style={styles.user}>Following</Text>
          <Text style={styles.user}>Quizzy Coins</Text>
      </View>
    </View>
  )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({}, dispatch)
);
  
export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
const styles = StyleSheet.create({
    postCard: {
        padding: 10,
        margin:20,
        elevation: 5,
        backgroundColor: '#fff',
        borderRadius:12,
    },
    postHeader: {
        padding:12,
        alignItems:'center',
    },
    userName:{
        fontSize: 30,
        color: '#333',
        fontFamily:'OpenSans-Regular',
        justifyContent: 'center',
    },
    contents: {
        padding: 12,
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    user: {
        fontSize: 16,
    }
    
})