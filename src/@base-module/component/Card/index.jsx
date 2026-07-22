import { connect } from 'react-redux';

import CardComponent from './component';

const mapStateToProps = (state) => ({
    colors: state.colors,
    errors: state.errors
})

export default connect(mapStateToProps)(CardComponent);