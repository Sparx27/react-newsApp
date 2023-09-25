import { Box, FormControl, InputLabel, MenuItem, Select, Button, Grid } from "@mui/material"
import { useContext } from "react"
import { NewsContext } from "../context/NewsContext"

const Form = () => {
  const useNews = useContext(NewsContext)
  const { category, handleCategory, country, handleCountry } = useNews

  const CATEGORIES = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Business'},
    { value: 'entertainment', label: 'Entertainment'},
    { value: 'health', label: 'Health'},
    { value: 'science', label: 'Science'},
    { value: 'sports', label: 'Sports'},
    { value: 'technology', label: 'Technology'},
  ]

  const COUNTRIES = [
    {value: 'us', label: 'United States'},
    {value: 'ca', label: 'Canada'},
    {value: 'au', label: 'Australia'},
    {value: 'ar', label: 'Argentina'},
    {value: 'br', label: 'Brasil'},
    {value: 'max', label: 'México'}
  ]

  
  return (
    <form>
        <Grid container spacing={2}>

          <Grid item xs={6} sm={6} md={6} lg={6}>
            <FormControl fullWidth>
              <InputLabel>Categories</InputLabel>
              <Select label="Categories" value={category} onChange={handleCategory}>
                {
                  CATEGORIES.map(category => (
                    <MenuItem key={category.value} value={category.value}>
                      {category.label}
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={6}>
            <FormControl fullWidth>
              <InputLabel>Countries</InputLabel>
              <Select label="Countries" value={country} onChange={handleCountry}>
                {
                  COUNTRIES.map(countr => (
                    <MenuItem key={countr.value} value={countr.value}>
                      {countr.label}
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>

        </Grid>
    </form>
  )
}

export default Form
