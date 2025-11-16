import { StateRegulation } from '../../../../shared/types/state.types';

// Sample state regulations data structure
// In production, this would be loaded from a database or API
export const STATE_REGULATIONS: Record<string, StateRegulation> = {
  'CA': {
    stateCode: 'CA',
    stateName: 'California',
    oversized: 'Oversized loads exceeding 8\'6" in width, 14\' in height, or 65\' in length require permits. Maximum width: 12\', Maximum height: 15\'6", Maximum length: 75\' (with exceptions).',
    overweight: 'Single axle: 20,000 lbs, Tandem axle: 34,000 lbs, Gross weight: 80,000 lbs. Permits required for loads exceeding these limits.',
    superload: 'Superloads (over 150,000 lbs) require special permits, route surveys, and may need police escorts. Processing time: 5-10 business days.',
    timeRestrictions: 'Oversized/overweight loads are restricted during peak hours (6-9 AM and 3-7 PM) on weekdays. Weekend travel may be permitted with proper authorization.',
    routeRestrictions: 'Certain routes are restricted for oversized loads. Highway 1 and mountain passes may have additional restrictions. Route approval required.',
    permitRequirements: 'Valid CDL, proof of insurance ($1M minimum), vehicle registration, and detailed route plan required. Permits valid for specific dates and routes only.',
    contactInfo: 'California Department of Transportation (Caltrans) - Permit Services: (916) 654-2852'
  },
  'TX': {
    stateCode: 'TX',
    stateName: 'Texas',
    oversized: 'Maximum width: 14\', Maximum height: 14\'6", Maximum length: 95\' (with proper permits). Loads over 12\' wide require pilot/escort vehicles.',
    overweight: 'Single axle: 20,000 lbs, Tandem axle: 34,000 lbs, Gross weight: 80,000 lbs. Annual permits available for frequent carriers.',
    superload: 'Superloads require special permits, engineering analysis, and route approval. Processing: 7-14 business days. Escorts mandatory for loads over 16\' wide.',
    timeRestrictions: 'Travel restrictions apply during rush hours (6-9 AM, 4-7 PM) in metropolitan areas. Night travel may be permitted with proper lighting.',
    routeRestrictions: 'Certain bridges and routes have weight/height restrictions. Route must be pre-approved and may require structural analysis.',
    permitRequirements: 'Valid CDL, insurance ($1M minimum), bond may be required. Annual permits available for qualified carriers.',
    contactInfo: 'Texas Department of Motor Vehicles - Oversize/Overweight Permits: (512) 465-7611'
  },
  'NY': {
    stateCode: 'NY',
    stateName: 'New York',
    oversized: 'Maximum width: 12\', Maximum height: 13\'6", Maximum length: 65\'. Loads over 10\' wide require advance notice and may need escorts.',
    overweight: 'Single axle: 22,400 lbs, Tandem axle: 36,000 lbs, Gross weight: 80,000 lbs. Special permits available for divisible loads.',
    superload: 'Superloads require extensive review, route surveys, and coordination with multiple agencies. Processing: 10-15 business days minimum.',
    timeRestrictions: 'Severe restrictions in NYC metro area. No oversized travel during rush hours (6-10 AM, 3-7 PM). Weekend travel preferred.',
    routeRestrictions: 'Many bridges have strict weight/height limits. Tunnels have specific restrictions. Route approval mandatory.',
    permitRequirements: 'Valid CDL, insurance ($2M minimum for NYC), bond required. Special requirements for NYC metro area permits.',
    contactInfo: 'New York State Department of Transportation - Permit Office: (518) 457-3555'
  },
  'FL': {
    stateCode: 'FL',
    stateName: 'Florida',
    oversized: 'Maximum width: 12\', Maximum height: 13\'6", Maximum length: 80\'. Loads over 10\' wide require pilot vehicles.',
    overweight: 'Single axle: 20,000 lbs, Tandem axle: 34,000 lbs, Gross weight: 80,000 lbs. Annual permits available.',
    superload: 'Superloads require special permits and route approval. Processing: 5-10 business days. Escorts required for loads over 12\' wide.',
    timeRestrictions: 'Restrictions during peak hours in major metro areas. Night travel permitted with proper lighting and authorization.',
    routeRestrictions: 'Bridge weight limits apply. Coastal routes may have height restrictions due to bridges. Route pre-approval required.',
    permitRequirements: 'Valid CDL, insurance ($1M minimum), vehicle registration. Annual permits available for frequent carriers.',
    contactInfo: 'Florida Department of Transportation - Permit Services: (850) 410-5777'
  },
  'IL': {
    stateCode: 'IL',
    stateName: 'Illinois',
    oversized: 'Maximum width: 14\', Maximum height: 14\'6", Maximum length: 95\'. Loads over 12\' wide require escorts.',
    overweight: 'Single axle: 20,000 lbs, Tandem axle: 34,000 lbs, Gross weight: 80,000 lbs. Divisible load permits available.',
    superload: 'Superloads require engineering review and route approval. Processing: 7-14 business days. Escorts mandatory.',
    timeRestrictions: 'Restrictions in Chicago metro area during rush hours. Weekend travel may be preferred for certain routes.',
    routeRestrictions: 'Bridge clearances and weight limits apply. Route must be pre-approved. Some routes require structural analysis.',
    permitRequirements: 'Valid CDL, insurance ($1M minimum), bond may be required. Annual permits available.',
    contactInfo: 'Illinois Department of Transportation - Permit Office: (217) 782-6215'
  },
  'PA': {
    stateCode: 'PA',
    stateName: 'Pennsylvania',
    oversized: 'Maximum width: 12\', Maximum height: 13\'6", Maximum length: 75\'. Loads over 10\' wide require advance notice.',
    overweight: 'Single axle: 22,400 lbs, Tandem axle: 36,000 lbs, Gross weight: 80,000 lbs. Special permits for divisible loads.',
    superload: 'Superloads require extensive review and route approval. Processing: 10-15 business days. Escorts required.',
    timeRestrictions: 'Restrictions during peak hours in major cities. Night travel may be permitted with proper authorization.',
    routeRestrictions: 'Mountain routes and bridges have specific restrictions. Route pre-approval mandatory.',
    permitRequirements: 'Valid CDL, insurance ($1M minimum), bond required. Special requirements for certain routes.',
    contactInfo: 'Pennsylvania Department of Transportation - Permit Services: (717) 787-2895'
  },
  'OH': {
    stateCode: 'OH',
    stateName: 'Ohio',
    oversized: 'Maximum width: 14\', Maximum height: 14\'6", Maximum length: 95\'. Loads over 12\' wide require escorts.',
    overweight: 'Single axle: 20,000 lbs, Tandem axle: 34,000 lbs, Gross weight: 80,000 lbs. Annual permits available.',
    superload: 'Superloads require engineering review. Processing: 7-14 business days. Escorts mandatory for loads over 16\' wide.',
    timeRestrictions: 'Restrictions during rush hours in metro areas. Weekend travel preferred for certain routes.',
    routeRestrictions: 'Bridge weight limits apply. Route must be pre-approved and may require structural analysis.',
    permitRequirements: 'Valid CDL, insurance ($1M minimum), vehicle registration. Annual permits for qualified carriers.',
    contactInfo: 'Ohio Department of Transportation - Permit Office: (614) 466-7170'
  },
  'GA': {
    stateCode: 'GA',
    stateName: 'Georgia',
    oversized: 'Maximum width: 12\', Maximum height: 13\'6", Maximum length: 80\'. Loads over 10\' wide require pilot vehicles.',
    overweight: 'Single axle: 20,000 lbs, Tandem axle: 34,000 lbs, Gross weight: 80,000 lbs. Annual permits available.',
    superload: 'Superloads require special permits and route approval. Processing: 5-10 business days.',
    timeRestrictions: 'Restrictions during peak hours in Atlanta metro area. Night travel permitted with proper lighting.',
    routeRestrictions: 'Bridge clearances and weight limits apply. Route pre-approval required.',
    permitRequirements: 'Valid CDL, insurance ($1M minimum), vehicle registration. Annual permits for frequent carriers.',
    contactInfo: 'Georgia Department of Transportation - Permit Services: (404) 635-8000'
  },
  'NC': {
    stateCode: 'NC',
    stateName: 'North Carolina',
    oversized: 'Maximum width: 12\', Maximum height: 13\'6", Maximum length: 75\'. Loads over 10\' wide require advance notice.',
    overweight: 'Single axle: 20,000 lbs, Tandem axle: 34,000 lbs, Gross weight: 80,000 lbs. Divisible load permits available.',
    superload: 'Superloads require engineering review and route approval. Processing: 7-14 business days.',
    timeRestrictions: 'Restrictions during rush hours in major cities. Weekend travel may be preferred.',
    routeRestrictions: 'Mountain routes have specific restrictions. Bridge clearances apply. Route pre-approval mandatory.',
    permitRequirements: 'Valid CDL, insurance ($1M minimum), bond may be required. Annual permits available.',
    contactInfo: 'North Carolina Department of Transportation - Permit Office: (919) 707-4700'
  },
  'MI': {
    stateCode: 'MI',
    stateName: 'Michigan',
    oversized: 'Maximum width: 14\', Maximum height: 14\'6", Maximum length: 95\'. Loads over 12\' wide require escorts.',
    overweight: 'Single axle: 20,000 lbs, Tandem axle: 34,000 lbs, Gross weight: 80,000 lbs. Annual permits available.',
    superload: 'Superloads require special permits and route approval. Processing: 7-14 business days. Escorts mandatory.',
    timeRestrictions: 'Restrictions during rush hours in Detroit metro area. Weekend travel preferred for certain routes.',
    routeRestrictions: 'Bridge weight limits and clearances apply. Route must be pre-approved.',
    permitRequirements: 'Valid CDL, insurance ($1M minimum), vehicle registration. Annual permits for qualified carriers.',
    contactInfo: 'Michigan Department of Transportation - Permit Services: (517) 241-2400'
  },
  'NJ': {
    stateCode: 'NJ',
    stateName: 'New Jersey',
    oversized: 'Maximum width: 12\', Maximum height: 13\'6", Maximum length: 65\'. Loads over 10\' wide require advance notice.',
    overweight: 'Single axle: 22,400 lbs, Tandem axle: 36,000 lbs, Gross weight: 80,000 lbs. Special permits available.',
    superload: 'Superloads require extensive review and coordination. Processing: 10-15 business days minimum.',
    timeRestrictions: 'Severe restrictions during rush hours. No oversized travel during peak times (6-10 AM, 3-7 PM).',
    routeRestrictions: 'Many bridges and tunnels have strict restrictions. Route approval mandatory.',
    permitRequirements: 'Valid CDL, insurance ($2M minimum), bond required. Special requirements for certain routes.',
    contactInfo: 'New Jersey Department of Transportation - Permit Office: (609) 530-3535'
  },
  'VA': {
    stateCode: 'VA',
    stateName: 'Virginia',
    oversized: 'Maximum width: 12\', Maximum height: 13\'6", Maximum length: 75\'. Loads over 10\' wide require pilot vehicles.',
    overweight: 'Single axle: 20,000 lbs, Tandem axle: 34,000 lbs, Gross weight: 80,000 lbs. Annual permits available.',
    superload: 'Superloads require special permits and route approval. Processing: 5-10 business days.',
    timeRestrictions: 'Restrictions during peak hours in metro areas. Night travel permitted with proper authorization.',
    routeRestrictions: 'Mountain routes and bridges have specific restrictions. Route pre-approval required.',
    permitRequirements: 'Valid CDL, insurance ($1M minimum), vehicle registration. Annual permits for frequent carriers.',
    contactInfo: 'Virginia Department of Transportation - Permit Services: (804) 786-2964'
  },
  'WA': {
    stateCode: 'WA',
    stateName: 'Washington',
    oversized: 'Maximum width: 14\', Maximum height: 14\'6", Maximum length: 95\'. Loads over 12\' wide require escorts.',
    overweight: 'Single axle: 20,000 lbs, Tandem axle: 34,000 lbs, Gross weight: 80,000 lbs. Annual permits available.',
    superload: 'Superloads require engineering review and route approval. Processing: 7-14 business days.',
    timeRestrictions: 'Restrictions during rush hours in Seattle metro area. Weekend travel may be preferred.',
    routeRestrictions: 'Mountain passes and bridges have specific restrictions. Route must be pre-approved.',
    permitRequirements: 'Valid CDL, insurance ($1M minimum), bond may be required. Annual permits available.',
    contactInfo: 'Washington State Department of Transportation - Permit Office: (360) 705-7275'
  },
  'AZ': {
    stateCode: 'AZ',
    stateName: 'Arizona',
    oversized: 'Maximum width: 14\', Maximum height: 14\'6", Maximum length: 95\'. Loads over 12\' wide require pilot vehicles.',
    overweight: 'Single axle: 20,000 lbs, Tandem axle: 34,000 lbs, Gross weight: 80,000 lbs. Annual permits available.',
    superload: 'Superloads require special permits and route approval. Processing: 5-10 business days.',
    timeRestrictions: 'Restrictions during peak hours in Phoenix metro area. Night travel permitted with proper lighting.',
    routeRestrictions: 'Desert routes and mountain passes have specific restrictions. Route pre-approval required.',
    permitRequirements: 'Valid CDL, insurance ($1M minimum), vehicle registration. Annual permits for qualified carriers.',
    contactInfo: 'Arizona Department of Transportation - Permit Services: (602) 712-7355'
  },
  'MA': {
    stateCode: 'MA',
    stateName: 'Massachusetts',
    oversized: 'Maximum width: 12\', Maximum height: 13\'6", Maximum length: 65\'. Loads over 10\' wide require advance notice.',
    overweight: 'Single axle: 22,400 lbs, Tandem axle: 36,000 lbs, Gross weight: 80,000 lbs. Special permits available.',
    superload: 'Superloads require extensive review and coordination. Processing: 10-15 business days.',
    timeRestrictions: 'Severe restrictions during rush hours in Boston metro area. Weekend travel preferred.',
    routeRestrictions: 'Many bridges and tunnels have strict restrictions. Route approval mandatory.',
    permitRequirements: 'Valid CDL, insurance ($2M minimum), bond required. Special requirements for certain routes.',
    contactInfo: 'Massachusetts Department of Transportation - Permit Office: (857) 368-4636'
  },
  'TN': {
    stateCode: 'TN',
    stateName: 'Tennessee',
    oversized: 'Maximum width: 12\', Maximum height: 13\'6", Maximum length: 80\'. Loads over 10\' wide require pilot vehicles.',
    overweight: 'Single axle: 20,000 lbs, Tandem axle: 34,000 lbs, Gross weight: 80,000 lbs. Annual permits available.',
    superload: 'Superloads require special permits and route approval. Processing: 5-10 business days.',
    timeRestrictions: 'Restrictions during peak hours in major cities. Night travel permitted with proper authorization.',
    routeRestrictions: 'Mountain routes have specific restrictions. Bridge clearances apply. Route pre-approval required.',
    permitRequirements: 'Valid CDL, insurance ($1M minimum), vehicle registration. Annual permits for frequent carriers.',
    contactInfo: 'Tennessee Department of Transportation - Permit Services: (615) 741-3655'
  },
  'IN': {
    stateCode: 'IN',
    stateName: 'Indiana',
    oversized: 'Maximum width: 14\', Maximum height: 14\'6", Maximum length: 95\'. Loads over 12\' wide require escorts.',
    overweight: 'Single axle: 20,000 lbs, Tandem axle: 34,000 lbs, Gross weight: 80,000 lbs. Annual permits available.',
    superload: 'Superloads require engineering review and route approval. Processing: 7-14 business days.',
    timeRestrictions: 'Restrictions during rush hours in Indianapolis metro area. Weekend travel may be preferred.',
    routeRestrictions: 'Bridge weight limits apply. Route must be pre-approved. Some routes require structural analysis.',
    permitRequirements: 'Valid CDL, insurance ($1M minimum), bond may be required. Annual permits available.',
    contactInfo: 'Indiana Department of Transportation - Permit Office: (317) 232-5533'
  },
  'MO': {
    stateCode: 'MO',
    stateName: 'Missouri',
    oversized: 'Maximum width: 14\', Maximum height: 14\'6", Maximum length: 95\'. Loads over 12\' wide require escorts.',
    overweight: 'Single axle: 20,000 lbs, Tandem axle: 34,000 lbs, Gross weight: 80,000 lbs. Annual permits available.',
    superload: 'Superloads require special permits and route approval. Processing: 7-14 business days. Escorts mandatory.',
    timeRestrictions: 'Restrictions during rush hours in St. Louis and Kansas City metro areas.',
    routeRestrictions: 'Bridge clearances and weight limits apply. Route pre-approval required.',
    permitRequirements: 'Valid CDL, insurance ($1M minimum), vehicle registration. Annual permits for qualified carriers.',
    contactInfo: 'Missouri Department of Transportation - Permit Services: (573) 751-4659'
  }
};

// Helper function to get regulations for a state
export const getStateRegulations = (stateCode: string): StateRegulation | null => {
  return STATE_REGULATIONS[stateCode.toUpperCase()] || null;
};

// Helper function to check if regulations exist for a state
export const hasStateRegulations = (stateCode: string): boolean => {
  return stateCode.toUpperCase() in STATE_REGULATIONS;
};

