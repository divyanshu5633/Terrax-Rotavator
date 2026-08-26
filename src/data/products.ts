// ─── TERRAX Product Size/Configuration Data ───────────────────────────────────
// All available size and blade configurations for Terrax rotavators.
// This is the master list — assign to series as confirmed by client.

export interface SizeConfig {
  id: string;
  widthFt: number;          // Working width in feet
  widthMm: number;          // Working width in millimeters (approx)
  bladeCount: number;       // Number of blades
  label: string;            // Display label
}

export const sizeConfigs: SizeConfig[] = [
  { id: 's3-16',   widthFt: 3,   widthMm: 915,  bladeCount: 16, label: '3 ft — 16 Blade' },
  { id: 's35-20',  widthFt: 3.5, widthMm: 1065, bladeCount: 20, label: '3.5 ft — 20 Blade' },
  { id: 's35-24',  widthFt: 3.5, widthMm: 1065, bladeCount: 24, label: '3.5 ft — 24 Blade' },
  { id: 's4-30',   widthFt: 4,   widthMm: 1220, bladeCount: 30, label: '4 ft — 30 Blade' },
  { id: 's5-36',   widthFt: 5,   widthMm: 1525, bladeCount: 36, label: '5 ft — 36 Blade' },
  { id: 's55-39',  widthFt: 5.5, widthMm: 1675, bladeCount: 39, label: '5.5 ft — 39 Blade' },
  { id: 's55-42',  widthFt: 5.5, widthMm: 1675, bladeCount: 42, label: '5.5 ft — 42 Blade' },
  { id: 's6-42',   widthFt: 6,   widthMm: 1830, bladeCount: 42, label: '6 ft — 42 Blade' },
  { id: 's6-48',   widthFt: 6,   widthMm: 1830, bladeCount: 48, label: '6 ft — 48 Blade' },
  { id: 's7-48',   widthFt: 7,   widthMm: 2135, bladeCount: 48, label: '7 ft — 48 Blade' },
  { id: 's7-54',   widthFt: 7,   widthMm: 2135, bladeCount: 54, label: '7 ft — 54 Blade' },
];

// Helper: get config by id
export const getSizeConfig = (id: string): SizeConfig | undefined =>
  sizeConfigs.find((s) => s.id === id);
