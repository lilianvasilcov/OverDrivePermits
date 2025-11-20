import * as yup from 'yup';

export const permitFormSchema = yup.object().shape({
  // Contact Information
  customerName: yup
    .string()
    .required('Full name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(
      /^[\d\s\-\(\)\+]+$/,
      'Please enter a valid phone number'
    )
    .min(10, 'Phone number must be at least 10 digits'),
  
  companyName: yup
    .string()
    .max(100, 'Company name must be less than 100 characters'),
  
  // Origin and Destination
  origin: yup
    .string()
    .required('Origin is required')
    .min(2, 'Origin must be at least 2 characters')
    .max(200, 'Origin must be less than 200 characters'),
  
  destination: yup
    .string()
    .required('Destination is required')
    .min(2, 'Destination must be at least 2 characters')
    .max(200, 'Destination must be less than 200 characters'),
  
  avoidHighways: yup
    .string()
    .oneOf(['0', '1'], 'Please select a valid route type')
    .required('Route type is required'),
  
  // Load Dimensions
  commodityLength: yup.string().max(50),
  commodityWidth: yup.string().max(50),
  commodityHeight: yup.string().max(50),
  commodityWeight: yup.string().max(50),
  
  // Equipment
  tractorTrailerId: yup.string().max(100),
  tractorTrailerDisplayName: yup.string().max(200),
  numberOfAxles: yup.string().max(10),
  moveType: yup.string().max(50),
  
  // Overall Dimensions
  length: yup.string().max(50),
  width: yup.string().max(50),
  height: yup.string().max(50),
  weightGross: yup.string().max(50),
  
  // Extra Fields
  overhangFront: yup.string().max(50),
  overhangRear: yup.string().max(50),
  kingpin: yup.string().max(50),
  
  // Promo Code
  promoCode: yup
    .string()
    .max(50, 'Promo code must be less than 50 characters'),
});

export type PermitFormData = yup.InferType<typeof permitFormSchema>;
