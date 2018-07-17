import * as React from 'react';
import { Text, View, StyleSheet, Animated, Easing, TouchableWithoutFeedback } from 'react-native';
import { runInThisContext } from 'vm';

export default class Navbar extends React.Component<{},{boxState: Boolean}> {

	animationValue: any;

	constructor(props: any){
		super(props)
		this.animationValue = new Animated.Value(0);
		this.state = {
			boxState: false
		}
	}

	toggleBox(){
		if (this.state.boxState){
			this.animateToggle(1, 0);
			this.setState({
				boxState: false
			})
		} else {
			this.animateToggle(0, 1);
			this.setState({
				boxState: true
			})
		}
	}

	animateToggle(startNum: number, finishNum: number){
		this.animationValue.setValue(startNum);
		Animated.timing(
			this.animationValue,
			{
				toValue: finishNum,
				duration: 200,
				easing: Easing.linear
			}
		).start()
	}

  render(){
		const boxBottomPos = this.animationValue.interpolate({
			inputRange: [0, 1],
			outputRange: [15, 60]
		})

		const boxLeftPos = this.animationValue.interpolate({
			inputRange: [0, 1],
			outputRange: [155, 20]
		})

		const boxWidth = this.animationValue.interpolate({
			inputRange:  [0, 1],
			outputRange: [50, 320]
		})

		const boxHeight = this.animationValue.interpolate({
			inputRange:  [0, 1],
			outputRange: [50, 240]
		})

    return(
			<View>
				<View style={styles.wrapper}>
					<Text>This is the navbar component</Text>
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
					<Text onPress={this.toggleBox.bind(this)} style={{fontSize: 35, paddingBottom: 4}}> + </Text>
				</Animated.View>
			</View>
    )
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