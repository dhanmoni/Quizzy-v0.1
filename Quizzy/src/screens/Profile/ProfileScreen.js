import React, { useEffect } from 'react'
import { Text, ScrollView, View, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import { logoutUser } from '../../redux/actions/AuthActions'
import { bindActionCreators } from 'redux'
import UserCard from '../../components/UserCard'
import { MenuProvider } from 'react-native-popup-menu';
import { getPosts } from '../../redux/actions/PostActions'
import PostCard from '../../components/PostCard'
import ProfilePostCard from '../../components/ProfilePostCard'

export const ProfileScreen = (props) => {
  useEffect(() => {
    props.getPosts()
}, [])

if(props.post.loading){
    return (
        <View>
    <Text style={{fontFamily:'OpenSans-Regular'}}>Loading...</Text>
    </View>
    )
}
  return (
    <ScrollView>
      <MenuProvider>
        <UserCard />
      </MenuProvider>

      <Text style={styles.Text}>My Posts: </Text>
      <ScrollView>
             {
                props.post.posts.map((post) => {
                    console.log(post)
                    return (<ProfilePostCard post={post} key={post.id}/>);
                })
            }
            {/* <Button onPress={props.logoutUser} title="Logout"/>  */}
        </ScrollView>
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
    marginTop: 20,
    borderRadius: 12
  },
  Text: {
    color: '#333',
    padding: 20,
    fontSize:20
  }

})

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.post
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getPosts,
    logoutUser
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)