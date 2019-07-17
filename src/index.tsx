import React from 'react'
import { FlyInConsumer } from './FlyInProvider'

interface FlyInProviderProps {
  children: object
}

const FlyIn = ({ children }: FlyInProviderProps): JSX.Element => {
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
