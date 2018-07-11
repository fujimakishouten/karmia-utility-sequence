/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/* eslint-env es6, mocha, node */
/* eslint-extends: eslint:recommended */
'use strict';



// Import modules
import KarmiaUtilitySequenceAdapter from "./";


class KarmiaUtilitySequenceAdapterNumber extends KarmiaUtilitySequenceAdapter {
    public sequence: number = 0;

    /**
     * Constructor
     *
     * @constructs KarmiaUtilitySequenceAdapterNumber
     * @param {number} [initial_value=0]
     */
    constructor(initial_value: number=0) {
        super();

        this.init(initial_value);
    }

    /**
     * Initialize sequence
     *
     * @param {number} value
     * @returns {KarmiaUtilitySequenceAdapterNumber}
     */
    init(value: number): KarmiaUtilitySequenceAdapterNumber {
        this.sequence = value;

        return this;
    }

    /**
     * Get sequence value
     *
     * @returns {Promise}
     */
    async get(): Promise<number> {
        let sequence = Date.now();
        sequence = (sequence > this.sequence) ? sequence : this.sequence + 1;
        this.sequence = sequence;

        return Promise.resolve(sequence);
    }
}


// Export module
export default KarmiaUtilitySequenceAdapterNumber;



/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

