import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack screenOptions={{contentStyle: {backgroundColor: "#fff"}}}>
      <Stack.Screen name="index" options={{ title: 'Profile' }}/>
      <Stack.Screen name="search"  options={{ title: 'Search' }}/>
    </Stack>
  )
}

export default Layout