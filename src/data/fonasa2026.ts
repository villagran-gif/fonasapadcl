export const FONASA_YEAR = 2026;

export const bariatricPad = {
  bypass: {
    name: 'Bypass Gástrico',
    code: '2501058',
    total: 4_993_380,
    copay: 2_496_690,
    loan85: 2_122_190,
    downPayment15: 374_504,
  },
  sleeve: {
    name: 'Manga Gástrica',
    code: '2501059',
    total: 4_667_700,
    copay: 2_333_850,
    loan85: 1_983_770,
    downPayment15: 350_078,
  },
} as const;

export const abdominoplastyPad = {
  name: 'Abdomen flácido / Abdominoplastía',
  code: '2505950',
  total: 3_583_580,
  copay: 1_791_790,
  loan85: 1_523_020,
  downPayment15: 268_770,
} as const;

export const formatCLP = (value: number) =>
  new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(value);
