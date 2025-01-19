import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const index = () => {
  // const [isOnboarding, setIsOnboarding] = useState(true);

    // useEffect(() => {

    // }, []);

  return (
    <Redirect href="/(routes)/onboarding" />
  )
}

export default index