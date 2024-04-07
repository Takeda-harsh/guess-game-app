import { View, Text, StyleSheet } from 'react-native';

function GameScreen() {
	return (
		<View style={styles.screen}>
			<Text>Opponents Guess</Text>
			{/* GUESS */}
			<View>
				<Text>HIgher or Lower </Text>
				{/* + - */}
			</View>
			<View>
				<Text>Log rounds</Text>
			</View>
		</View>
	);
}

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
	},
});
