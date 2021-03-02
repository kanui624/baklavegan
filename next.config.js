const withTM = require('next-transpile-modules')([
  'three',
  'react-spring',
  'postprocessing',
  '@react-three/drei',
]);

module.exports = withTM();
