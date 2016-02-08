# unique-array

Removed duplicate elements from the array using Set

## Examples

```js
var unique = require('unique-array');

unique([1, 1, 2, 3, 4]);
//=> [1, 2, 3, 4]

unique(['a', 'b', 'github', 'a', 'github']);
//=> ['a', 'b', 'github']
```

When removing duplicates, the position of the first occurrence of each value will be retained. For example,

```js
unique([1, 2, 3, 4, 4, 5, 1, 6])
//=> [1, 2, 3, 4, 5, 6]
```

## Usage

#### `require('unique-array')( array )`
Return unique elements of an input array.

**Arguments**:
- `array`: A javascript array with elements to be unique'd.

**Returns**: A reference to a new array containing the unique elements. Elements are in the order of the first occurrence in the input array.

## License

&copy; 2016 vikram. MIT License

