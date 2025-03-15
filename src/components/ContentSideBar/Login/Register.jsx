import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  dob: Yup.string().required('Date of Birth is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().matches(/^[0-9]+$/, 'Must be a valid phone number').required('Phone number is required'),
  zipCode: Yup.string().matches(/^[0-9]{5}$/, 'Invalid Zip Code').required('Zip Code is required'),
  password: Yup.string().min(6, 'Password too short').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

export default function SignupForm() {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      dob: '',
      email: '',
      phone: '',
      zipCode: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log('Form Data', values);
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg p-6 md:px-8 lg:px-10 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Create Account</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <input type="text" name="fullName" placeholder="Full name *" 
            className="w-full p-3 border rounded text-sm md:text-base" {...formik.getFieldProps('fullName')} />
          {formik.touched.fullName && formik.errors.fullName && <p className="text-red-500 text-sm">{formik.errors.fullName}</p>}

          <input type="date" name="dob" 
            className="w-full p-3 border rounded text-sm md:text-base" {...formik.getFieldProps('dob')} />
          {formik.touched.dob && formik.errors.dob && <p className="text-red-500 text-sm">{formik.errors.dob}</p>}

          <input type="email" name="email" placeholder="Work email *" 
            className="w-full p-3 border rounded text-sm md:text-base" {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}

          <input type="text" name="phone" placeholder="Phone number *" 
            className="w-full p-3 border rounded text-sm md:text-base" {...formik.getFieldProps('phone')} />
          {formik.touched.phone && formik.errors.phone && <p className="text-red-500 text-sm">{formik.errors.phone}</p>}

          <input type="text" name="zipCode" placeholder="Zip Code *" 
            className="w-full p-3 border rounded text-sm md:text-base" {...formik.getFieldProps('zipCode')} />
          {formik.touched.zipCode && formik.errors.zipCode && <p className="text-red-500 text-sm">{formik.errors.zipCode}</p>}

          <input type="password" name="password" placeholder="Password *" 
            className="w-full p-3 border rounded text-sm md:text-base" {...formik.getFieldProps('password')} />
          {formik.touched.password && formik.errors.password && <p className="text-red-500 text-sm">{formik.errors.password}</p>}

          <input type="password" name="confirmPassword" placeholder="Confirm password" 
            className="w-full p-3 border rounded text-sm md:text-base" {...formik.getFieldProps('confirmPassword')} />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className="text-red-500 text-sm">{formik.errors.confirmPassword}</p>}

          <div className="flex items-center text-sm">
            <input type="checkbox" name="terms" className="mr-2 w-4 h-4" {...formik.getFieldProps('terms')} />
            <label>
              I agree to the <span className="font-semibold">Terms of Service</span> and <span className="font-semibold">Privacy Policy</span>
            </label>
          </div>
          {formik.touched.terms && formik.errors.terms && <p className="text-red-500 text-sm">{formik.errors.terms}</p>}

          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200">
            Create
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Already a member? <span className="text-blue-500 hover:underline cursor-pointer">Log in</span>
        </p>
      </div>
    </div>
  );
}
