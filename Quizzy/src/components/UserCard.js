import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { logoutUser } from '../redux/actions/AuthActions';
import Icons from 'react-native-vector-icons/MaterialIcons'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

const UserCard = (props) => {
    return (
        <View style={styles.userCard}>

            <Menu style={{ alignItems: 'flex-end'}}>
                <MenuTrigger>
                    <Icons
                        name='more-vert'
                        size={40}
                        color={'grey'}
                        style={{ textAlign: 'right' }} />
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={null}
                        >
                            <Text style={styles.logOutButtonText}>Edit Profile</Text>
                        </TouchableOpacity>
                    </MenuOption>
                    <MenuOption>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={null}
                        >
                            <Text style={styles.logOutButtonText}>App Settings</Text>
                        </TouchableOpacity>
                    </MenuOption>
                    <MenuOption>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={null}
                        >
                            <Text style={styles.logOutButtonText}>About</Text>
                        </TouchableOpacity>
                    </MenuOption>
                    <MenuOption>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={props.logoutUser}
                        >
                            <Text style={styles.logOutButtonText}>Log Out</Text>
                        </TouchableOpacity>
                    </MenuOption>
                </MenuOptions>
            </Menu>
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
        auth: state.auth,
        post: state.post
    }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        logoutUser
    }, dispatch)
);

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
    },
    container: {
        padding: 5,
        alignItems: 'center'
    },
    button: {
        width: "100%",
        alignItems: "center",
        padding: 10,
        borderRadius:12
        
    },
    logOutButtonText: {
        color: '#333',
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
