import React from "react";
import {View,Text,StyleSheet,Image} from "react-native";
import Swiper from "react-native-web-swiper";

export default class Mishel extends React.Component { 
    render() {
        return (
            <View style={styles.container}>
                <Swiper>
                    <View style={[styles.slideContainer,styles.slide1]}>
                    <Image
                        source={require('./mishka/mishka1.jpeg')} 
                        style={[styles.image]}
                        />
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                    <Image
                        source={require('./mishka/mishka2.jpeg')} 
                        style={[styles.image]}
                        />
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                    <Image
                        source={require('./mishka/mishka3.jpg')} 
                        style={[styles.image]}
                        />
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                    <Image
                        source={require('./mishka/mishka4.jpg')} 
                        style={[styles.image]}
                        />
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                    <Image
                        source={require('./mishka/mishka5.jpg')} 
                        style={[styles.image]}
                        />
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                    <Image
                        source={require('./mishka/mishka6.jpg')} 
                        style={[styles.image]}
                        />
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                    <Image
                        source={require('./mishka/mishka7.jpg')} 
                        style={[styles.image]}
                        />
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                    <Image
                        source={require('./mishka/mishka8.jpg')} 
                        style={[styles.image]}
                        />
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                    <Image
                        source={require('./mishka/mishka9.jpg')} 
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
});
