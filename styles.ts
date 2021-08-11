import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28272D',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo: {
        width: 98,
        height: 98,
     
      },
      title: {
        fontFamily: 'Inter_700Bold',
        fontSize: 20,
        color: '#FF7E75',
        textAlign: 'center',
        marginBottom: 20,
        marginRight: 60,
        left: 80,
        bottom: 80,
    
      },
      subTitle: {
       textAlign: 'center',
       fontFamily: 'Inter_300Light',
       fontSize: 14,
       color: '#FF7E75',
       bottom: 50,
      },
      content: {
        backgroundColor: '#FFF',
        width: '100%',
        height: 'auto',
        borderRadius: 8,
        padding: 10,
        
      },
      form: {
        width: '100%',
        
      },
      input: {
        height: 62,
        width: 320,
        borderWidth: 0.5,
        borderRadius: 8,
        borderColor: '#FF7E75',
        alignSelf: 'center',
        textAlign: 'center',
        fontFamily: 'Inter_300Light',
        marginTop: 20,
        color: '#CCC',
      },
      resultado: {
        alignSelf: 'center', 
        margin: 10, 
        fontFamily: 'Inter_300Light',
        fontSize: 14,
        color: '#FF7E75',
      },
      calculo: {
        height: 62,
        width: 320,
        borderWidth: 0.5,
        borderRadius: 8,
        borderColor: '#FF7E75',
        backgroundColor: '#FF7E75',
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter_300Light',
        marginTop: 20,
        color: '#FFF',
      }
})