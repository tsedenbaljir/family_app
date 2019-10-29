import React from "react";
import {View,Text,StyleSheet,Image} from "react-native";
import Swiper from "react-native-web-swiper"; 
export default class Aldarxishig extends React.Component { 
    render() {
        return (
            <View style={styles.container}>
                <Swiper>
                    <View style={[styles.slideContainer,styles.slide1]}>
                    <Image
                     source={require('./aldaraa/aldaraa1.jpg')} 
                     style={[styles.image]}
                    />
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                    <Image
                     source={require('./aldaraa/aldaraa2.jpg')} 
                     style={[styles.image]}
                    />
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                    <Image
                     source={require('./aldaraa/aldaraa3.jpg')} 
                     style={[styles.image]}
                    />
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                    <Image
                     source={require('./aldaraa/aldaraa4.jpg')} 
                     style={[styles.image]}
                    />
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                    <Image
                     source={require('./aldaraa/aldaraa5.jpg')} 
                     style={[styles.image]}
                    />
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                    <Image
                     source={require('./aldaraa/aldaraa6.jpg')} 
                     style={[styles.image]}
                    />
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                    <Image
                     source={require('./aldaraa/aldaraa7.jpg')} 
                     style={[styles.image]}
                    />
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                    <Image
                     source={require('./aldaraa/aldaraa8.jpg')} 
                     style={[styles.image]}
                    />
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                    <Image
                     source={require('./aldaraa/aldaraa9.jpg')} 
                     style={[styles.image]}
                    />
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                    <Image
                     source={require('./aldaraa/aldaraa10.jpg')} 
                     style={[styles.image]}
                    />
                    </View> 
                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    slide1: {
        backgroundColor: "rgba(20,20,200,0.3)"
    },
    image :{
      width:'100%',
      height:'100%'
     },
    slide2: {
        backgroundColor: "rgba(20,200,20,0.3)" 
    },
    slide3: {
        backgroundColor: "rgba(200,20,20,0.3)" 
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
    }
    
});
