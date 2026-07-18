import { connect } from 'react-redux';
import { getDecodeVIN } from '@vin/reducer/vin/actions';

import MainComponent from './component';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    onGetDecodeVIN: (id) =>
        dispatch(getDecodeVIN(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);