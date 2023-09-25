import { useContext } from "react"
import { NewsContext } from "../context/NewsContext"
import { Grid, Typography } from "@mui/material"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import NewCard from "./NewCard"
import Spinner from "./Spinner"

const NewsList = () => {
  const { news, loading, totalNews, page, handlePageChange } = useContext(NewsContext)

  const totalPages = Math.ceil(totalNews / 20)

  return (
    <>
      <Typography component={"h2"} variant="h3" align="center" my={5} sx={{ fontWeight: "light" }}>
        Find you news
      </Typography>
    
      {
        loading ? <Spinner />
          : (
            <>
            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="flex-start">
              {
                news.map((n) => {
                  if(n.author != null) {
                    return <NewCard ne={n} key={n.url} />
                  }
                })
              }
            </Grid>

            <Stack 
              spacing={2}
              alignItems={'center'}
              sx={{ marginY: 5 }}
            >
              <Pagination count={totalPages} page={page} color="primary" onChange={handlePageChange} />
            </Stack>
            </>
          )
      }
    </>
  )
}

export default NewsList
