import * as React from "react";
import { SafeAreaView } from "react-native";
import { BottomNavigation, Text } from "react-native-paper";
import GroupTasksScreen from "./GroupTasksScreen";

const HomeRoute = () => <Text>Home page!</Text>;

const CalendarRoute = () => <Text>Calendar page!</Text>;

const NewTaskRoute = () => <Text>New Task page!</Text>;

const TasksRoute = () => <Text>Tasks page!</Text>;

const HealthRoute = () => <Text>Settings page!</Text>;

const SettingsRoute = () => <Text>Settings page!</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home", color: "#b29c6f" },
    {
      key: "calendar",
      title: "Calendar",
      icon: "calendar-month",
      color: "#b29c6f",
    },
    {
      key: "newtask",
      title: "New Task",
      icon: "pencil-plus",
      color: "#b29c6f",
    },
    {
      key: "tasks",
      title: "Tasks",
      icon: "checkbox-marked-outline",
      color: "#b29c6f",
    },
    { key: "health", title: "Health", icon: "heart", color: "#b29c6f" },
    { key: "settings", title: "Settings", icon: "menu", color: "#b29c6f" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    calendar: CalendarRoute,
    newtask: NewTaskRoute,
    tasks: TasksRoute,
    health: HealthRoute,
    settings: SettingsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

function Labels(props) {
  return (
    <SafeAreaView style={{ flexWrap: "wrap" }}>
      <GroupTasksScreen></GroupTasksScreen>
      {MyComponent}
    </SafeAreaView>
  );
}

export default Labels;
