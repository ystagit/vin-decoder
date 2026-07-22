import { connect } from 'react-redux';
import { getDecodeVIN } from '@vin/reducer/vin/actions';
import StorageType from '@/storages';

import DecodeVinComponent from './component';

const mapStateToProps = (state) => ({
    decodeVin: state.storage[StorageType.DECODE_VIN],
})

const mapDispatchToProps = (dispatch) => ({
    onGetDecodeVIN: (id, saveLastVin) =>
        dispatch(getDecodeVIN(id, saveLastVin))
})

export default connect(mapStateToProps, mapDispatchToProps)(DecodeVinComponent);