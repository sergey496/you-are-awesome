// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {this.propertyName=propertyName;};
const createNotEnumerableProperty = () => {};
const createProtoMagicObject = () => {let result = new Function();result.prototype = Function.prototype;return result};
const incrementor = () => {};
const asyncIncrementor = () => {};
const createIncrementer = () => {next () {return {value}}};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {return new String();};
const toBuffer = () => {};
const sortByProto = (arr) => {return arr.sort((left, right) => left.__proto__ - right.__proto__)};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
