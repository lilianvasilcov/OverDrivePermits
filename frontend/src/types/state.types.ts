export interface StateRegulation {
  stateCode: string;
  stateName: string;
  permits?: string;
  operatingTime?: string;
  restrictions?: string;
  speedLimit?: string;
  legalDimensions?: string;
  routinePermitLimits?: string;
  escorts?: string;
  securityMeasures?: string;
}

export interface USState {
  code: string;
  name: string;
}

