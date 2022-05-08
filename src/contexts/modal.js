import React from 'react'

export const ModalContextContainer = React.createContext([]);

export const useModal = () => {
    const [modal] = React.useContext(ModalContextContainer)  
    return modal
}

export const useSetModal = () => {
    const [modal, setModal] = React.useContext(ModalContextContainer)  
    return React.useCallback((title, body, buttons, image) => setModal({
      title, body, image, buttons
    }), [setModal])
}

export const useCloseModal = () => {
    const [modal, setModal] = React.useContext(ModalContextContainer)  
    return React.useCallback(() => setModal({}))
}

export const ModalContext = ({children}) => {
    const [modal, setModal] = React.useState({})
    const value = React.useMemo(()=> [modal, setModal], [modal, setModal])
    return <ModalContextContainer.Provider value={value}>{children}</ModalContextContainer.Provider>
  }



