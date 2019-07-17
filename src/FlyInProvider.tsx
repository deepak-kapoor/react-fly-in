import React from 'react'

const FlyInContext = React.createContext()
const FlyInConsumer = FlyInContext.Consumer

const FlyInProvider = ({children}): JSX.Element => {
  const [showPanel, setShowPanel] = React.useState(false)

  const toggleFlyIn = (): null =>
    setShowPanel((showPanel): null => !showPanel)

  return (
    <FlyInContext.Provider value={{showPanel, toggleFlyIn}} >
      {children}
    </FlyInContext.Provider>
  )
}

export default FlyInProvider
export { FlyInConsumer }
