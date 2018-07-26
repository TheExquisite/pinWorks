import * as React from 'react';
import { Text, View, StyleSheet, Animated, Easing } from 'react-native';
export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.animationValue = new Animated.Value(0);
        this.toggleBox = this.toggleBox.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            boxExpanded: false
        };
    }
    handleClick() {
        this.props.onClick();
    }
    toggleBox() {
        //console.warn(this.props.pinBoxVis);
        if (this.props.pinBoxVis) {
            this.animateToggle(1, 0);
        }
        else {
            this.animateToggle(0, 1);
        }
        this.handleClick();
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
        console.warn(isExpanded);
        if (isExpanded) {
            return (<View>
					<Text onPress={toggleFunction} style={{ fontSize: 20, alignSelf: 'flex-end' }}>X</Text>
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
					<this.expandableBox toggleFunction={this.toggleBox.bind(this)} isExpanded={this.props.pinBoxVis}/>
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
//# sourceMappingURL=Navbar.js.map