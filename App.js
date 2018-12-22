import Main from './src/components/Main';
import Chat from './src/components/Chat';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const NavStack = createStackNavigator({
	Main: { screen: Main },
	Chat: { screen: Chat }
});

const navigator = createAppContainer(NavStack);

export default navigator;
