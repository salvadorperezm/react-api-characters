import { Grid, GridItem } from '@chakra-ui/react'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
const HomeLayout = ({ children }) => {
  return (
    <Grid
      templateAreas={`"header"
                  "main"
                  "footer"`}
      gridTemplateRows={'auto 1fr auto'}
      gridTemplateColumns={'1fr'}
      width='100vw'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem area={'header'}>
        <Header />
      </GridItem>
      <GridItem area={'main'}>{children}</GridItem>
      <GridItem area={'footer'}>
        <Footer />
      </GridItem>
    </Grid>
  )
}

export { HomeLayout }
