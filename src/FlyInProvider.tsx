import React from 'react'

const FlyInContext = React.createContext({ showPanel: false, toggleFlyIn: null })
const FlyInConsumer = FlyInContext.Consumer

interface FlyInProviderProps {
  children: object
}

const FlyInProvider = ({children}: FlyInProviderProps): JSX.Element => {
  const [showPanel, setShowPanel] = React.useState(false)

  const toggleFlyIn = (): void =>
    setShowPanel((showPanel): boolean => !showPanel)

  return (
    <FlyInContext.Provider value={{showPanel, toggleFlyIn}} >
      {children}
    </FlyInContext.Provider>
  )
}

export default FlyInProvider
export { FlyInConsumer }
