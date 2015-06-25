/**
* A mixin for lodash which is designed to take a list of arguments in any order
* and return an object with the arguments assigned to a key
*
* Usage:
* var _arguments = _.getArguments(arguments, {
*   node: function (argument[, index, total]) {
*     return typeof argument.nodeType === 'number';
*   },
*   name: function (argument[, index, total]) {
*     return typeof argument.nodeType === 'string';
*   }
* });
*
* Copyright (C) 2015 Sean J MacIsaac
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*
* Contact: seanjmacisaac@gmail.com
*/
_.mixin({
  getArguments: function (list, predicates) {
    var i,
        n,
        b,
        k,
        o = {};
    list = Array.prototype.slice.call(list);
    for (i = 0, n = list.length; i < n; i++) {
      for (k in predicates) {
        if (typeof predicates[k] === 'function') {
          b = predicates[k](list[i], i, n);
          if (b) {
            o[k] = list[i];
          }
        }
      }
    }
    for (k in predicates) {
      if (typeof o[k] === 'undefined') {
        o[k] = false;
      }
    }
    return o;
  }
});
