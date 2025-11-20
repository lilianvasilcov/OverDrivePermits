export interface EquipmentOption {
  value: string;
  label: string;
  axles: number;
  height: string;
  weight: string;
}

export const EQUIPMENT_OPTIONS: EquipmentOption[] = [
  { value: 'flatbed-5', label: 'Flatbed (5 axles, 5\'0" tall, 32,000 Ibs weight)', axles: 5, height: '5\'0"', weight: '32,000 Ibs' },
  { value: 'step-deck-5', label: 'Step Deck (5 axles, 3\'6" tall, 33,000 Ibs weight)', axles: 5, height: '3\'6"', weight: '33,000 Ibs' },
  { value: 'drop-deck-5', label: 'Drop Deck (5 axles, 1\'10" tall, 35,000 Ibs weight)', axles: 5, height: '1\'10"', weight: '35,000 Ibs' },
  { value: 'step-deck-low-profile-5', label: 'Step Deck Low Profile (5 axles, 3\'0" tall, 35,000 Ibs weight)', axles: 5, height: '3\'0"', weight: '35,000 Ibs' },
  { value: 'double-drop-deck-5', label: 'Double Drop Deck (5 axles, 1\'10" tall, 36,000 Ibs weight)', axles: 5, height: '1\'10"', weight: '36,000 Ibs' },
  { value: 'rgn-lowboy-5-1', label: 'RGN / Lowboy (5 axles, 1\'8" tall, 36,000 Ibs weight)', axles: 5, height: '1\'8"', weight: '36,000 Ibs' },
  { value: 'flatbed-extendable-5', label: 'Flatbed Extendable (5 axles, 5\'0" tall, 37,000 Ibs weight)', axles: 5, height: '5\'0"', weight: '37,000 Ibs' },
  { value: 'step-deck-extendable-5', label: 'Step Deck Extendable (5 axles, 3\'6" tall, 37,000 Ibs weight)', axles: 5, height: '3\'6"', weight: '37,000 Ibs' },
  { value: 'double-drop-stretch-5', label: 'Double Drop Stretch (5 axles, 2\'0" tall, 40,000 Ibs weight)', axles: 5, height: '2\'0"', weight: '40,000 Ibs' },
  { value: 'rgn-lowboy-5-2', label: 'RGN / Lowboy (5 axles, 1\'10" tall, 40,000 Ibs weight)', axles: 5, height: '1\'10"', weight: '40,000 Ibs' },
  { value: 'rgn-lowboy-6-1', label: 'RGN / Lowboy (6 axles, 1\'8" tall, 41,000 Ibs weight)', axles: 6, height: '1\'8"', weight: '41,000 Ibs' },
  { value: 'double-drop-6', label: 'Double Drop (6 axles, 1\'10" tall, 41,000 Ibs weight)', axles: 6, height: '1\'10"', weight: '41,000 Ibs' },
  { value: 'rgn-lowboy-stretch-6', label: 'RGN / Lowboy Stretch (6 axles, 1\'10" tall, 45,000 Ibs weight)', axles: 6, height: '1\'10"', weight: '45,000 Ibs' },
  { value: 'double-drop-stretch-6', label: 'Double Drop Stretch (6 axles, 2\'0" tall, 45,000 Ibs weight)', axles: 6, height: '2\'0"', weight: '45,000 Ibs' },
  { value: 'rgn-lowboy-7-1', label: 'RGN / Lowboy (7 axles, 1\'8" tall, 48,000 Ibs weight)', axles: 7, height: '1\'8"', weight: '48,000 Ibs' },
  { value: 'double-drop-7', label: 'Double Drop (7 axles, 1\'10" tall, 48,000 Ibs weight)', axles: 7, height: '1\'10"', weight: '48,000 Ibs' },
  { value: 'double-drop-8', label: 'Double Drop (8 axles, 1\'10" tall, 55,000 Ibs weight)', axles: 8, height: '1\'10"', weight: '55,000 Ibs' },
  { value: 'rgn-lowboy-8', label: 'RGN / Lowboy (8 axles, 1\'8" tall, 55,000 Ibs weight)', axles: 8, height: '1\'8"', weight: '55,000 Ibs' },
  { value: 'double-drop-9', label: 'Double Drop (9 axles, 1\'10" tall, 65,000 Ibs weight)', axles: 9, height: '1\'10"', weight: '65,000 Ibs' },
  { value: 'rgn-lowboy-9', label: 'RGN / Lowboy (9 axles, 1\'8" tall, 65,000 Ibs weight)', axles: 9, height: '1\'8"', weight: '65,000 Ibs' },
];

