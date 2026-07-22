import { connect } from 'react-redux';
import { getDecodeVIN, loadLastThreeVinList } from '@vin/reducer/vin/actions';
import StorageType from '@/storages';

import DecodedVinResultComponent from './component';

const mapStateToProps = (state) => ({
    decodeVin: state.storage[StorageType.DECODE_VIN]
})

export default connect(mapStateToProps)(DecodedVinResultComponent);