import React, { useState } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import CustomTextField from './CustomTextField';

import { commerce } from '../../lib/commerce';

const AddressForm = ({checkoutTokenId}) => {
    const methods = useForm();

    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    // Functions

    async function fetchShipoingCountries(checkoutTokenId) {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

        setShippingCountries(countries);
    }

    return (
        <div>
            <Typography variant='h6' gutterBottom>
                Shipping Address
            </Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={5}>
                        <CustomTextField name="firstName" label="First Name" required />
                        <CustomTextField name="lastname" label="Last Name" required />
                        <CustomTextField name="address1" label="Address1" required />
                        <CustomTextField name="email" label="Email" required />
                        <CustomTextField name="city" label="city" required />
                        <CustomTextField name="zip" label="Zip/Postal Code" required />
                        <Grid item xs={12} sm={6} >
                            {/* Shipping Countries */}
                            <InputLabel>Shipping Countries</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select me
                                </MenuItem>
                            </Select>

                            {/* Shipping Subdivision */}
                            <InputLabel>Shipping Subdivisions</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select me
                                </MenuItem>
                            </Select>

                            {/* Shipping options */}
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select me
                                </MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </div>
    )
}

export default AddressForm;
