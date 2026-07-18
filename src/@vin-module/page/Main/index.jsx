import { connect } from 'react-redux';
import { getDecodeVIN } from '@vin/reducer/vin/actions';
import StorageType from '@/storages';

import MainComponent from './component';

const mapStateToProps = (state) => ({
    decodeVin: state.storage[StorageType.DECODE_VIN]
})

const mapDispatchToProps = (dispatch) => ({
    onGetDecodeVIN: (id) =>
        dispatch(getDecodeVIN(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);