import React from 'react'
import { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import styles from '../../styles/auth'
import globalStyles from '../../styles/global'

export default function CustomTextInput({
  icon,
  placeholder='Name',
  securedTextEntry=false,
  onChangeText,
  value,
}) {
  const [focused, setFocused] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    setHidden(securedTextEntry)
  }, [securedTextEntry])

  return (
    <View style={[styles.inputWrapper, focused ? styles.focusedInput : null]}>
      <Ionicons 
        name={icon}
        size={24}
        color='black'
        style={[styles.inputIcon], {left: 10, opacity: .6}}
      />

      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChangeText={onChangeText}
        value={value}
        autoCapitalize='none'
        placeholder={placeholder}
        secureTextEntry={hidden}
        style={styles.input}
      />

      {securedTextEntry && (
        <TouchableOpacity
          style={[styles.inputIcon, {right: 10, opacity: .6}]}
          onPress={() => setHidden(!hidden)}
        >
          {hidden ? (
            <Ionicons name="md-eye" size={24} color="black" />
          ) : (
            <Ionicons name="eye-off" size={24} color="black" />
          )}
        </TouchableOpacity>
      )}

    </View>
  )
}