import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Box,FormHelperText,Paper } from '@mui/material';
import { useState } from 'react';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { callApi } from '../../../utils/apiUtils';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import moment from 'moment';



export const UpdateRoomPostForm = ({modelDataUpdate,userData}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const history = useNavigate();
    const [imageFiles, setImageFiles] = useState({});
 


    // Initialize the form's initial values
    const initialValues = {
        id:modelDataUpdate?.id,
        room_name: modelDataUpdate?.room_name,
        contact_person_number: modelDataUpdate?.contact_person_number,
        rent_of_room: modelDataUpdate?.rent_of_room,
        advance_rent: modelDataUpdate?.advance_rent,

        bed_in_room: modelDataUpdate?.roomFeatures?.bed_in_room,
        bath_in_room: modelDataUpdate?.roomFeatures?.bath_in_room,
        kitchen_in_room: modelDataUpdate?.roomFeatures?.kitchen_in_room,
        wifi: modelDataUpdate?.roomFeatures?.wifi,
        room_feature_id:modelDataUpdate?.roomFeatures?.id,
        include_bills:  modelDataUpdate?.roomFeatures?.include_bills,
        person_in_room: modelDataUpdate?.roomFeatures?.person_in_room,
        to_avaible_date: moment(new Date(modelDataUpdate?.roomFeatures?.to_avaible_date)).format("YYYY-MM-DD"),
        from_end_date: moment(new Date(modelDataUpdate?.roomFeatures?.from_end_date)).format("YYYY-MM-DD"),
        descriptions: modelDataUpdate?.roomFeatures?.descriptions,
        images: [] // Initialize images as an empty array
    };

    // Define validation schema using Yup
    const validationSchema = Yup.object().shape({
        room_name: Yup.string().required('Please enter your roomname'),
        contact_person_number: Yup.number().required('Please enter your contact number'),
        rent_of_room: Yup.number().required('Please enter rent of room'),
        advance_rent: Yup.number().required('Please enter advance rent'),
        to_avaible_date: Yup.date().required('Please select a date'),
        from_end_date: Yup.date().required('Please select a date'),
        images: Yup.array().required('Please upload at least one image')
    });

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        setImageFiles(files[0]);
    };

    const handleSubmit = async (values) => {
        setLoading(true); // Set loading state while the form is being submitted

        // Create a FormData object to send form data including images
        // const formData = new FormData();
        // Object.keys(values).forEach((key) => {
        //     if (key === 'images') {
        //         // If the key is 'images', append each image file to FormData
        //         values[key].forEach((image, index) => {
        //             formData.append(`images${index}`, image);
        //         });
        //     } else {
              
        //         formData.append(key, values[key]);
        //     }
        // });
        const dataForUpdate = {
            userId:userData?.id,
            roomInfo: {
                id:values?.id,
                room_name: values?.room_name,
                contact_person_number: values?.contact_person_number,
                rent_of_room: values?.rent_of_room,
                advance_rent: values?.advance_rent,
            },
            roomFeature : {
                bed_in_room: values?.bed_in_room,
                bath_in_room: values?.bath_in_room,
                kitchen_in_room: values?.kitchen_in_room,
                wifi: values?.wifi,
                id:values?.room_feature_id,
                include_bills:  values?.include_bills,
                person_in_room: values?.person_in_room,
                to_avaible_date: values?.to_avaible_date,
                from_end_date:values?.from_end_date,
                descriptions: values?.descriptions,
            }
            
        }
        try {
            // Make a POST request to your Node.js backend
            const response = await callApi(`${process.env.REACT_APP_API_URL_LOCAL}api/room/update-room`, 'PUT', dataForUpdate, setLoading, setError);
            if (response.status === 200) {
                setSuccessMessage("Room update successfully.");
                setErrorMessage(null); // Clear any previous error message
            }else if (response.status !== 200) {

                setErrorMessage(`Error is occured ${response?.response?.data?.message}`)   
            }
        } catch (error) {
            console.error('Error:', error);
            setError(true);
            setErrorMessage('Error occurred while posting room information. Please try again later.');
        }

        setLoading(false); // Reset loading state after form submission
    };

    return (
        <Paper elevation={3} style={{ padding: '5px', maxWidth: '100%' }}>
        <div className="container-xxl bg-white p-0">
            <div className="container newsletter mt-2 wow fadeIn" data-wow-delay="0.1s">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="text-center p-1">
                            <div className="bg-white rounded text-center p-4">
                                <h4 className="mb-4">Post your  <span className="text-primary text-uppercase">Room Information</span></h4>
                                {/* Conditionally render success or error message */}
                                {successMessage && (
                                    <Alert severity="success">{successMessage}</Alert>
                                )}
                                {errorMessage && (
                                    <Alert severity="error">{errorMessage}</Alert>
                                )}
                              
                                <Container maxWidth="sm">
                                    <Box mt={2}>
                                        <Formik
                                            initialValues={initialValues}
                                            validationSchema={validationSchema}
                                            onSubmit={handleSubmit}
                                        >
                                            {({ errors, touched }) => (
                                                <Form>
                                                    <div className="row mb-3">
                                                        <div className="col">
                                                            <Field
                                                                as={TextField}
                                                                name="room_name"
                                                                label="Room name"
                                                                variant="outlined"
                                                                fullWidth
                                                                size="small"
                                                                error={errors.room_name && touched.room_name}
                                                                helperText={errors.room_name && touched.room_name && errors.room_name}
                                                            />
                                                        </div>
                                                        <div className="col">
                                                            <Field
                                                                as={TextField}
                                                                name="contact_person_number"
                                                                label="Contact number"
                                                                variant="outlined"
                                                                fullWidth
                                                                size="small"
                                                                error={errors.contact_person_number && touched.contact_person_number}
                                                                helperText={errors.contact_person_number && touched.contact_person_number && errors.contact_person_number}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col">
                                                            <Field
                                                                as={TextField}
                                                                name="rent_of_room"
                                                                label="Rent of room"
                                                                variant="outlined"
                                                                fullWidth
                                                                size="small"
                                                                error={errors.rent_of_room && touched.rent_of_room}
                                                                helperText={errors.rent_of_room && touched.rent_of_room && errors.rent_of_room}
                                                            />
                                                        </div>
                                                        <div className="col">
                                                            <Field
                                                                as={TextField}
                                                                name="advance_rent"
                                                                label="Advance rent"
                                                                variant="outlined"
                                                                fullWidth
                                                                size="small"
                                                                error={errors.advance_rent && touched.advance_rent}
                                                                helperText={errors.advance_rent && touched.advance_rent && errors.advance_rent}
                                                            />
                                                        </div>
                                                    </div>


                                                    <div className="row mb-3">
                                                        <div className="col">
                                                            <Field
                                                                as={TextField}
                                                                name="bed_in_room"
                                                                label="How many bed in the room"
                                                                variant="outlined"
                                                                fullWidth
                                                                size="small"
                                                                error={errors.bed_in_room && touched.bed_in_room}
                                                                helperText={errors.bed_in_room && touched.bed_in_room && errors.bed_in_room}
                                                            />
                                                        </div>
                                                        <div className="col">
                                                            <Field
                                                                as={TextField}
                                                                name="bath_in_room"
                                                                label="How many bath in the room"
                                                                variant="outlined"
                                                                fullWidth
                                                                size="small"
                                                                error={errors.bath_in_room && touched.bath_in_room}
                                                                helperText={errors.bath_in_room && touched.bath_in_room && errors.bath_in_room}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col">
                                                            <Field
                                                                as={TextField}
                                                                name="kitchen_in_room"
                                                                label="How many kitchen in the room"
                                                                variant="outlined"
                                                                fullWidth
                                                                size="small"
                                                                error={errors.kitchen_in_room && touched.kitchen_in_room}
                                                                helperText={errors.kitchen_in_room && touched.kitchen_in_room && errors.kitchen_in_room}
                                                            />
                                                        </div>
                                                        <div className="col">
                                                            <Field
                                                                as={TextField}
                                                                name="person_in_room"
                                                                label="How many person in the room"
                                                                variant="outlined"
                                                                fullWidth
                                                                size="small"
                                                                error={errors.person_in_room && touched.person_in_room}
                                                                helperText={errors.person_in_room && touched.person_in_room && errors.person_in_room}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3">
                                                        <div className="col">
                                                            <Field
                                                                name="to_avaible_date"
                                                                label="Available from Date"
                                                                render={({ field }) => (
                                                                    <TextField
                                                                        {...field}
                                                                        fullWidth
                                                                        variant="outlined"
                                                                        size="small"
                                                                        type="date"
                                                                        error={errors.to_avaible_date && touched.to_avaible_date}
                                                                        helperText={errors.to_avaible_date && touched.to_avaible_date && errors.to_avaible_date}
                                                                        InputLabelProps={{
                                                                            shrink: true,
                                                                        }}
                                                                    />
                                                                )}
/>
                                                        </div>
                                                        <div className="col">
                                                            <Field
                                                                name="from_end_date"
                                                                label="Available to Date"
                                                                render={({ field }) => (
                                                                    <TextField
                                                                        {...field}
                                                                        fullWidth
                                                                        variant="outlined"
                                                                        size="small"
                                                                        type="date"
                                                                        error={errors.from_end_date && touched.from_end_date}
                                                                        helperText={errors.from_end_date && touched.from_end_date && errors.from_end_date}
                                                                        InputLabelProps={{
                                                                            shrink: true,
                                                                        }}
                                                                    />
                                                                )}
/>
                                                        </div>
                                                      
                                                        
                                                    </div>

                                                    <div className="row mb-3">
                                                        <div className="col">
                                                            <FormControl component="fieldset">
                                                                <FormLabel component="legend">Wifi Included</FormLabel>
                                                                <Field name="wifi">
                                                                    {({ field }) => (
                                                                        <RadioGroup {...field} row defaultValue="false">
                                                                            <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                                                            <FormControlLabel value="false" control={<Radio />} label="No" />
                                                                        </RadioGroup>
                                                                    )}
                                                                </Field>
                                                                {errors.wifi && touched.wifi && (
                                                                    <div className="error">{errors.wifi}</div>
                                                                )}
                                                            </FormControl>
                                                        </div>
                                                        <div className="col">
                                                            <FormControl component="fieldset">
                                                                <FormLabel component="legend">bills Included</FormLabel>
                                                                <Field name="include_bills">
                                                                    {({ field }) => (
                                                                        <RadioGroup {...field} row defaultValue="true">
                                                                            <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                                                            <FormControlLabel value="false" control={<Radio />} label="No" />
                                                                        </RadioGroup>
                                                                    )}
                                                                </Field>
                                                                {errors.include_bills && touched.include_bills && (
                                                                    <div className="error">{errors.include_bills}</div>
                                                                )}
                                                            </FormControl>
                                                        </div>
                                                        
                                                        
                                                    </div>
                                                    
                                                    <div className="row mb-3">
                                                        <div className="col">
                                                        <FormLabel component="legend">Other description</FormLabel>
                                                            <Field
                                                                name="descriptions"
                                                                render={({ field }) => (
                                                                    <Box mb={2} border={1} borderColor="grey.500" borderRadius={4} p={1}>
                                                                        <TextField
                                                                            {...field}
                                                                            fullWidth
                                                                            multiline
                                                                            rows={4} // Adjust the number of rows as needed
                                                                            variant="outlined"
                                                                            size="small"
                                                                            error={errors.descriptions && touched.descriptions}
                                                                        />
                                                                        {errors.descriptions && touched.descriptions && <FormHelperText>{errors.descriptions}</FormHelperText>}
                                                                    </Box>
                                                                )}
                                                            />

                                                        </div>
                                                       
                                                        
                                                        
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col">
                                                        <FormLabel component="legend">Other description</FormLabel>
                                                            <Field
                                                                name="images"
                                                                render={({ field }) => (
                                                                    <div>
                                                                        <input
                                                                            {...field}
                                                                            id="images"
                                                                            type="file"
                                                                            onChange={handleImageChange}
                                                                             // Allow multiple image uploads if needed
                                                                        />
                                                                        {errors.images && touched.images && <div>{errors.images}</div>}
                                                                    </div>
                                                                )}
                                                            />


                                                        </div>
                                                       
                                                        
                                                        
                                                    </div>

                                                
                                                    
                                                    {/* Add additional fields here as needed */}
                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        color="primary"
                                                        fullWidth
                                                        size="small"
                                                    >
                                                        Update
                                                    </Button>
                                                </Form>
                                            )}
                                        </Formik>
                                    </Box>
                                    </Container>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Paper>
    );
};
