import React from 'react'
import {Formik} from 'formik';
import  axios  from 'axios'
import { useLocation } from 'react-router-dom';
function LeadEntryForm() {
    var {state:lead} = useLocation();

  return (
    <div className='border border-5 border-dark p-2' style={{height:'400px'}}>
        <h3>Edit LeadEntryForm</h3>
        <Formik 
        initialValues={{...lead}}
        
       onSubmit={(values,x)=>{
        axios.put("http://localhost:4000/leads/"+values.id,values)
        .then((res)=>{
            alert("Lead Updated successfully")
            console.log(x.resetForm())
        })
        .catch((err)=>{
            console.log("err::",err)
        })
       }}>
        {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit
            }) => (
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="fullname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullname}
                    placeholder='Enter FullName'
                />
                {errors.fullname && touched.fullname && errors.fullname}
                <br />
                <input
                    type="text"
                    name="phoneNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                    placeholder='Enter Phone Number'
                />
                {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                <br />
                <input
                    type="text"
                    name="watsappNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.watsappNumber}
                    placeholder='Enter Watsapp number'

                />
                {errors.watsappNumber && touched.watsappNumber && errors.watsappNumber}
                <br />
                <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder='Enter Email'
                />
                {errors.email && touched.email && errors.email}
                <br />
                <input
                    type="text"
                    name="course"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='Enter Course'
                    value={values.course}
                />
                {errors.course && touched.course && errors.course}
                <br />
                <input
                    type="text"
                    name="remarks"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.remarks}
                    placeholder='Remarks'
                />
                {errors.remarks && touched.remarks && errors.remarks}
                <br />
                <button type="submit">
                    Update
                </button>
                </form>
            )}
        </Formik>
    </div>
  )
}

export default LeadEntryForm