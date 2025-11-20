/**
 * Formats a phone number string to (XXX) XXX-XXXX format
 * @param phone - Phone number string (can contain digits, spaces, dashes, parentheses)
 * @returns Formatted phone number string
 */
export const formatPhoneNumber = (phone: string | undefined | null): string => {
  if (!phone) return '';
  
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '');
  
  // Format as (XXX) XXX-XXXX if we have 10 digits
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  
  // If we have 11 digits and starts with 1, format as 1 (XXX) XXX-XXXX
  if (digits.length === 11 && digits[0] === '1') {
    return `1 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  }
  
  // If we have less than 10 digits, format progressively
  if (digits.length <= 3) {
    return digits;
  } else if (digits.length <= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  } else if (digits.length <= 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  
  // Return formatted 10 digits if more than 10 (and not starting with 1)
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

/**
 * Formats phone number as user types (for input fields)
 * @param value - Current input value
 * @returns Formatted phone number string
 */
export const formatPhoneInput = (value: string): string => {
  // Remove all non-digit characters
  const digits = value.replace(/\D/g, '');
  
  // Limit to 11 digits (for US numbers with country code)
  const limitedDigits = digits.slice(0, 11);
  
  // Format progressively as user types
  if (limitedDigits.length === 0) {
    return '';
  } else if (limitedDigits.length <= 3) {
    return limitedDigits;
  } else if (limitedDigits.length <= 6) {
    return `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3)}`;
  } else if (limitedDigits.length <= 10) {
    return `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6)}`;
  } else if (limitedDigits.length === 11 && limitedDigits[0] === '1') {
    return `1 (${limitedDigits.slice(1, 4)}) ${limitedDigits.slice(4, 7)}-${limitedDigits.slice(7)}`;
  } else {
    // Limit to 10 digits if not starting with 1
    return `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6, 10)}`;
  }
};

