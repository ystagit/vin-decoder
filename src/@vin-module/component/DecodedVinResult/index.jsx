import { connect } from 'react-redux';
import { isMainLoader } from '@base/reducer/loader/getter';
import { getDecodeVIN, loadLastThreeVinList } from '@vin/reducer/vin/actions';
import StorageType from '@/storages';

import DecodedVinResultComponent from './component';

const mapStateToProps = (state) => ({
    loading: isMainLoader(state),
    decodeVin: state.storage[StorageType.DECODE_VIN]
})

export default connect(mapStateToProps)(DecodedVinResultComponent);