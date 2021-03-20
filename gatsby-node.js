exports.onCreateWebpackConfig = ({ stage, actions }, options) => {
  switch (stage) {
    case `build-javascript`:
      actions.setWebpackConfig({
        plugins: [
        ]
      });
  }
};
