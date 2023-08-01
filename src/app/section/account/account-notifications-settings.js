import {
  Card,
  CardContent,
  Divider,
  Stack,
  Switch,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';

export const AccountNotificationsSettings = () => (
  <Card>
    <CardContent>
      <Grid
        container
        spacing={3}
      >
        <Grid
          xs={12}
          md={4}
        >
          <Typography variant="h6" sx={{fontWeight: 'bold', fontFamily: 'Plus Jakarta Sans', fontSize:'18px'}}>
            In-App
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={8}
        >
          <Stack
            divider={<Divider />}
            spacing={3}
          >
            <Stack
              alignItems="flex-start"
              direction="row"
              justifyContent="space-between"
              spacing={3}
            >
              <Stack spacing={1}>
                <Typography variant="subtitle1">
                  New messages
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  Lorem ipsum
                </Typography>
              </Stack>
              <Switch defaultChecked />
            </Stack>
            <Stack
              alignItems="flex-start"
              direction="row"
              justifyContent="space-between"
              spacing={3}
            >
              <Stack spacing={1}>
                <Typography variant="subtitle1">
                  Job applicants
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Lorem ipsum
                </Typography>
              </Stack>
              <Switch />
            </Stack>
            <Stack
              alignItems="flex-start"
              direction="row"
              justifyContent="space-between"
              spacing={3}
            >
              <Stack spacing={1}>
                <Typography variant="subtitle1">
                  Influencer signups
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Lorem ipsum
                </Typography>
              </Stack>
              <Switch defaultChecked />
            </Stack>
            <Stack
              alignItems="flex-start"
              direction="row"
              justifyContent="space-between"
              spacing={3}
            >
              <Stack spacing={1}>
                <Typography variant="subtitle1">
                  Influencer added to database
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Lorem ipsum
                </Typography>
              </Stack>
              <Switch defaultChecked />
            </Stack>
            <Stack
              alignItems="flex-start"
              direction="row"
              justifyContent="space-between"
              spacing={3}
            >
              <Stack spacing={1}>
                <Typography variant="subtitle1">
                  Membership
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Lorem ipsum
                </Typography>
              </Stack>
              <Switch defaultChecked />
            </Stack>
          </Stack>

        </Grid>
      </Grid>
      <Divider sx={{ my: 3 }} />
      <Grid
        container
        spacing={3}
      >
        <Grid
          xs={12}
          md={4}
        >
          <Typography variant="h6" sx={{fontWeight: 'bold', fontFamily: 'Plus Jakarta Sans', fontSize:'18px'}}>
          E-mail
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={8}
        >
          <Stack
            divider={<Divider />}
            spacing={3}
          >
            <Stack
              alignItems="flex-start"
              direction="row"
              justifyContent="space-between"
              spacing={3}
            >
              <Stack spacing={1}>
                <Typography variant="subtitle1">
                  New messages
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  Lorem ipsum
                </Typography>
              </Stack>
              <Switch defaultChecked />
            </Stack>
            <Stack
              alignItems="flex-start"
              direction="row"
              justifyContent="space-between"
              spacing={3}
            >
              <Stack spacing={1}>
                <Typography variant="subtitle1">
                  Job applicants
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Lorem ipsum
                </Typography>
              </Stack>
              <Switch />
            </Stack>
            <Stack
              alignItems="flex-start"
              direction="row"
              justifyContent="space-between"
              spacing={3}
            >
              <Stack spacing={1}>
                <Typography variant="subtitle1">
                  Influencer signups
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Lorem ipsum
                </Typography>
              </Stack>
              <Switch defaultChecked />
            </Stack>
            <Stack
              alignItems="flex-start"
              direction="row"
              justifyContent="space-between"
              spacing={3}
            >
              <Stack spacing={1}>
                <Typography variant="subtitle1">
                  Influencer added to database
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Lorem ipsum
                </Typography>
              </Stack>
              <Switch defaultChecked />
            </Stack>
            <Stack
              alignItems="flex-start"
              direction="row"
              justifyContent="space-between"
              spacing={3}
            >
              <Stack spacing={1}>
                <Typography variant="subtitle1">
                  Membership
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Lorem ipsum
                </Typography>
              </Stack>
              <Switch defaultChecked />
            </Stack>
          </Stack>

        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
