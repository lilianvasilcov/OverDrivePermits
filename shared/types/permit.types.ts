export interface PermitRequest {
  // Customer Information
  customerName: string;
  email: string;
  phone: string;
  
  // Company Information (optional)
  companyName?: string;
  
  // Permit Details
  permitType: 'oversized' | 'overweight' | 'superload' | 'other';
  state: string;
  route?: string;
  startDate?: string;
  endDate?: string;
  
  // Cargo Information
  cargoWeight?: string;
  cargoDimensions?: string;
  cargoType?: string;
  
  // Additional Notes
  notes?: string;
}

export interface PermitResponse {
  success: boolean;
  message: string;
  id?: string;
}

