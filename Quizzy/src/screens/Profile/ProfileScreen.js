import React from 'react'
import {  Button, ScrollView  } from 'react-native'
import { connect } from 'react-redux'
import { logoutUser } from '../../redux/actions/AuthActions'
import {bindActionCreators} from 'redux'
import UserCard from '../../components/UserCard'

export const ProfileScreen = (props) => {
  return (
    <ScrollView>
     <UserCard/>
   <Button onPress={props.logoutUser} title= "Sign Out"></Button>
</ScrollView>
      
  )
}

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