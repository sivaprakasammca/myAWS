
import { StyleSheet, Text, View } from 'react-native';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
Amplify.configure(config);
function App() {
  return (
    <View style={styles.container}>
      <Text>💙 + 💛 </Text>
    
    </View>
  );
  
}



export default withAuthenticator(App,true);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
