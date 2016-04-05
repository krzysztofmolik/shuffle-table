'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isDefined = isDefined;
exports.isEmpty = isEmpty;
exports.isArray = isArray;
function isDefined(object) {
    return typeof object !== 'undefined';
}

function isEmpty(object) {
    return !isDefined(object) || Object.keys(object).length === 0;
}

function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlV0aWxzL29iamVjdEluc3BlY3Rpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O1FBQWdCO1FBSUE7UUFJQTtBQVJULFNBQVMsU0FBVCxDQUFtQixNQUFuQixFQUEyQjtBQUM5QixXQUFRLE9BQU8sTUFBUCxLQUFrQixXQUFsQixDQURzQjtDQUEzQjs7QUFJQSxTQUFTLE9BQVQsQ0FBaUIsTUFBakIsRUFBeUI7QUFDNUIsV0FBTyxDQUFDLFVBQVUsTUFBVixDQUFELElBQXNCLE9BQU8sSUFBUCxDQUFZLE1BQVosRUFBb0IsTUFBcEIsS0FBK0IsQ0FBL0IsQ0FERDtDQUF6Qjs7QUFJQSxTQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0I7QUFDM0IsV0FBTyxPQUFPLFNBQVAsQ0FBaUIsUUFBakIsQ0FBMEIsSUFBMUIsQ0FBK0IsS0FBL0IsTUFBMEMsZ0JBQTFDLENBRG9CO0NBQXhCIiwiZmlsZSI6IlV0aWxzL29iamVjdEluc3BlY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGlzRGVmaW5lZChvYmplY3QpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBvYmplY3QgIT09ICd1bmRlZmluZWQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkob2JqZWN0KSB7XG4gICAgcmV0dXJuICFpc0RlZmluZWQob2JqZWN0KSB8fCBPYmplY3Qua2V5cyhvYmplY3QpLmxlbmd0aCA9PT0gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cbiJdfQ==