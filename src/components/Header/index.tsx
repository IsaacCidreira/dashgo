import { Flex } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
import NoificationsNav from './NoificationsNav'
import Profile from './Profile'
import SearchBox from './SearchBox'

export default function Header() {
  return (
    <Flex as="header" w="100%" maxWidth={1480} h="20" mx='auto' mt={4} align='center' px={6} >
      <Logo />
      <SearchBox />
      <Flex
        align='center'
        ml='auto'
      >
        <NoificationsNav />
        <Profile />
      </Flex>
    </Flex>
  )
}