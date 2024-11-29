import {Box , Button }from '@mui/material';


const CompaniesBtn = ({children, onSelect}) => {
  return (
    <Box sx={{m:1}}>
       <Button variant="contained" sx={{bgcolor:'#e65100'}} onClick={onSelect}>{children}</Button>
    </Box>
  )
}
export default CompaniesBtn;