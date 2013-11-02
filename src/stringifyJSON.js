// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
    // your code goes here
  	debugger;
	var result = "";	
	var what = typeof(obj);

	//Cases string, number, boolean,
	if (what === 'string'){
		result += '"' + obj + '"';
	} else if (what === 'number'){
		result += obj.toString();
	} else if (what === 'boolean'){
		result += obj.toString();

	// Array Case
	} else if (Array.isArray(obj)) {
		result += "[";
		for (var i = 0; i < obj.length; i++){
			if (i>0){
				result += ",";
			}
			result += stringifyJSON(obj[i]);
		}
		result +="]"
	
	// Null Case
	} else if (obj === null){
		result += null;
		
	// Object Case
	} else {
		result += "{";
		var counter = 0;
		for (var key in obj){
			if (obj[key] !== undefined && typeof(obj[key]) !== 'function' ) {
				if (counter > 0){
					result +=",";
				}
				result += stringifyJSON(key) + ":" +stringifyJSON(obj[key]);
				counter++;
			}
		}
		result += "}";
	}
	return result;
};
