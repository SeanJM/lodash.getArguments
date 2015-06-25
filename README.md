# Lodash getArguments
Lodash mixin which assigns arbitrary arguments to named keys which correspond to named predicates in an object.

#### Usage

```javascript
function myFunction() {
  var a = _.getArguments(arguments, {
    name: function (b) {
      return typeof b === 'string';
    },
    node: function (b) {
      return !!b && typeof b === 'object' && !!b.nodeType;
    },
    callback: function (b) {
      return typeof b === 'function';
    }
  });
}
myFunction(myCallback, 'Sean', document.querySelector('div'));
// → { name: 'Sean', node: document.querySelector('div'), callback: myCallback }
```

#### Not all arguments supplied

```javascript
myFunction(myCallback, document.querySelector('div'));
// → { name: false, node: document.querySelector('div'), callback: myCallback }
```
