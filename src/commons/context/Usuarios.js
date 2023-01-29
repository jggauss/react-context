import {createContext, useState} from 'react'

export const UsuariosContext = createContext()
UsuariosContext.displayName = "Usuário"

export const UsuarioProvider =({children})=>{
    const [nome, setNome] = useState('')
    const [saldo, setSaldo] = useState(0)
    return (
        <UsuariosContext.Provider value={{nome,setNome,saldo,setSaldo}}>
            {children}
        </UsuariosContext.Provider>
    
    )
}