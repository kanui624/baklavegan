// const withTM = require('next-transpile-modules')([
//   'three',
//   'react-spring',
//   'postprocessing',
//   '@react-three/drei',
// ]);

// module.exports = withTM();
const withTM = require('next-transpile-modules')([
  'three',
  'react-spring',
  '@react-three/drei',
  'postprocessing',
  'react-three-fiber',
]);

module.exports = withTM({
  webpack: (config) => {
    config.module.rules.push({
      test: /react-spring/,
      sideEffects: true,
    });

    return config;
  },
});
