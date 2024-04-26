import React, { Component } from 'react';
import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
// import SelectDropdown from 'react-native-select-dropdown';

class ProfilPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonOn: false
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            buttonOn: !prevState.buttonOn
        }));
    }

    render() {
        const { Items } = this.props;
        const { buttonOn } = this.state;
        // const emojisWithIcons = [
        //     {title: '10 minutes'},
        //     {title: '20 minutes'},
        //     {title: '30 minutes'},
        //     {title: '40 minutes'},
        //     {title: '50 minutes'},
        //   ];

        return (
            <ImageBackground source={require("../assets/images/bgsplash.jpeg")} 
                /* source={require("../../../assets/_images/bg-splash.jpeg")} */
                resizeMode='cover'
                style={styles.ImageBg}>

                {/* saveareaview all of wrapper container */}
                <SafeAreaView style={styles.MainContainer}>
                    <StatusBar hidden={true} />

                    {/* flex fill only  */}
                    <View style={{
                        // backgroundColor: 'blue', 
                        margin: 'auto',
                        display: 'flex',
                        flex: 15
                    }}>
                    </View>

                    {/* flex fill only */}
                    <View style={{
                        // backgroundColor:'black',
                        margin: 'auto',
                        display: 'flex',
                        flex: 15
                    }}>
                    </View>

                    {/* container menu wrapper */}
                    <View style={styles.MenuContainer}>
                        <ScrollView>
                            {/* This is header content in Menu  */}
                            <View style={{ alignItems: 'center', borderRadius: 25, marginBottom: 24, }}>
                                <Image source={require("../assets/icons/Siboy1.png")} 
                                /* source={require("../../../assets/icons/icon-boy-1.png")} */
                                style={styles.imageicon} />
                                
                                <Text>Hello Bunda</Text>
                                <Text>{Items.username}</Text>
                                <Text>{Items.email}</Text>
                            </View>

                            {/* This is daily limit time allowed  */}
                            <View style={{
                                // borderWidth: 1, 
                                // borderColor: "black", 
                                borderRadius: 25,
                                justifyContent: 'center',
                                backgroundColor: "white",
                                alignSelf: 'stretch',
                                shadowColor: "black",
                                shadowRadius: 25,
                                elevation: 5,
                                paddingVertical: 16,
                            }}>
                                <View
                                    style={{
                                        // borderColor:'black', 
                                        // borderWidth: 1,
                                        flexDirection: 'row',
                                        paddingVertical: 16,
                                        justifyContent: 'space-between',
                                        paddingHorizontal: 16
                                    }}>
                                    <Text>Daily Limit Read</Text>
                                    <TouchableOpacity activeOpacity={0.6} onPress={this.handleClick}>
                                        <View style={{ backgroundColor: "purple", padding: 8, borderRadius: 100 }}>
                                            <Text style={{ color: "white" }}>{buttonOn ? 'ON' : 'OFF'}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                {buttonOn ? (
                                    <View style={
                                        {
                                            // borderWidth: 1,
                                            // borderColor: 'black',
                                            paddingVertical: 16,
                                            paddingHorizontal: 16
                                        }
                                    }>
                                        <Text>10 Minutes</Text>
                                    </View>
                                ) : (
                                    <View style={
                                        {
                                            // borderWidth: 1,
                                            // borderColor: 'black',
                                            paddingVertical: 16,
                                            paddingHorizontal: 16
                                        }
                                    }>
                                        <Text style={{ opacity: 0.3 }}>10 Minutes</Text>
                                    </View>
                                )}
                            </View>

                            <TouchableOpacity activeOpacity={0.3}>
                                <View style={{ alignItems: 'center', width: '100%', paddingVertical: 16, marginTop: 24, borderRadius: 25, backgroundColor: 'white', elevation:2 }}>
                                    <Text style={{ color: 'black' }}>Notification</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.5}>
                                <View style={{ alignItems: 'center', width: '100%', paddingVertical: 16, marginTop: 24, borderRadius: 25, backgroundColor: 'white', elevation: 2 }}>
                                    <Text style={{ color: 'black' }}>Payment</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.5}>
                                <View style={{ alignItems: 'center', width: '100%', paddingVertical: 16, marginTop: 24, borderRadius: 25, backgroundColor: 'white', elevation: 2 }}>
                                    <Text style={{ color: 'black' }}>Support</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.5}>
                                <View style={{ alignItems: 'center', width: '100%', paddingVertical: 16, marginTop: 24, borderRadius: 25, backgroundColor: 'white', elevation: 2, marginBottom: 16 }}>
                                    <Text style={{ color: 'black' }}>Sign Out</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    ImageBg: {
        flex: 1,
        justifyContent: "center",
        opacity: 1,
        borderBottomLeftRadius: 25
    },
    MainContainer: {
        flex: 1,
        // backgroundColor: 'pink',
        opacity: 1,
    },
    imageicon: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "black"
    },
    MenuContainer: {
        flex: 70,
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 30,
        paddingTop: 50,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        opacity: 1,
        borderWidth:1,
    },
});

export default ProfilPage;
