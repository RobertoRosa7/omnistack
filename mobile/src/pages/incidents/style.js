import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerText:{
        fontSize:20,
        color:'#737380',
    },
    headerTextBold:{
        fontWeight:'bold'
    },
    headerWelcome:{
        fontSize:25,
        marginBottom:16,
        marginTop:48,
        fontWeight:'bold',
        color:'#13131a'
    },
    headerDescription:{
        color:'#737380',
        lineHeight:24,
        fontSize:14
    },
    inicidentsContainer:{
        marginTop:32,
    },
    incidents:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom:8,
        marginTop:8
    },
    incidentsProperty:{
        fontSize:16,
        color:'#41414d',
        fontWeight:'bold'
    },
    incidentsValue:{
        marginTop:8,
        marginBottom:24,
        fontSize:14,
        color:'#737380'
    },
    incidentsButton:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    incidentsButtonText:{
        color:'#e02041',
        fontWeight:'bold',
        fontSize:15
    }
});