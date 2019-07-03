import React, { forwardRef } from 'react'
import {
  TouchableOpacity
} from 'react-native'

const Hook = (props, ref) => {
  const log = () => {
    console.log('hook1')
  }

  return (
    <TouchableOpacity
      onPress={() => log()}
      disabled={true}
      ref={ref} style={{width: '100%', height: 100, backgroundColor: 'gray'}}>

    </TouchableOpacity>
  )
}
export default forwardRef(Hook)
