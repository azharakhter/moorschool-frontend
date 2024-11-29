import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Container, Box, FormHelperText, Paper } from '@mui/material';
import { useState } from 'react';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FormLabel from '@mui/material/FormLabel';
import { callApi } from '../../../utils/apiUtils';



export const BookingPostForm = ({ modelData }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const history = useNavigate();


    // Initialize the form's initial values
    const initialValues = {
        username: '',
        contact_person_number: '',
        from_date: null,
        end_date: null,
        email: '',
        description: ''
    };

    // Define validation schema using Yup
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Please enter your username'),
        contact_person_number: Yup.number().required('Please enter your contact number'),
        email: Yup.string().email('Invalid email').required('Please enter your email'),
        from_date: Yup.date().required('Please select a date'),
        end_date: Yup.date().required('Please select a date'),
    });

 
    const handleSubmit = async (values) => {
        
        const updatedValues = {
            bookRoom: {
                ...values,
                user_id: modelData?.user_id,
                room_id: modelData?.id
            }
        };

        setLoading(true); // Set loading state while the form is being submitted
        try {

            console.log("updatedValues",updatedValues)
            // Make a POST request to your Node.js backend
            const response = await callApi(`${process.env.REACT_APP_API_URL_LOCAL}api/room/book-room`, 'POST', updatedValues, setLoading, setError);
            if (response.status === 200) {
                setSuccessMessage("your request for the Room are submitted successfully.Room agent will contact you as soon as possibale");
                setErrorMessage(null); // Clear any previous error message

                
            } else if (response.status !== 200) {

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
                <div className="container newsletter wow fadeIn" data-wow-delay="0.1s">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="text-center p-1">
                                <div className="bg-white rounded text-center p-4">
                                    <h6 className="mb-4">{`Book Your ${modelData?.room_name}`} <span className="text-primary text-uppercase">Room</span></h6>
                                    {/* Conditionally render success or error message */}
                                    {successMessage && (
                                        <Alert severity="success">{successMessage}</Alert>
                                    )}
                                    {errorMessage && (
                                        <Alert severity="error">{errorMessage}</Alert>
                                    )}

                                    <Container maxWidth="sm">
                                        <Box >
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
                                                                    name="username"
                                                                    label="Name"
                                                                    variant="outlined"
                                                                    fullWidth
                                                                    margin="normal"
                                                                    size="small"
                                                                    error={errors.username && touched.username}
                                                                    helperText={errors.username && touched.username && errors.username}
                                                                />
                                                            </div>
                                                            <div className="col">
                                                                <Field
                                                                    as={TextField}
                                                                    name="contact_person_number"
                                                                    label="Contact Number"
                                                                    variant="outlined"
                                                                    fullWidth
                                                                    margin="normal"
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
                                                                    name="email"
                                                                    label="Email"
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
                                                            <FormLabel component="legend">Check In Data</FormLabel>
                                                                <Field
                                                                    name="from_date"
                                                                    label="From Date"
                                                                    render={({ field }) => (
                                                                        <TextField
                                                                            {...field}
                                                                            fullWidth
                                                                            variant="outlined"
                                                                            size="small"
                                                                            type="date"
                                                                            error={errors.from_date && touched.from_date}
                                                                            helperText={errors.from_date && touched.from_date && errors.from_date}
                                                                            InputLabelProps={{
                                                                                shrink: true,
                                                                            }}
                                                                        />
                                                                    )}
                                                                />
                                                            </div>
                                                            <div className="col">
                                                            <FormLabel component="legend">Check Out Data</FormLabel>
                                                                <Field
                                                                    name="end_date"
                                                                    label="To Date"
                                                                    render={({ field }) => (
                                                                        <TextField
                                                                            {...field}
                                                                            fullWidth
                                                                            variant="outlined"
                                                                            size="small"
                                                                            type="date"
                                                                            error={errors.end_date && touched.end_date}
                                                                            helperText={errors.end_date && touched.to_data && errors.end_date}
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
                                                                <FormLabel component="legend">Special Requirment</FormLabel>
                                                                <Field
                                                                    name="description"
                                                                    render={({ field }) => (
                                                                        <Box mb={2} border={1} borderColor="grey.500" borderRadius={4} p={1}>
                                                                            <TextField
                                                                                {...field}
                                                                                fullWidth
                                                                                multiline
                                                                                rows={4} // Adjust the number of rows as needed
                                                                                variant="outlined"
                                                                                size="small"
                                                                                error={errors.description && touched.description}
                                                                            />
                                                                            {errors.description && touched.description && <FormHelperText>{errors.description}</FormHelperText>}
                                                                        </Box>
                                                                    )}
                                                                />

                                                            </div>



                                                        </div>
                                             


                                                        {/* Add additional fields here as needed */}
                                                        <button
                                                            type="submit"
                                                            fullWidth
                                                            size="small"
                                                            className='btn btn-primary py-md-3 px-md-5 me-3'
                                                        >
                                                            Submit Request
                                                        </button>
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
