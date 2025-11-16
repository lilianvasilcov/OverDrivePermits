'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { permitFormSchema, PermitFormData } from './validationSchema';
import { PermitRequest } from '../../../../shared/types/permit.types';
import { US_STATES } from '@/utils/constants/states';
import Input from '@/components/common/Input';
import Select from '@/components/common/Select';
import Textarea from '@/components/common/Textarea';
import Button from '@/components/common/Button/Button';
import styles from './PermitForm.module.css';

const PERMIT_TYPES = [
  { value: 'oversized', label: 'Oversized Cargo' },
  { value: 'overweight', label: 'Overweight Cargo' },
  { value: 'superload', label: 'Superload' },
  { value: 'other', label: 'Other' },
];

const PermitForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PermitFormData>({
    resolver: yupResolver(permitFormSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: PermitFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Transform form data to PermitRequest type
      const permitRequest: PermitRequest = {
        customerName: data.customerName,
        email: data.email,
        phone: data.phone,
        companyName: data.companyName || undefined,
        permitType: data.permitType as PermitRequest['permitType'],
        state: data.state,
        route: data.route || undefined,
        startDate: data.startDate || undefined,
        endDate: data.endDate || undefined,
        cargoWeight: data.cargoWeight || undefined,
        cargoDimensions: data.cargoDimensions || undefined,
        cargoType: data.cargoType || undefined,
        notes: data.notes || undefined,
      };

      const response = await axios.post('/api/permit', permitRequest);

      if (response.data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Your permit request has been submitted successfully! We will contact you soon.',
        });
        reset();
        // Scroll to top of form to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: response.data.message || 'An error occurred. Please try again.',
        });
      }
    } catch (error: any) {
      setSubmitStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to submit permit request. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const stateOptions = US_STATES.map(state => ({
    value: state.code,
    label: state.name,
  }));

  return (
    <section id="form" className={styles.formSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Request a Permit</h2>
          <p className={styles.description}>
            Fill out the form below and we&apos;ll get back to you as soon as possible
          </p>
        </div>

        {submitStatus.type && (
          <div
            className={`${styles.alert} ${
              submitStatus.type === 'success' ? styles.alertSuccess : styles.alertError
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formGrid}>
            {/* Customer Information Section */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Customer Information</h3>
              
              <Input
                label="Full Name"
                type="text"
                required
                error={errors.customerName?.message}
                {...register('customerName')}
              />

              <Input
                label="Email Address"
                type="email"
                required
                error={errors.email?.message}
                {...register('email')}
              />

              <Input
                label="Phone Number"
                type="tel"
                required
                error={errors.phone?.message}
                placeholder="(555) 123-4567"
                {...register('phone')}
              />

              <Input
                label="Company Name (Optional)"
                type="text"
                error={errors.companyName?.message}
                {...register('companyName')}
              />
            </div>

            {/* Permit Details Section */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Permit Details</h3>
              
              <Select
                label="Permit Type"
                required
                error={errors.permitType?.message}
                options={PERMIT_TYPES}
                placeholder="Select permit type"
                {...register('permitType')}
              />

              <Select
                label="State"
                required
                error={errors.state?.message}
                options={stateOptions}
                placeholder="Select a state"
                {...register('state')}
              />

              <Input
                label="Route (Optional)"
                type="text"
                error={errors.route?.message}
                placeholder="e.g., I-95, Route 66"
                helperText="Specify the route or highway if known"
                {...register('route')}
              />

              <div className={styles.dateRow}>
                <Input
                  label="Start Date (Optional)"
                  type="date"
                  error={errors.startDate?.message}
                  {...register('startDate')}
                />

                <Input
                  label="End Date (Optional)"
                  type="date"
                  error={errors.endDate?.message}
                  {...register('endDate')}
                />
              </div>
            </div>

            {/* Cargo Information Section */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Cargo Information</h3>
              
              <Input
                label="Cargo Weight (Optional)"
                type="text"
                error={errors.cargoWeight?.message}
                placeholder="e.g., 80,000 lbs"
                {...register('cargoWeight')}
              />

              <Input
                label="Cargo Dimensions (Optional)"
                type="text"
                error={errors.cargoDimensions?.message}
                placeholder="e.g., 14' H x 12' W x 50' L"
                {...register('cargoDimensions')}
              />

              <Input
                label="Cargo Type (Optional)"
                type="text"
                error={errors.cargoType?.message}
                placeholder="e.g., Construction equipment, Wind turbine"
                {...register('cargoType')}
              />
            </div>

            {/* Additional Notes Section */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Additional Information</h3>
              
              <Textarea
                label="Additional Notes (Optional)"
                error={errors.notes?.message}
                placeholder="Any additional information about your permit request..."
                rows={5}
                {...register('notes')}
              />
            </div>
          </div>

          <div className={styles.submitContainer}>
            <Button
              type="submit"
              variant="primary"
              size="large"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Permit Request'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PermitForm;
