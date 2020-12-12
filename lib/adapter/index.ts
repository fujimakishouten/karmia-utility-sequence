/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/* eslint-env es6, mocha, node */
/* eslint-extends: eslint:recommended */
'use strict';



// Declaration
abstract class KarmiaUtilitySequenceAdapter {
    public sequence?: any;
    abstract init(value: any): KarmiaUtilitySequenceAdapter;
    abstract get(): Promise<any>;
}


// Export module
export default KarmiaUtilitySequenceAdapter;



/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

