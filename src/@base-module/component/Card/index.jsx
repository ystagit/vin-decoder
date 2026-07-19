import { connect } from 'react-redux';

import CardComponent from './component';

const mapStateToProps = (state) => ({
    colors: state.colors
})

export default connect(mapStateToProps)(CardComponent);