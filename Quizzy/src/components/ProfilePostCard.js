import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'

const ProfilePostCard = ({post}) => {

  return (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <Icon name="user" color={'#5350d2'} size={30} />
        <Text style={styles.userName}>{post.AuthorName}</Text>
      </View>
      <View style={styles.postBody}>
        <Text style={styles.question}>{post.Question}</Text>
        
      </View>
    </View>
  )
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({}, dispatch)
);
  
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePostCard);
const styles = StyleSheet.create({
    postCard: {
        padding: 10,
        margin:20,
        elevation: 5,
        backgroundColor: '#fff',
        borderRadius:12
    },
    userName:{
        paddingLeft:12,
        fontSize: 20,
        color: '#333',
        fontFamily:'OpenSans-Regular'
    },
    postHeader: {
        flexDirection:'row',
        padding:12,
        alignItems:'center',
    },
    postBody:{
        marginTop:10
    },
    question: {
        fontSize: 20,
        color: '#333',
        fontFamily:'OpenSans-Regular'
    },
    option:{
        borderWidth: 1,
        borderRadius:12,
        marginTop: 6,
        padding:6
    },
    incorrect:{
        color:'red',
        marginTop:12
    },
    correct:{
        color:'green',
        marginTop:12

    }
})