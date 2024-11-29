import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Box,Paper,Alert } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { callApi } from '../../../utils/apiUtils';
import { jwtDecode } from "jwt-decode";


export const UpdateUserForm = ({userData}) => {
    const [formDate, setFormDate] = useState({
        username: '',
        password: '',
        userId:userData?.id
    })
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const history = useNavigate();
    // Define validation schema using Yup
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Please enter your username'),
        password: Yup.string().required('Please enter your password'),
    });

   
    const handleSubmit = async (values) => {
        const token = localStorage.getItem('jwtToken');
        const decodedToken = jwtDecode(token);
        const userId = decodedToken ? decodedToken.userId : null;
        if (!userId) {
            throw new Error('User ID not found in JWT token');
        }
        const headerData = {
            headers: {
                Authorization: `Bearer ${token}`
              }
        }
        const response = await callApi(`${process.env.REACT_APP_API_URL_LOCAL}api/user/update-user`, 'PUT', values, setLoading, setError,headerData);
        if (response.status === 200) {
            setSuccessMessage("User are updated successfully");
            setErrorMessage(null); // Clear any previous error message
            setTimeout(() => {
                history('/dashboard/1');
                window.location.reload();
                // Redirect to the home page
            }, 3000);
        }else if (response.status !== 200) {

            setErrorMessage(`Error is occured ${response?.response?.data?.message}`)   
        }
        
    };
    return (
        <>
 <Paper elevation={3} style={{ padding: '5px', maxWidth: '100%' }}>
            <div className="container-xxl bg-white p-0">
                <div className="container newsletter mt-1 wow fadeIn" data-wow-delay="0.1s">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 ">
                            <div className="">
                                <div className="bg-white  text-center p-4">
                        
                                    <h4 className="mb-4 ">Update<span className="text-primary text-uppercase"> Information</span></h4>
                                    {/* Conditionally render success or error message */}
                                    {successMessage && (
                                        <Alert severity="success">{successMessage}</Alert>
                                    )}
                                    {errorMessage && (
                                        <Alert severity="error">{errorMessage}</Alert>
                                    )}
                               
                                    <Container maxWidth="sm">
                                        <Box mt={1} >
                                            <Formik
                                                initialValues={formDate}
                                                validationSchema={validationSchema}
                                                onSubmit={handleSubmit}
                                            >
                                                {({ errors, touched }) => (
                                                    <Form>
                                                        <Field
                                                            as={TextField}
                                                            name="username"
                                                            label={`username ${userData?.username}`}
                                                            variant="outlined"s
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            error={errors.username && touched.username}
                                                            helperText={errors.username && touched.username && errors.username}
                                                        />
                                                        <Field
                                                            as={TextField}
                                                            name="password"
                                                            label="Enter new Password"
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            type="password"
                                                          
                                                            size="small"
                                                            error={errors.password && touched.password}
                                                            helperText={errors.password && touched.password && errors.password}
                                                        />
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
        </>
    )
}