import React, { memo } from 'react';
import {
	View,
	Text,
	TouchableWithoutFeedback,
	Dimensions,
	StyleSheet
} from 'react-native';
import { dayJsMod } from './Helper';

const DEVICE_WIDTH = Dimensions.get('window').width;

const areEqual = (prevProps, nextProps) => {
	if(nextProps.day.type != prevProps.day.type){
		return false;
	}

	if(nextProps.onSelectDate != prevProps.onSelectDate){
		return false;
	}

	return true;
};

const Day = memo((props) => {
	const {
		day,
		dayProps,
	} = props;

	const {
		dayBackgroundColor,
		dayTextColor,
		pointBackgroundColor,
		pointTextColor,
		selectedBackgroundColor,
		selectedTextColor,
		dayContainerOffset = 10,
	} = dayProps;
	
	const side = Math.floor(DEVICE_WIDTH / 7)+2;
	const size = {
		width: side,
		height: side,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	};

	const dayWrapperStyle = {
		...size,
		backgroundColor : 'transparent',
	};

	const dayStyle = {
		width: side - dayContainerOffset,
		height: side - dayContainerOffset,
		// flex: 0,
		backgroundColor : dayBackgroundColor || 'transparent',
		position: 'relative',
		borderRadius: side - dayContainerOffset,
	};
	
	const textDayStyle = { color: dayTextColor || 'black' };


	switch(day.type) {
		case "single" :
			dayStyle.backgroundColor = pointBackgroundColor || selectedBackgroundColor;
			textDayStyle.color = pointTextColor || selectedTextColor;
			break;
		case "first" :
			dayStyle.backgroundColor = pointBackgroundColor || selectedBackgroundColor;
			textDayStyle.color = pointTextColor || selectedTextColor;
			dayWrapperStyle.backgroundColor = selectedBackgroundColor;
			dayWrapperStyle.borderBottomLeftRadius = side;
			dayWrapperStyle.borderTopLeftRadius = side;
			break;
		case "last" :
			dayStyle.backgroundColor = pointBackgroundColor || selectedBackgroundColor;
			textDayStyle.color = pointTextColor || selectedTextColor;
			dayWrapperStyle.backgroundColor = selectedBackgroundColor;
			dayWrapperStyle.borderBottomRightRadius = side;
			dayWrapperStyle.borderTopRightRadius = side;
			break;
		case "between" :
			dayStyle.backgroundColor = selectedBackgroundColor;
			textDayStyle.color = selectedTextColor;
			dayWrapperStyle.backgroundColor = selectedBackgroundColor;
			break;
		case "disabled" :
		case "blockout" :
			textDayStyle.color = '#ccc';
		default: break;
	}

	if(day.date){
		if(day.type == 'disabled')
			return (
				<TouchableWithoutFeedback activeOpacity={1}>
					<View style={dayWrapperStyle}>
						<View style={{...dayStyle, justifyContent: 'center'}}>
							<Text style={{...textDayStyle, textAlign: "center", backgroundColor: 'transparent', fontSize: Math.floor(DEVICE_WIDTH / 26)}}>{dayJsMod(day.date, 'YYYYMMDD').date()}</Text>
							{day.date == dayJsMod().format("YYYYMMDD") ? (<View style={{position: 'absolute', top:0, bottom:0, left:0, right: 0, justifyContent: 'center', backgroundColor: 'transparent'}}><Text style={{fontSize: Math.floor(DEVICE_WIDTH / 17), fontWeight: 'bold', color: '#ccc', textAlign: 'center'}}>__</Text></View>) : null}
						</View>
					</View>
				</TouchableWithoutFeedback>
			);
		else if(day.type == 'blockout') {
			const strikeTop = Math.floor(DEVICE_WIDTH / -22);
			return (
				<TouchableWithoutFeedback activeOpacity={1}>
					<View style={dayWrapperStyle}>
						<View style={{...dayStyle, justifyContent: 'center'}}>
							<Text style={{...textDayStyle, textAlign: "center", backgroundColor: 'transparent', fontSize: Math.floor(DEVICE_WIDTH / 26)}}>{dayJsMod(day.date, 'YYYYMMDD').date()}</Text>
							<View style={{position: 'absolute', top: strikeTop, bottom:0, left:0, right: 0, justifyContent: 'center', backgroundColor: 'transparent'}}>
								<Text style={{fontSize: Math.floor(DEVICE_WIDTH / 17), color: '#ccc', textAlign: 'center'}}>__</Text>
							</View>
						</View>
					</View>
				</TouchableWithoutFeedback>
			);
		}
		else
			return (
				<TouchableWithoutFeedback activeOpacity={1} onPress={() => props.onSelectDate(dayJsMod(day.date, 'YYYYMMDD'))}>
					<View style={dayWrapperStyle}>
						<View style={{...dayStyle, justifyContent: 'center'}}>
							<Text style={{...textDayStyle, textAlign: "center", backgroundColor: 'transparent', fontSize: Math.floor(DEVICE_WIDTH / 26)}}>
								{dayJsMod(day.date, 'YYYYMMDD').date()}
							</Text>
							{day.date == dayJsMod().format("YYYYMMDD") ?
								(<View style={{position: 'absolute', top:0, bottom:0, left:0, right: 0, justifyContent: 'center', backgroundColor: 'transparent'}}>
									<Text style={{fontSize: Math.floor(DEVICE_WIDTH / 17), fontWeight: 'bold', color: dayProps.selectedBackgroundColor, textAlign: 'center'}}>__</Text>
								</View>)
								: null}
						</View>
					</View>
				</TouchableWithoutFeedback>
			);
	}
	else
		return (
			<TouchableWithoutFeedback activeOpacity={1}>
				<View style={dayWrapperStyle}>
					<View style={{...dayStyle, ...size, justifyContent: 'center'}}>
						<Text style={{ ...textDayStyle, textAlign: "center", backgroundColor: 'transparent', fontSize: Math.floor(DEVICE_WIDTH / 26)}}>{null}</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
}, areEqual)

export default Day;