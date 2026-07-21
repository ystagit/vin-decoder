import { connect } from 'react-redux';
import { getDecodeVIN } from '@vin/reducer/vin/actions';
import StorageType from '@/storages';

import LastVinComponent from './component';

const mapStateToProps = (state) => ({
    lastThreeVinList: state.storage[StorageType.LAST_THREE_VIN],
})

const mapDispatchToProps = (dispatch) => ({
    onGetDecodeVIN: (id, saveLastVin) =>
        dispatch(getDecodeVIN(id, saveLastVin)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LastVinComponent);
