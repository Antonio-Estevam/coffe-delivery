import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defult'
import { GlobalStyle } from './styles/global'
import { DefaultLayout } from './layouts'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>olá mundo </h1>
      <DefaultLayout />
      <GlobalStyle />
    </ThemeProvider>
  )
}
