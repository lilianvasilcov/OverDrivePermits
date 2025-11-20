'use client';

import React, { useState, lazy, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { permitFormSchema, PermitFormData } from './validationSchema';
import { PermitRequest } from '@/types/permit.types';
import { EQUIPMENT_OPTIONS } from '@/utils/constants/equipment';
import { US_STATES } from '@/utils/constants/states';
import Input from '@/components/common/Input';
import Select from '@/components/common/Select';
import Button from '@/components/common/Button/Button';
import StateSelectorDropdown from './StateSelectorDropdown';
import styles from './PermitForm.module.css';

// Lazy load the map component for better performance
const StateSelectionMap = lazy(() => import('./StateSelectionMap'));

const PermitForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showExtraFields, setShowExtraFields] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<PermitFormData>({
    resolver: yupResolver(permitFormSchema),
    mode: 'onBlur',
    defaultValues: {
      avoidHighways: '0',
      numberOfAxles: '5',
      moveType: 'dispatch',
    },
  });

  const selectedEquipment = watch('tractorTrailerId');
  const origin = watch('origin');
  const destination = watch('destination');
  const [selectedStates, setSelectedStates] = useState<string[]>([]);

  // Update number of axles when equipment changes
  React.useEffect(() => {
    if (selectedEquipment) {
      const equipment = EQUIPMENT_OPTIONS.find(eq => eq.value === selectedEquipment);
      if (equipment) {
        setValue('numberOfAxles', equipment.axles.toString());
      }
    }
  }, [selectedEquipment, setValue]);

  // Handle state selection toggle
  const handleStateToggle = (stateCode: string) => {
    setSelectedStates(prev => {
      if (prev.includes(stateCode)) {
        return prev.filter(code => code !== stateCode);
      } else {
        return [...prev, stateCode];
      }
    });
  };

  const onSubmit = async (data: PermitFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Transform form data to PermitRequest type
      const permitRequest: PermitRequest = {
        // Contact Information
        customerName: data.customerName,
        email: data.email,
        phone: data.phone,
        companyName: data.companyName || undefined,
        // Route Information
        origin: data.origin,
        destination: data.destination,
        avoidHighways: data.avoidHighways,
        // Selected States
        selectedStates: selectedStates.map(code => {
          const state = US_STATES.find(s => s.code === code);
          return state?.name || code;
        }),
        // Load Dimensions
        commodityLength: data.commodityLength,
        commodityWidth: data.commodityWidth,
        commodityHeight: data.commodityHeight,
        commodityWeight: data.commodityWeight,
        // Equipment
        tractorTrailerId: data.tractorTrailerId,
        tractorTrailerDisplayName: data.tractorTrailerDisplayName,
        numberOfAxles: data.numberOfAxles,
        moveType: data.moveType,
        // Overall Dimensions
        length: data.length,
        width: data.width,
        height: data.height,
        weightGross: data.weightGross,
        // Extra Fields
        overhangFront: data.overhangFront,
        overhangRear: data.overhangRear,
        kingpin: data.kingpin,
        // Promo Code
        promoCode: data.promoCode || undefined,
      };

      const response = await axios.post('/api/permit', permitRequest);

      if (response.data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Your quote request has been submitted successfully! We will contact you soon.',
        });
        reset();
        setShowExtraFields(false);
        setSelectedStates([]);
        // Scroll to top of form to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: response.data.message || 'An error occurred. Please try again.',
        });
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to submit quote request. Please try again later.';
      const errorDetails = error.response?.data?.error;
      
      setSubmitStatus({
        type: 'error',
        message: errorDetails && process.env.NODE_ENV === 'development' 
          ? `${errorMessage} (${errorDetails})` 
          : errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const equipmentOptions = [
    { value: '', label: 'Click here to add tractor and trailer' },
    ...EQUIPMENT_OPTIONS.map(eq => ({
      value: eq.value,
      label: eq.label,
    })),
  ];

  const customerName = watch('customerName');
  const email = watch('email');
  const phone = watch('phone');
  const isFormValid = customerName && email && phone && origin && destination;

  return (
    <section id="form" className={styles.formSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Request a Quote</h2>
          <p className={styles.description}>
            Fill out the form below and we&apos;ll get back to you with a quote for your permit needs
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

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form} autoComplete="off" noValidate>
          {/* Contact Information Section */}
            <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contact Information</h3>
            <div className={styles.row}>
              <div className={styles.colMd6}>
              <Input
                label="Full Name"
                type="text"
                required
                error={errors.customerName?.message}
                {...register('customerName')}
              />
              </div>
              <div className={styles.colMd6}>
              <Input
                label="Email Address"
                type="email"
                required
                error={errors.email?.message}
                {...register('email')}
              />
              </div>
              <div className={styles.colMd6}>
              <Input
                label="Phone Number"
                type="tel"
                required
                error={errors.phone?.message}
                placeholder="(555) 123-4567"
                {...register('phone')}
              />
              </div>
              <div className={styles.colMd6}>
              <Input
                label="Company Name (Optional)"
                type="text"
                error={errors.companyName?.message}
                {...register('companyName')}
              />
              </div>
            </div>
            </div>

          <hr className={styles.hr} />

          <div id="origin-destination-load-dimensions">
            <div className={styles.row} id="origin-destination">
              <div className={styles.colMd6}>
                <Input
                  label={
                    <>
                      <i className="fa fa-map-marker fa-fw"></i>
                      <span className={styles.iconText}>Origin</span>
                    </>
                  }
                  type="text"
                  placeholder="Houston or 77001"
                  error={errors.origin?.message}
                  {...register('origin')}
                />
              </div>
              <div className={styles.colMd6}>
                <Input
                  label={
                    <>
                      <i className="fa fa-map-marker fa-fw"></i>
                      <span className={styles.iconText}>Destination</span>
                    </>
                  }
                  type="text"
                  placeholder="Chicago or 60007"
                  error={errors.destination?.message}
                  {...register('destination')}
                />
              </div>
              <div className={styles.colMd12} id="interstate-noninterstate">
                <div className={styles.radioGroup}>
                  <span className={styles.radioInline}>
                    <label htmlFor="quote_avoid_highways_0">
                      <input
                        type="radio"
                        value="0"
                        id="quote_avoid_highways_0"
                        {...register('avoidHighways')}
              />
                      Interstate
                    </label>
                  </span>
                  <span className={styles.radioInline}>
                    <label htmlFor="quote_avoid_highways_1">
                      <input
                        type="radio"
                        value="1"
                        id="quote_avoid_highways_1"
                        {...register('avoidHighways')}
                      />
                      Non-Interstate
                    </label>
                  </span>
                </div>
              </div>
            </div>

            <hr className={styles.hr} />

            {/* State Selection - Desktop Map / Mobile Dropdown */}
            <div className={styles.row}>
              <div className={styles.colMd12}>
                <h4 className={styles.sectionTitleSmall}>Select States</h4>
                
                {/* Desktop: Show interactive map */}
                <div className={styles.mapDesktop}>
                  <Suspense fallback={
                    <div className={styles.mapLoading}>
                      <p>Loading map...</p>
                    </div>
                  }>
                    <StateSelectionMap
                      selectedStates={selectedStates}
                      onStateToggle={handleStateToggle}
                    />
                  </Suspense>
                </div>

                {/* Mobile: Show dropdown selector */}
                <div className={styles.mapMobile}>
                  <StateSelectorDropdown
                    selectedStates={selectedStates}
                    onStateToggle={handleStateToggle}
                  />
                </div>
              </div>
            </div>

            <hr className={styles.hr} />

            <div className={styles.row} id="load_dimensions">
              <div className={styles.colMd12}>
                <h4 className={styles.sectionTitleSmall}>Load Dimensions</h4>
              </div>
              <div className={styles.colMd3}>
                <Input
                  label={
                    <>
                      <i className="fa fa-arrows-h fa-fw"></i>
                      <span className={styles.iconText}>Length</span>
                    </>
                  }
                  type="text"
                  placeholder="30'"
                  error={errors.commodityLength?.message}
                  {...register('commodityLength')}
              />
              </div>
              <div className={styles.colMd3}>
              <Input
                  label={
                    <>
                      <i className="fa fa-expand fa-fw"></i>
                      <span className={styles.iconText}>Width</span>
                    </>
                  }
                type="text"
                  placeholder="5'6&quot;"
                  error={errors.commodityWidth?.message}
                  {...register('commodityWidth')}
              />
              </div>
              <div className={styles.colMd3}>
                <Input
                  label={
                    <>
                      <i className="fa fa-arrows-v fa-fw"></i>
                      <span className={styles.iconText}>Height</span>
                    </>
                  }
                  type="text"
                  placeholder="10'6&quot;"
                  error={errors.commodityHeight?.message}
                  {...register('commodityHeight')}
                />
              </div>
              <div className={styles.colMd3}>
                <Input
                  label={
                    <>
                      <i className="fa fa-lock fa-fw"></i>
                      <span className={styles.iconText}>Weight</span>
                    </>
                  }
                  type="text"
                  placeholder="25000"
                  error={errors.commodityWeight?.message}
                  {...register('commodityWeight')}
                />
              </div>
              </div>
            </div>

          <div id="tractor-trailer-overall-dimensions">
            <div className={styles.row} id="tractor_trailer_dimensions">
              <div className={styles.colMd12}>
                <h4 className={styles.sectionTitleSmall}>Equipment</h4>
                <div className={styles.equipmentSelector}>
                  <Select
                    options={equipmentOptions}
                    placeholder="Click here to add tractor and trailer"
                    error={errors.tractorTrailerId?.message}
                    {...register('tractorTrailerId', {
                      onChange: (e) => {
                        const value = e.target.value;
                        if (value) {
                          const equipment = EQUIPMENT_OPTIONS.find(eq => eq.value === value);
                          if (equipment) {
                            setValue('tractorTrailerDisplayName', equipment.label);
                            setValue('numberOfAxles', equipment.axles.toString());
                          }
                        }
                      },
                    })}
                  />
                </div>
              </div>
            </div>

            <div className={styles.row} id="overall_dimensions">
              <div className={styles.colMd12}>
                <h4 className={styles.sectionTitleSmall}>Overall Dimensions</h4>
              </div>
              <div className={styles.colMd3}>
              <Input
                  label={
                    <>
                      <i className="fa fa-arrows-h fa-fw"></i>
                      <span className={styles.iconText}>Length</span>
                    </>
                  }
                type="text"
                  placeholder="75'"
                  error={errors.length?.message}
                  {...register('length')}
              />
              </div>
              <div className={styles.colMd3}>
              <Input
                  label={
                    <>
                      <i className="fa fa-expand fa-fw"></i>
                      <span className={styles.iconText}>Width</span>
                    </>
                  }
                type="text"
                  placeholder="8'6&quot;"
                  error={errors.width?.message}
                  {...register('width')}
              />
              </div>
              <div className={styles.colMd3}>
              <Input
                  label={
                    <>
                      <i className="fa fa-arrows-v fa-fw"></i>
                      <span className={styles.iconText}>Height</span>
                    </>
                  }
                type="text"
                  placeholder="13'6&quot;"
                  error={errors.height?.message}
                  {...register('height')}
              />
            </div>
              <div className={styles.colMd3}>
                <Input
                  label={
                    <>
                      <i className="fa fa-truck fa-fw"></i>
                      <span className={styles.iconText}>Weight</span>
                    </>
                  }
                  type="text"
                  placeholder="80000"
                  error={errors.weightGross?.message}
                  {...register('weightGross')}
              />
              </div>
            </div>
          </div>

          <h4
            className={styles.extraFieldsToggle}
            onClick={() => setShowExtraFields(!showExtraFields)}
          >
            <span>Extra Fields</span>
            <b className={styles.caret}></b>
          </h4>

          {showExtraFields && (
            <div className={styles.row} id="extra_fields">
              <div className={styles.colMd12}>
                <hr className={styles.hr} />
              </div>
              <div className={styles.colMd4}>
                <Input
                  label="Overhang front"
                  type="text"
                  placeholder="0"
                  error={errors.overhangFront?.message}
                  {...register('overhangFront')}
                />
              </div>
              <div className={styles.colMd4}>
                <Input
                  label="Overhang rear"
                  type="text"
                  placeholder="0"
                  error={errors.overhangRear?.message}
                  {...register('overhangRear')}
                />
              </div>
              <div className={styles.colMd4}>
                <Input
                  label="Kingpin"
                  type="text"
                  placeholder="40'"
                  error={errors.kingpin?.message}
                  {...register('kingpin')}
                />
              </div>
            </div>
          )}

          {/* Promo Code Field */}
          <div className={styles.row}>
            <div className={styles.colMd12}>
              <hr className={styles.hr} />
            </div>
            <div className={styles.colMd6}>
              <Input
                label="Promo Code (Optional)"
                type="text"
                placeholder="Enter promo code"
                error={errors.promoCode?.message}
                {...register('promoCode')}
              />
            </div>
          </div>

          {/* Hidden fields - auto-populated */}
          <input type="hidden" {...register('numberOfAxles')} />
          <input type="hidden" {...register('moveType')} />
          <input type="hidden" {...register('tractorTrailerDisplayName')} />

          <div className={styles.row}>
            <div className={styles.colMd12}>
              <hr className={styles.hr} />
            </div>
            <div className={styles.colMd12}>
              <Button
                type="submit"
                variant="primary"
                size="large"
                disabled={isSubmitting || !isFormValid}
                className={styles.submitButton}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              </Button>
            </div>
          </div>

        </form>
      </div>
    </section>
  );
};

export default PermitForm;
