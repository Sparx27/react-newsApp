import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Link, Typography } from "@mui/material"

const NewCard = ({ ne }) => {
  const { description, source/*.name*/, title, url, urlToImage } = ne

  return (
    <Grid item sm={12} md={6} lg={4}>
      <Card variant="outlined" sx={{ borderRadius: 2 }}>
{/*         {
          urlToImage && <CardMedia component="img" height="250" url={urlToImage} alt={`image of ${title}`} />
        } */}

        <CardContent>
          <Typography variant="body1" color="error">{source.name}</Typography>
          <Typography variant="h5" mb={1}>{title}</Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>

        <CardActions>
          <Link
            href={url}
            target="_blank"
            variant="button"
            width="100%"
            textAlign="center"
            sx={{ textDecoration: "none" }}
          >Read New</Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default NewCard
