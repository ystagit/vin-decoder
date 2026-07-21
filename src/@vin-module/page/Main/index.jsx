import { connect } from 'react-redux';
import { getDecodeVIN, loadLastThreeVinList } from '@vin/reducer/vin/actions';
import StorageType from '@/storages';

import MainComponent from './component';

const mapStateToProps = (state) => ({
    decodeVin: state.storage[StorageType.DECODE_VIN],
    lastThreeVinList: state.storage[StorageType.LAST_THREE_VIN],
})

const mapDispatchToProps = (dispatch) => ({
    onLoad: () => {
        dispatch(loadLastThreeVinList());
    },
    onGetDecodeVIN: (id, saveLastVin) =>
        dispatch(getDecodeVIN(id, saveLastVin))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);