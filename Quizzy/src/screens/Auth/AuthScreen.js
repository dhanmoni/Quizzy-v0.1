import { View, Text, Button, StyleSheet, TextInput} from 'react-native'
import React,{useState} from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {loginUser, registerUser} from '../../redux/actions/AuthActions'


const AuthScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //sign in or sign up
  const [create, setCreate] = useState(false);

  const signIn = () => {props.loginUser(email,password)};
  const signUp = () => {props.registerUser(email,password)};


  return (
    <View style={styles.container}>
      <TextInput
      placeholder='Email'
      onChangeText={setEmail}
      value={email}
      style={styles.textInput}
      />
       <TextInput
      placeholder='Password'
      onChangeText={setPassword}
      value={password}
      style={styles.textInput}
      />
      {create ? ( 
      <>
      <Button onPress={signUp} title="Sign Up" /> 
      <Text style={styles.text} onPress={() => setCreate(false)}>Sign In</Text>
      </> 
      ) : (
        <>
      <Button onPress={signIn} title="Login" /> 
      <Text style={styles.text} onPress={() => setCreate(true)}>Create an Account</Text>
      </>
      )}
    </View>
  );
} /*props.registerUser*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  text: {
    color: 'blue',
    marginTop: 20,
  }

});

const mapStateToProps = (state) => {
    return {
        auth: state.auth
      }
};


const mapDispatchToProps = dispatch => (
    bindActionCreators({
        registerUser,
        loginUser
    }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen)