export interface PermitRequest {
  // Origin and Destination
  origin?: string;
  destination?: string;
  originLatLng?: string;
  destinationLatLng?: string;
  avoidHighways?: '0' | '1'; // '0' = Interstate, '1' = Non-Interstate
  
  // Selected States
  selectedStates?: string[];
  
  // Load Dimensions
  commodityLength?: string;
  commodityWidth?: string;
  commodityHeight?: string;
  commodityWeight?: string;
  
  // Equipment
  tractorTrailerId?: string;
  tractorTrailerDisplayName?: string;
  numberOfAxles?: string;
  moveType?: string;
  
  // Overall Dimensions
  length?: string;
  width?: string;
  height?: string;
  weightGross?: string;
  
  // Extra Fields
  overhangFront?: string;
  overhangRear?: string;
  kingpin?: string;
  
  // Promo Code
  promoCode?: string;
  
  // Legacy fields (for backward compatibility)
  customerName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  permitType?: 'oversized' | 'overweight' | 'superload' | 'other';
  state?: string;
  route?: string;
  startDate?: string;
  endDate?: string;
  cargoWeight?: string;
  cargoDimensions?: string;
  cargoType?: string;
  notes?: string;
}

export interface PermitResponse {
  success: boolean;
  message: string;
  id?: string;
}

