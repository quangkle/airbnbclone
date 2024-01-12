import { View, Text } from 'react-native'
import React from 'react'
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser';

const Page = () => {
  useWarmUpBrowser();

  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}

export default Page