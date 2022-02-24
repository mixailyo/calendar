import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {abilitiesSlider} from './modules/abilities-slider';
import {animations} from './modules/animations';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

abilitiesSlider();
animations();
