const withTM = require('next-transpile-modules')([
  'three',
  'react-spring',
  'postprocessing',
  '@react-three/drei',
  'react-three-fiber',
]);

// module.exports = withTM();
module.exports = {
  ...withTM(),
  rules: [
    {
      test: /react-spring/,
      sideEffects: true,
    },
  ],
};
