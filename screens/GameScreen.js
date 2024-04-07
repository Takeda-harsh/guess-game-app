import { View, Text, StyleSheet } from 'react-native';
import Title from '../components/title';

function GameScreen() {
	return (
		<View style={styles.screen}>
			{/* GUESS */}
			<View>
				<Title>Opponents Guess</Title>
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
