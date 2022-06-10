import { Button, Typography } from '@mui/material'
import { Container } from '@mui/system'

export const Navigation = () => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
      <Typography>NJUT</Typography>
      <Button variant="outlined" sx={{height: '60%', p: 2, px: 3}}>Logg inn</Button>
    </Container>
  )
}


// <ColorSwitch /> can be added later