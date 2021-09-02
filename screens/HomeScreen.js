import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import CalendarScreen from './CalendarScreen';
import NewTaskScreen from './NewTaskScreen';
import TasksScreen from './TasksScreen';
import HealthScreen from './HealthScreen';
import MenuScreen from './MenuScreen';
import GroupTasksScreen from './GroupTasksScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator, createAppContainer } from 'react-navigation';


const MyComponent = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' , color: '#406c34'},
    { key: 'calendar', title: 'Calendar', icon: 'calendar-month' , color: '#406c34'},
    { key: 'newtask', title: 'New Task', icon: 'pencil-plus' , color: '#406c34'},
    { key: 'tasks', title: 'Tasks', icon: 'checkbox-marked-outline' , color: '#406c34'},
    { key: 'health', title: 'Health', icon: 'heart' , color: '#406c34'},
    { key: 'settings', title: 'Menu', icon: 'menu' , color: '#406c34'},
  ]);
3
  const renderScene = BottomNavigation.SceneMap({
    home: GroupTasksScreen,
    calendar: CalendarScreen,
    newtask: NewTaskScreen,
    tasks: TasksScreen,
    health: HealthScreen,
    settings: MenuScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes, navigation }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;