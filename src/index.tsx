import React from 'react'
import { FlyInConsumer } from './FlyInProvider'

const FlyIn = ({ children }): JSX.Element => {
  return (
    <FlyInConsumer>
      {
        ({showPanel, toggleFlyIn}): JSX.Element => {
          return (
            <>
              {children}
            </>
          )
        }
      }
    </FlyInConsumer>
  )


}

export default FlyIn
