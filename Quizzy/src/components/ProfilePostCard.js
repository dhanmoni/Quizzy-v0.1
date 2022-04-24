import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { deletePosts} from '../redux/actions/PostActions';

const ProfilePostCard = ({ post }) => {
    return (
        <View style={styles.postCard}>
            <View style={styles.postHeader}>
                <View style={styles.postHeader}>
                    <Icon name="user" color={'#5350d2'} size={30} />
                    <Text style={styles.userName}>{post.AuthorName}</Text>
                </View>
                <View style={styles.icon}>
                    <TouchableOpacity onPress={deletePosts(post)}>
                        <Icons name="delete" color={'#FF0000'} size={20} style={styles.icon}> Delete Post</Icons>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.postBody}>
                <Text style={styles.question}>{post.Question}</Text>
                {post.Options.map((op, i) => (
                    <TouchableOpacity
                        style={styles.option}
                        disabled={true}>
                        <Text style={styles.optionText} key={i}>{op}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}
const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        deletePosts,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePostCard);
const styles = StyleSheet.create({
    postCard: {
        padding: 10,
        margin: 20,
        elevation: 5,
        backgroundColor: '#fff',
        borderRadius: 12
    },
    userName: {
        paddingLeft: 12,
        fontSize: 20,
        color: '#333',
        fontFamily: 'OpenSans-Regular'
    },
    postHeader: {
        flexDirection: 'row',
        padding: 6,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    postBody: {
        marginTop: 10
    },
    question: {
        fontSize: 20,
        color: '#333',
        fontFamily: 'OpenSans-Regular'
    },
    answer: {
        fontSize: 18,
        color: '#333',
        fontFamily: 'OpenSans-Regular',
        fontWeight: 'bold'
    },
    option: {
        borderWidth: 1,
        borderRadius: 12,
        marginTop: 6,
        padding: 6
    },
    incorrect: {
        color: 'red',
        marginTop: 12
    },
    correct: {
        color: 'green',
        marginTop: 12

    },
    icon: {
        padding: 4,
    }
})