import React from 'react'
import { Text, ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { logoutUser } from '../../redux/actions/AuthActions'
import {bindActionCreators} from 'redux'
import UserCard from '../../components/UserCard'

export const ProfileScreen = (props) => {
  return (
    <ScrollView>
     <UserCard/>
     <View style={styles.container}>
          <TouchableOpacity
              style={styles.button}
              onPress={props.logoutUser}
            >
              <Text style={styles.logOutButtonText}>Log Out</Text>
            </TouchableOpacity>
          </View>
</ScrollView>
      
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: 'center'
  },
  button: {
    width: "40%",
    alignItems: "center",
    backgroundColor: "#5350d2",
    padding: 10,
    marginTop:20,
    borderRadius:12
  },
  logOutButtonText:{
    color:'#fff',
  }

})

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.post
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    logoutUser
}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)