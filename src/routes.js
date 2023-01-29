import { CarrinhoProvider } from 'commons/context/Carrinhos'
import { Pagamentoprovider } from 'commons/context/Pagamento'
import { UsuarioProvider } from 'commons/context/Usuarios'
import Carrinho from 'pages/Carrinho'
import Feira from 'pages/Feira'
import Login from 'pages/Login'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <UsuarioProvider>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <CarrinhoProvider>
                        <Pagamentoprovider>
                            <Route exact path="/feira">
                                <Feira />
                            </Route>

                            <Route exact path="/carrinho">
                                <Carrinho />
                            </Route>
                        </Pagamentoprovider>
                    </CarrinhoProvider>
                </UsuarioProvider>

            </Switch>
        </BrowserRouter>
    )
}
export default Router