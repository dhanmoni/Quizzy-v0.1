import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

const UserCard = (props) => {


    return (
        <View style={styles.userCard}>
            <View style={styles.userHeader}>
                <Icon name="user" color={'#5350d2'} size={120} />
                <Text style={styles.userName}>{props.auth.currentUser.name}</Text>
            </View>
            <View style={styles.contents}>
                <View style={styles.userHeader}>
                    <Text style={styles.title}>Posts</Text>
                    <Text style={styles.numbers}>20</Text>
                </View>
                <View style={styles.userHeader}>
                    <Text style={styles.title}>Followers</Text>
                    <Text style={styles.numbers}>200</Text>
                </View>
                <View style={styles.userHeader}>
                    <Text style={styles.title}>Following</Text>
                    <Text style={styles.numbers}>100</Text>
                </View>
                <View style={styles.userHeader}>
                    <Text style={styles.title}>Quizzy Coins</Text>
                    <Text style={styles.numbers}>2000</Text>
                </View>
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
    userCard: {
        padding: 10,
        margin: 20,
        elevation: 5,
        backgroundColor: '#fff',
        borderRadius: 12,
    },
    userHeader: {
        alignItems: 'center',
        marginTop: 30
    },
    userName: {
        fontSize: 30,
        color: '#333',
        fontFamily: 'OpenSans-Regular',
        justifyContent: 'center',
    },
    contents: {
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    numbers: {
        padding: 12,
        fontSize: 14,
    },
    title: {
        fontSize: 14,
    }
})