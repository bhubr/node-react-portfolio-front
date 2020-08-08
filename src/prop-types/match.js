import PropTypes from 'prop-types';

export default PropTypes.shape({
  isExact: PropTypes.bool.isRequired,
  params: PropTypes.shape({
    projectId: PropTypes.string,
  }).isRequired,
  path: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});
