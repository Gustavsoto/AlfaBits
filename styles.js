import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9be37f',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'flex-end'
      
    },
    home: {
        flex: 2,
        alignItems: 'centre',
        justifyContent: 'centre',
        alignSelf: 'stretch',
        backgroundColor: '#c77fe3'
        
    },
    cont: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    marginTop:40
  },
    stats: {
      height: 30,
      width:Dimensions.get('window').width,
      flexWrap:'nowrap',
      backgroundColor: '#011a42',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'stretch',
      paddingTop: 5,
      paddingLeft: 10,
      paddingRight:10,
      
    },
    statsText: {
      color: '#fff'
    },
    current: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor:'transparent',
      alignSelf: 'stretch',
      resizeMode: 'contain'
    },
    text: {
      alignSelf: 'center',
      fontSize: 300,
      color:'#2752c6',
      opacity: 0,
    },
    listPanel: {
      height : 180,
      flexDirection:'row',
      backgroundColor: '#c77fe3',
      flexWrap: 'wrap',
      borderRadius: 4,
      borderWidth: 2,
      borderColor: '#111',
      
    },
    letter :  {
      alignSelf: 'center',
      color: '#000000',
      backgroundColor: '#9be37f',
      fontSize: 23,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#111',
    },
    letterAppeared :  {
      alignSelf: 'center',
      color: '#e37f9b',
      backgroundColor: '#9be37f',
      fontSize: 25,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#111',
    }
  });

  export default styles;