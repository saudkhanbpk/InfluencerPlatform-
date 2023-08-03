import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import { format } from 'date-fns';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Link,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { PropertyList } from 'src/components/property-list';
import { PropertyListItem } from 'src/components/property-list-item';
import { AccountPlanIcon } from './account-plan-icon';
import { baseUrl } from '@/app/BaseUrl';
import axios from 'axios';

const plans = [
  {
    id: 'startup',
    icon: <AccountPlanIcon name="startup" />,
    name: 'free plan',
    price: 0
  },
  {
    id: 'standard',
    icon: <AccountPlanIcon name="standard" />,
    name: 'Standard',
    price: 99
  },

];

export const AccountBillingSettings = (props) => {
  const { plan: currentPlan = 'standard', invoices = [] ,data} = props;
  const [selectedPlan, setSelectedPlan] = useState(currentPlan);
  const [firstName, setFirstName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [country, setCountry] = useState('');
  console.log("userdsdsd", data)
  console.log("cardHolderName", data.cardHolderName)
  useEffect(() => {
    setFirstName(data.cardHolderName)
    setCardNumber(data.cardNumber)
    setCountry(data.country)

  }, []);
  return (
    <Stack
      spacing={4}
      {...props}>
      <Card>
        <CardHeader
          title="Change Plan"
          subheader="You can upgrade and downgrade whenever you want"
        />
        <CardContent sx={{ pt: 0 }}>
          <div>
            <Grid
              container
              spacing={3}
            >
              {plans.map((plan) => {
                const isSelected = plan.id === selectedPlan;
                const isCurrent = plan.id === currentPlan;
                const price = numeral(plan.price).format('$0,0.00');

                return (
                  <Grid
                    key={plan.id}
                    xs={12}
                    sm={4}
                  >
                    <Card
                      onClick={() => setSelectedPlan(plan.id)}
                      sx={{
                        cursor: 'pointer',
                        ...(isSelected && {
                          borderColor: 'primary.main',
                          borderWidth: 2,
                          m: '-1px'
                        })
                      }}
                      variant="outlined"
                    >
                      <CardContent>
                        <Box
                          sx={{
                            height: 52,
                            width: 52,
                            '& img': {
                              height: 'auto',
                              width: '100%'
                            }
                          }}
                        >
                          {plan.icon}
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            mb: 1,
                            mt: 1
                          }}
                        >
                          <Typography variant="h5">
                            {price}
                          </Typography>
                          <Typography
                            color="text.secondary"
                            sx={{
                              mt: 'auto',
                              ml: '4px'
                            }}
                            variant="body2"
                          >
                            /mo
                          </Typography>
                        </Box>
                        <Stack
                          alignItems="center"
                          direction="row"
                          justifyContent="space-between"
                          spacing={3}
                        >
                          <Typography variant="overline">
                            {plan.name}
                          </Typography>
                          {isCurrent && (
                            <Typography
                              color="primary.main"
                              variant="caption"
                            >
                              Using now
                            </Typography>
                          )}
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </div>
          <Divider sx={{ my: 3 }} />
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Typography  variant="h6" sx={{fontWeight: 'bold', fontFamily: 'Plus Jakarta Sans', fontSize:'18px'}}>
              Billing details
            </Typography>
            <Button
              color="primary"
              startIcon={(
                <SvgIcon>
                  <Edit02Icon />
                </SvgIcon>
              )}
            >
              Edit
            </Button>
          </Box>
          <Box
            sx={{
              border: 1,
              borderColor: 'divider',
              borderRadius: 1,
              mt: 3,
              fontWeight: 'bold', fontFamily: 'Plus Jakarta Sans', fontSize:'18px'
            }}
          >
            <PropertyList>
              <PropertyListItem
                align="horizontal"
                divider
                label="Billing name"
                value={firstName}
              />
              <PropertyListItem
                align="horizontal"
                divider
                label="Card number"
                value={cardNumber}
              />
              <PropertyListItem
                align="horizontal"
                divider
                label="Country"
                value={country}
              />
              <PropertyListItem
                align="horizontal"
                label="Zip / Postal code"
                value="667123"
              />
            </PropertyList>
          </Box>
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ mt: 3, fontWeight:'400', fontSize:'14px' }}
          >
            We cannot refund once you purchased a subscription, but you can always
            <Link
              href="#"
              sx={{ ml: '4px' }}
              underline="none"
              variant="body2"
            >
              Cancel
            </Link>
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              mt: 3
            }}
          >
            <Button
              sx={{
                ml: { xs: 0, md: 2 }, // Adjusted margin left for mobile and tablet
                px: { xs: 1, md: 4 }, // Adjusted padding for mobile and tablet
                py: { xs: 1, md: 2 }, // Adjusted padding for mobile and tablet
                color: '#FFFFFF',
                backgroundColor: '#2970FF',
                fontWeight: 600,
                lineHeight: '24px',
                borderRadius: '12px',

                mb: { xs: 2, md: 0 } // Adjusted margin bottom for mobile and tablet
              }}

              type="submit"
              variant="contained"
            >
               Update plan
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Card>
        <CardHeader
          title="Invoice history"
          subheader="You can view and download all your previous invoices here. If you’ve just made a payment, it may take a few hours for it to appear in the table below."
        />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Date
              </TableCell>
              <TableCell>
                Total (incl. tax)
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => {
              const createdAt = format(invoice.createdAt, 'dd MMM yyyy');
              const amount = numeral(invoice.amount).format('$0,0.00');

              return (
                <TableRow key={invoice.id}>
                  <TableCell>
                    {createdAt}
                  </TableCell>
                  <TableCell>
                    {amount}
                  </TableCell>
                  <TableCell align="right">
                    <Link
                      color="primary"
                      underline="always"
                      href="#"
                    >
                      View Invoice
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Card>
    </Stack>
  );
};

AccountBillingSettings.propTypes = {
  plan: PropTypes.string,
  invoices: PropTypes.array
};
