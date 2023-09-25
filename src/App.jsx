import { Grid, Typography, Container } from "@mui/material"
import Form from "./components/Form"
import NewsProvider from "./context/NewsContext"
import NewsList from "./components/NewsList"

function App() {

  return (
    <NewsProvider>
      <Container>
        <header>
          <Typography align="center" component='h1' variant="h3" marginY={5}>
            News Search
          </Typography>
        </header>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6} lg={5} >
            <Form />
          </Grid>
        </Grid> 

        <NewsList />
      </Container>
    </NewsProvider>
  )
}

export default App
