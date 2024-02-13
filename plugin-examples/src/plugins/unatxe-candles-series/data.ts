import { CandlestickData} from '../../../../lib/dev/src/model/data-consumer'
import { CustomData } from '../../../../lib/dev/src/model/icustom-series'

export interface RoundedCandleSeriesData
	extends CandlestickData,
		CustomData {
	rounded?: boolean;
}
