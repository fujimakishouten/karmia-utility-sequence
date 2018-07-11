/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/* eslint-env es6, mocha, node */
/* eslint-extends: eslint:recommended */
'use strict';



// Import modules
import expect = require("expect.js");


import {
    default as KarmiaUtilitySequence,
    KarmiaUtilitySequenceAdapterNumber,
    KarmiaUtilitySequenceAdapterTime,
} from "../";


describe("karmia-utility-sequence", () => {
    describe("constructor", () => {
        describe("Should get KarmiaUtilitySequence instance", () => {
            it("Default instance", () => {
                const sequence = new KarmiaUtilitySequence();

                expect(sequence.adapter).to.a(KarmiaUtilitySequenceAdapterNumber);
                expect(sequence.adapter).to.have.key("sequence");
                expect(sequence.adapter.sequence).to.be(0);
            });

            it("Specified instance", () => {
                const adapter = new KarmiaUtilitySequenceAdapterTime();
                const sequence = new KarmiaUtilitySequence(adapter);

                expect(sequence.adapter).to.a(KarmiaUtilitySequenceAdapterTime);
                expect(sequence.adapter).to.have.key("sequence");
                expect(sequence.adapter.sequence).to.be(0);
            });

            it("Initial value", () => {
                const initial_value = 1;
                const adapter = new KarmiaUtilitySequenceAdapterNumber();
                const sequence = new KarmiaUtilitySequence(adapter, initial_value);

                expect(sequence.adapter.sequence).to.be(initial_value);
            });
        });
    });

    describe("get", () => {
        describe("Should get sequence", () => {
            it("Number", async () => {
                const adapter = new KarmiaUtilitySequenceAdapterNumber(0);
                const sequence = new KarmiaUtilitySequence(adapter);
                const values = Array.from(new Array(10).keys());
                const result = await Promise.all(values.map(() => {
                    return sequence.get();
                }));

                for (let i = 1; i < result.length - 1; ++i) {
                    expect(result[i]).to.greaterThan(result[i - 1]);
                }
            });

            it("Time", async () => {
                const adapter = new KarmiaUtilitySequenceAdapterTime();
                const sequence = new KarmiaUtilitySequence(adapter);
                const values = Array.from(new Array(10).keys());
                const result = await Promise.all(values.map(() => {
                    return sequence.get();
                }));

                for (let i = 1; i < result.length - 1; ++i) {
                    expect(result[i]).to.greaterThan(result[i - 1]);
                }
            });
        });
    });
});


/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

