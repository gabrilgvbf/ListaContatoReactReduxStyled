import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FormularioContato from './containers/Formulario/Index';
import ListaContato from './containers/ListaContato';
import store from './store';
import { GlobalStyle } from './styles';

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <>
      <ListaContato />
    </>
  },
  {
    path: '/Formulario',
    element: <>
      <FormularioContato />
    </>
  }

])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />

      <RouterProvider router={rotas}></RouterProvider>
    </Provider>
  )
}

export default App;