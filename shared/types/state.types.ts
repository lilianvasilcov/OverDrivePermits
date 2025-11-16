export interface StateRegulation {
  stateCode: string;
  stateName: string;
  oversized?: string;
  overweight?: string;
  superload?: string;
  timeRestrictions?: string;
  routeRestrictions?: string;
  permitRequirements?: string;
  contactInfo?: string;
}

export interface USState {
  code: string;
  name: string;
}

