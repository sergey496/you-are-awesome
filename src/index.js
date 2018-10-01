const createEnumerableProperty = (propertyName) => {
    this.propertyName=propertyName;
};
const createNotEnumerableProperty = (property) => {
    Object.defineProperty(
            Object.prototype, property, {
                    enumerable: false, value: 'value'});
    return property;
};

const createProtoMagicObject = () => {
       let results = new Function();
       results.prototype = Function.prototype;
       return results
};

const incrementor = () => {
        incrementor.value = incrementor.value || 0;
       function val() {
            incrementor.value++;
            return val;
       } 
       val.toString = function () {
            return incrementor.value;
       }; 
       return val();
};
let asyncCount = 0;
const asyncIncrementor = () => {
    asyncCount++;
    Function.prototype.valueOf = function() {
        return asyncCount;
    };
    return asyncIncrementor;
};
const createIncrementer = () => {
      let count = 0;
      function* foo(){
            while(count <= 2) {
                  yield ++count;
            };
      };	
       return foo();
};

const returnBackInSecond = (param) => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(param);
    }, 1000);})
};

const getDeepPropertiesCount = (obj) => {
      let counter = 0;
      count(obj);
      function count(property) {
          for (var n in property) {
                counter++;
                if (Object.keys(property[n]).length > 0) {
                      count(property[n]);
                };
          };
      };
      return counter;
};
const createSerializedObject = () => {
      return new String();
   };
const toBuffer = () => {};
const sortByProto = (arr) => {
     return arr.sort((left, right) =>left.__proto__ - right.__proto__)};

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
