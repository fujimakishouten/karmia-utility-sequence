/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/* eslint-env es6, mocha, node */
/* eslint-extends: eslint:recommended */
'use strict';



// Import modules
import KarmiaUtilitySequenceAdapter from "./lib/adapter";
import KarmiaUtilitySequenceAdapterNumber from "./lib/adapter/number";


// Export modules
export {default as KarmiaUtilitySequenceAdapter} from "./lib/adapter";
export {default as KarmiaUtilitySequenceAdapterNumber} from "./lib/adapter/number";
export {default as KarmiaUtilitySequenceAdapterTime} from "./lib/adapter/time";


class KarmiaUtilitySequence {
    public adapter: KarmiaUtilitySequenceAdapter;

    /**
     * Constructor
     *
     * @constructs KarmiaUtilitySequence
     * @param {Object} adapter
     * @param {*} [initial_value=undefined]
     */
    constructor(adapter?: KarmiaUtilitySequenceAdapter, initial_value?: any) {
        this.adapter = adapter || new KarmiaUtilitySequenceAdapterNumber();
        if (initial_value !== undefined) {
            this.adapter.init(initial_value);
        }
    }

    /**
     * Get sequence value
     *
     * @returns {*}
     */
    get(): any {
        return this.adapter.get();
    }
}


// Export module
export default KarmiaUtilitySequence;



/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

