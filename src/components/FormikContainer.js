import React from 'react';
import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikControl from './FormikControl';

// Holds all Form elements rendered
// Default parameters are:
//      control:    input :: label:'string' name:'string' && type:'string' ...rest->additional attributes
//                  textarea :: label:'string' name:'string'  ...rest->additional attributes 
//                  select :: label:'string' name:'string' options:[{key,value}]  ...rest->additional attributes 
//                  radio :: label:'string' name:'string' type: ...rest->additional attributes 
//                  checkbox :: label:'string' name:'string' type: ...rest->additional attributes 
//                  date :: label:'string' name:'string' type: ...rest->additional attributes 
//                  chakraInput  :: label: name: type: ...rest->additional attributes 
//      

function FormikContainer() {
    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' }
    ]
    const radioOptions = [
        { key: 'Option 1', value: 'rOption1' },
        { key: 'Option 2', value: 'rOption2' },
        { key: 'Option 3', value: 'rOption3' }
    ]
    const checkboxOptions = [
        { key: 'Option 1', value: 'cOption1' },
        { key: 'Option 2', value: 'cOption2' },
        { key: 'Option 3', value: 'cOption3' }
    ]
    // define initial state
    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: [],
        birthDate: null
    }
    // define validation
    const validationSchema = yup.object({
        email: yup.string().email("Incorrect email format").required('Hello, you missed a bit'),
        description: yup.string().min(10, 'Description is too short').required('You missed a bit here :)'),
        selectOption: yup.string().required('Hello, you missed a bit'),
        radioOption: yup.string().required('Hello, you missed a bit'),
        checkboxOption: yup.array().min(1, 'Hello, you missed a bit')
    })
    // define the submit function
    const onsubmit = values => console.log('Form data: ', values)

    // return form jsx
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onsubmit}>
            {
                formik => (
                    <Form>
                        {/* Form Fields start */}
                        {console.log(formik.errors)}

                        <FormikControl
                            control='input'
                            label='Email'
                            name='email'
                            id='em1'
                            type='email'
                            placeholder='Enter email'
                        />
                        <FormikControl
                            control='textarea'
                            label='Description'
                            name='description'
                            placeholder='Tell us a little about yourself'
                        />
                        <FormikControl
                            control='select'
                            label='Pick an option'
                            name='selectOption'
                            options={dropdownOptions}
                        />
                        <FormikControl
                            control='radio'
                            label='Radio topic'
                            name='radioOption'
                            options={radioOptions}
                        />
                        <FormikControl
                            control='checkbox'
                            label='Checkbox topics'
                            name='checkboxOption'
                            options={checkboxOptions}
                        />


                        {/* Form Fields end */}
                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}

export default FormikContainer
