import * as yup from 'yup';
import { US_STATES } from '@/utils/constants/states';

export const permitFormSchema = yup.object().shape({
  // Customer Information
  customerName: yup
    .string()
    .required('Customer name is required')
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
  
  // Company Information (optional)
  companyName: yup
    .string()
    .max(100, 'Company name must be less than 100 characters'),
  
  // Permit Details
  permitType: yup
    .string()
    .oneOf(['oversized', 'overweight', 'superload', 'other'], 'Please select a valid permit type')
    .required('Permit type is required'),
  
  state: yup
    .string()
    .required('State is required')
    .oneOf(
      US_STATES.map(s => s.code),
      'Please select a valid state'
    ),
  
  route: yup
    .string()
    .max(500, 'Route must be less than 500 characters'),
  
  startDate: yup
    .string()
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      'Please enter a valid date (YYYY-MM-DD)'
    ),
  
  endDate: yup
    .string()
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      'Please enter a valid date (YYYY-MM-DD)'
    )
    .test(
      'is-after-start',
      'End date must be after start date',
      function(value) {
        const { startDate } = this.parent;
        if (!value || !startDate) return true;
        return new Date(value) >= new Date(startDate);
      }
    ),
  
  // Cargo Information
  cargoWeight: yup
    .string()
    .max(50, 'Weight must be less than 50 characters'),
  
  cargoDimensions: yup
    .string()
    .max(200, 'Dimensions must be less than 200 characters'),
  
  cargoType: yup
    .string()
    .max(100, 'Cargo type must be less than 100 characters'),
  
  // Additional Notes
  notes: yup
    .string()
    .max(1000, 'Notes must be less than 1000 characters'),
});

export type PermitFormData = yup.InferType<typeof permitFormSchema>;

