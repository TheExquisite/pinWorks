import * as React from 'react';
import { Text, View, StyleSheet, Animated, Easing, TextInput, TouchableNativeFeedback } from 'react-native';
export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.animationValue = new Animated.Value(0);
        this.toggleBox = this.toggleBox.bind(this);
        this.state = {
            boxExpanded: false
        };
    }
    toggleBox() {
        if (this.state.boxExpanded) {
            this.animateToggle(1, 0);
            this.setState({
                boxExpanded: false
            });
        }
        else {
            this.animateToggle(0, 1);
            this.setState({
                boxExpanded: true
            });
        }
    }
    animateToggle(startNum, finishNum) {
        this.animationValue.setValue(startNum);
        Animated.timing(this.animationValue, {
            toValue: finishNum,
            duration: 200,
            easing: Easing.linear
        }).start();
    }
    expandableBox(props) {
        const isExpanded = props.isExpanded;
        const toggleFunction = props.toggleFunction;
        if (isExpanded) {
            return (<View>
					<Text onPress={toggleFunction} style={{ fontSize: 20, alignSelf: 'flex-end' }}>X</Text>
					<TextInput style={{
                height: 180,
                width: 280,
                backgroundColor: '#e0b32c',
                borderColor: 'black',
                borderRadius: 3,
                borderWidth: 1,
                paddingBottom: 4,
                textAlignVertical: 'top'
            }} selectionColor={'black'} multiline={true}/>
					<TouchableNativeFeedback style={{ backgroundColor: '#e0b32c' }} onPress={() => console.warn("Droping pins is not implemented yet")}>
						<Text style={{ alignSelf: 'center', height: 30, width: 60 }}>Drop Pin</Text>
					</TouchableNativeFeedback>
				</View>);
        }
        else {
            return (<View>
					<Text onPress={toggleFunction} style={{ fontSize: 35, paddingBottom: 4 }}> + </Text>
				</View>);
        }
    }
    render() {
        const boxBottomPos = this.animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [15, 60]
        });
        const boxLeftPos = this.animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [155, 20]
        });
        const boxWidth = this.animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [50, 320]
        });
        const boxHeight = this.animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [50, 240]
        });
        return (<View>
				<View style={styles.wrapper}>
				</View>
				<Animated.View style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            width: boxWidth,
            height: boxHeight,
            bottom: boxBottomPos,
            left: boxLeftPos,
            backgroundColor: '#ffd147',
            borderRadius: 5
        }}>
					<this.expandableBox toggleFunction={this.toggleBox.bind(this)} isExpanded={this.state.boxExpanded}/>
				</Animated.View>
			</View>);
    }
}
const styles = StyleSheet.create({
    wrapper: {
        height: 40,
        backgroundColor: '#ff143b'
    },
    newPinWrapper: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        bottom: 15,
        left: 155,
        backgroundColor: '#ffd147',
        borderRadius: 5
    }
});
//# sourceMappingURL=navbar.js.map