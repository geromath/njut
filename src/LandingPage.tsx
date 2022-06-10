import { AdminPanelSettingsOutlined, AllInclusive, ArrowUpward, CardMembership, Person, SupportAgent } from "@mui/icons-material"
import { Button, Card, Checkbox, FormControl, FormHelperText, FormLabel, Grid, Icon, OutlinedInput, Paper, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"

import headerImage from './stock.jpg'

export const LandingPage = () => {
  return (
    <Container>
      <Box component='img' src={headerImage} sx={{ borderRadius: '92px', maxHeight: '230px', position: 'relative', marginLeft: 'auto', marginRight: '0', display: 'block', my: 2 }} />
      <Typography variant="h3" gutterBottom>
        Njut er et mer seriøst, tryggere og moderne datingalternativ for par og single som søker selskap
      </Typography>
      <Typography variant="h4" gutterBottom>
        Treff likesinnede som er ute etter en date, hett ligg eller sitt livs kjærlighet.
      </Typography>
      <Button variant="contained" size="large" sx={{width: 'fit-content', mt: 4, mb: 8}}>Bli medlem her</Button>

      <Grid container spacing={2}>
        <Grid item lg={6} md={6}>
          <Card>
            <Paper sx={{ borderRadius: '50px', backgroundColor: 'white', display: 'grid', placeItems: 'center', mb: 6, width: '60px', height: '60px' }}><Icon fontSize="large"><CardMembership fontSize="large" color="primary"/></Icon></Paper>
            <Typography variant="h4" sx={{my: 2}}>Gratis til premium</Typography>
            <Typography variant="h5" gutterBottom>Medlemskap er gratis. Njut har tre ulike medlemsformer: enkel, medium og premium. Moderne betalingsmetoder</Typography>
          </Card>
        </Grid>
        <Grid item lg={6} md={6}>
          <Card>
            <Paper sx={{ borderRadius: '50px', backgroundColor: 'white', display: 'grid', placeItems: 'center', mb: 6, width: '60px', height: '60px' }}><Icon fontSize="large"><AdminPanelSettingsOutlined fontSize="large" color="primary"/></Icon></Paper>
            <Typography variant="h4" sx={{my: 2}}>Sikkert & trygt</Typography>
            <Typography variant="h5" gutterBottom>Medlemskap er gratis. Njut har tre ulike medlemsformer: enkel, medium og premium. Moderne betalingsmetoder</Typography>
          </Card>
        </Grid>
        <Grid item lg={6} md={6}>
          <Card>
            <Paper sx={{ borderRadius: '50px', backgroundColor: 'white', display: 'grid', placeItems: 'center', mb: 6, width: '60px', height: '60px' }}><Icon fontSize="large"><AllInclusive fontSize="large" color="primary"/></Icon></Paper>
            <Typography variant="h4" sx={{my: 2}}>Inklusivitet</Typography>
            <Typography variant="h5" gutterBottom>Medlemskap er gratis. Njut har tre ulike medlemsformer: enkel, medium og premium. Moderne betalingsmetoder</Typography>
          </Card>
        </Grid>
        <Grid item lg={6} md={6}>
          <Card>
            <Paper sx={{ borderRadius: '50px', backgroundColor: 'white', display: 'grid', placeItems: 'center', mb: 6, width: '60px', height: '60px' }}><Icon fontSize="large"><SupportAgent fontSize="large" color="primary"/></Icon></Paper>
            <Typography variant="h4" sx={{my: 2}}>Kundeservice</Typography>
            <Typography variant="h5" gutterBottom>Medlemskap er gratis. Njut har tre ulike medlemsformer: enkel, medium og premium. Moderne betalingsmetoder</Typography>
          </Card>
        </Grid>
      </Grid>
      <Typography variant="h3" gutterBottom sx={{ my: 3 }}>
        Hva er Njut og hvorfor skapte vi community?
      </Typography>
      <Box component='img' src={headerImage} sx={{ borderRadius: '92px', maxHeight: '230px', position: 'relative', marginLeft: 'auto', marginRight: '0', display: 'block', my: 2 }} />
      <Typography variant="h4" gutterBottom>
        Det finnes allerede så mange ulike datingsider og apper, hva gjør Njut forskjellig?
      </Typography>
      <Typography variant="h4" gutterBottom>
        Stemmer. Det finnes haugevis, faktisk. Det som skiller oss er vår kombinasjon. Vi har tatt de beste funksjonene fra de tre mest besøkte datingsidene, og forbedret de!
      </Typography>
      <Button variant="contained" size="large" sx={{width: 'fit-content', mt: 4, mb: 8}}>Les mer</Button>
      <Card>
        <Paper sx={{ borderRadius: '50px', backgroundColor: 'white', display: 'grid', placeItems: 'center', mb: 6, width: '60px', height: '60px' }}><Icon fontSize="large"><Person fontSize="large" color="primary"/></Icon></Paper>
        <Typography variant="h4" sx={{my: 2}}>Opprett bruker</Typography>
        
        <FormControl sx={{ m: 1 }} variant="outlined" fullWidth={true}>
          <FormLabel id="username-helper-text">Hva vil du hete på Njut?</FormLabel>
          <OutlinedInput
            id="username"
          />
        </FormControl>
        <FormControl sx={{ m: 1 }} variant="outlined" fullWidth={true}>
          <FormLabel id="password-helper-text">Passord</FormLabel>
          <OutlinedInput
            id="password"
          />
        </FormControl>
        <FormControl sx={{ m: 1 }} variant="outlined" fullWidth={true}>
          <FormLabel id="confirm-password-helper-text">Bekreft Passord</FormLabel>
          <OutlinedInput
            id="confirm-password"
          />
        </FormControl>
        <FormControl sx={{ m: 1 }} variant="outlined" fullWidth={true}>
          <FormLabel id="email-helper-text">Epost (for verifisering)</FormLabel>
          <OutlinedInput
            id="email"
          />
        </FormControl>
        <FormControl sx={{ m: 1 }} variant="outlined" fullWidth={true}>
          <FormLabel id="mobile-helper-text">Mobilnummer (frivillig)</FormLabel>
          <OutlinedInput
            id="mobile"
          />
        </FormControl>

        <Card sx={{ bgcolor: '#FFFFFF' }}>
          <Typography variant="body1">Njut vil at du har en seriøs innstilning til å søke ligg/date/partner(s) og gjellende brukervilkår og norske lover.</Typography>
          <FormControl sx={{ display: 'grid', gridTemplateColumns: '1fr 5fr', placeItems: 'center' }}>
            <Checkbox /><FormLabel sx={{}}>Jeg er inneforstått med dette</FormLabel>
          </FormControl>
          <Button variant="contained" size="large" sx={{width: 'fit-content', mt: 4, mb: 8}}>Opprett profil</Button>
        </Card>

        <Button variant="outlined" sx={{mt: 10, mb: 8, displey: 'flex', alignContent: 'center' }} onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}><Icon fontSize="small" sx={{ mt: -1}}><ArrowUpward fontSize="small" /></Icon>Til toppen</Button>

      </Card>
    </Container>
  )
}
