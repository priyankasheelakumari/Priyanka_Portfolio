import {Box , Button }from '@mui/material';


const CompaniesBtn = ({children, onSelect}) => {
  return (
    <Box sx={{m:1}}>
       <Button variant="contained" sx={{bgcolor:'#6200ea'}} onClick={onSelect}>{children}</Button>
    </Box>
  )
}
export default CompaniesBtn;