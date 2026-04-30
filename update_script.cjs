const fs = require('fs');
const path = '/constants.tsx';
let data = fs.readFileSync(path, 'utf8');

// 1. Update years
data = data.replace(/-2024'/g, "-2025'");
data = data.replace(/'2024'/g, "'2024-2025'");

// 2. Add Toyota models
data = data.replace(
  /      'Corolla Cross': \{[\s\S]*?\},/,
  `$&
      'Yaris Cross': {
        '2023-2025': {
          '1.5 G/V (Gas)': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF',
          '1.5 Hybrid': 'Motolite Excel DIN44 / Amaron DIN44 / Delkor DIN44'
        }
      },
      'Zenix': {
        '2023-2025': {
          '2.0 Gas/Hybrid': 'Motolite Excel DIN55 / Amaron DIN55 / Delkor DIN55'
        }
      },`
);

// 3. Add Honda models
data = data.replace(
  /      HRV: \{[\s\S]*?\},/,
  `$&
      'ZR-V': {
        '2023-2025': {
          '1.5 Turbo': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF'
        }
      },`
);

// 4. Add Mitsubishi models
data = data.replace(
  /      Xpander: \{[\s\S]*?\},/,
  `$&
      'Triton': {
        '2024-2025': {
          '2.4 GL/GLX/GLS/Athlete': 'Motolite Excel 3SMF / Amaron 3SMF / Delkor 3SMF / Raiden 3SMF'
        }
      },
      'Xforce': {
        '2024-2025': {
          '1.5 GLS/GT': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF'
        }
      },`
);

// 5. Add Ford models
data = data.replace(
  /      Territory: \{[\s\S]*?\},/,
  `$&
      'Bronco': {
        '2024-2025': {
          '2.7L V6': 'Motolite Excel DIN80 / Amaron DIN80 / Delkor DIN80'
        }
      },`
);

// 6. Add Nissan models
data = data.replace(
  /      Kicks: \{[\s\S]*?\}/,
  `$&,
      'Z': {
        '2023-2025': {
          '3.0 V6 Twin Turbo': 'Motolite Excel Q85 / Amaron Q85 / Delkor Q85'
        }
      }`
);

fs.writeFileSync(path, data, 'utf8');
console.log('Updated constants.tsx');
