import { defineCustomComponents } from '../../utils/element.js';
import CpTabs from './tabs.js';
import CpTab from './tab.js';
import CpTabPanel from './tab-panel.js';
import CpTabContext from './tab-context.js';

defineCustomComponents('cp-tab', CpTab);
defineCustomComponents('cp-tabs', CpTabs);
defineCustomComponents('cp-tab-panel', CpTabPanel);
defineCustomComponents('cp-tab-context', CpTabContext);
