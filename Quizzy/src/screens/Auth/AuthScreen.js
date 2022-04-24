import { View, Text, Button, StyleSheet, TextInput, Image} from 'react-native'
import React,{useState} from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {loginUser, registerUser} from '../../redux/actions/AuthActions'


const AuthScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  //sign in or sign up
  const [create, setCreate] = useState(true);

  const signIn = () => {
      props.loginUser(email,password)
    };
  const signUp = () => {
      props.registerUser(email,password, name)
    };


  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/icon.png')} style={styles.icon}/>
    
      <Text style={styles.titleText}>{create ? "Sign Up" : "Log in"}</Text> 
      <TextInput
      placeholder='Email'
      onChangeText={setEmail}
      value={email}
      style={styles.textInput}
      placeholderTextColor={'grey'}
      />
       <TextInput
      placeholder='Password'
      onChangeText={setPassword}
      value={password}
      style={styles.textInput}
      secureTextEntry={true}
      placeholderTextColor={'grey'}
      />
      {
          create ? (
            <>
                <TextInput
                placeholder='Name'
                onChangeText={setName}
                value={name}
                style={styles.textInput}
                placeholderTextColor={'grey'}
                />
                <Button onPress={signUp} title="Sign Up" /> 
                <Text style={styles.text} onPress={() => setCreate(false)}>Aleady have an account? Sign In</Text>
            </>
          ) : (
            <>
                <Button onPress={signIn} title="Login" /> 
                <Text style={styles.text} onPress={() => setCreate(true)}>Create an Account</Text>
            </>
          )
      }
      {
          props.post.loading && <Text style={styles.text}>Loading... Please wait</Text> 
      }
    </View>
  );
} /*props.registerUser*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 40,
    alignItems: 'center'
  },
  textInput: {
    borderWidth: 1,
    width: '95%',
    borderColor: 'grey',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    color: '#333'
  },
  text: {
    color: 'blue',
    marginTop: 20,
  },
  titleText: {
      color: '#333',
      fontSize:26,
      marginBottom: 20
  },
  icon: {
     width: 120,
     height: 120,
     marginBottom: 40,
     
  }

});

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        post: state.post
      }
};


const mapDispatchToProps = dispatch => (
    bindActionCreators({
        registerUser,
        loginUser
    }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen)