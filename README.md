# karmia-utility-sequence
Karmia utility sequence module

## Usage
### Number base sequence
```javascript
const KarmiaUtilitySequence = require("karmia-utility-sequence");
const Sequence = KarmiaUtilitySequence.default;

const sequence = new Sequence();
```

### Time base sequence
```javascript
const KarmiaUtilitySequence = require("karmia-utility-sequence");
const Sequence = KarmiaUtilitySequence.default;
const AdapterTime = KarmiaUtilitySequence.KarmiaUtilitySequenceAdapterTime;

const sequence = new Sequence(new AdapterTime());
```

### get
```JavaScript
// async / await
const number = await sequence.get();

// Promise
sequence.get().then((number) => {
    // pass
});
```

## How to
### Change start number of sequence number
```javascript
const KarmiaUtilitySequence = require("karmia-utility-sequence");
const Sequence = KarmiaUtilitySequence.default;
const AdapterNumber = KarmiaUtilitySequence.KarmiaUtilitySequenceAdapterNumber;

// In this example sequence number starts with 11
const adapter = new AdapterNumber(10);

const sequence = new Sequence(adapter);
```


### Create own adapter
1. Extends KarmiaUtilitSequenceAdapter class.
2. Override init() and get() method.

```javascript
const KarmiaUtilitySequence = require("karmia-utility-sequence");
const KarmiaUtilitySequenceAdapter = KarmiaUtilitySequence.KarmiaUtilitySequenceAdapter;

class MyAdapter extends KarmiaUtilitySequenceAdapter {
    constructor(initial_value=1) {
        super();
        this.init(initial_value);
    }
    
    init(value) {
        this.sequence = value;
    }
    
    async get() {
        const value = this.sequence * 2;
        this.sequence = value;
        
        return value;
    }
}
```
