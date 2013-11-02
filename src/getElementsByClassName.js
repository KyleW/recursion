// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:

var getElementsByClassName = function (className) {
	var result = [];
	if (document.body.hasChildNodes()){
		var children =document.body.childNodes;
	}
	
	for ( var i = 0; i < children.length; i++){
		if (children[i].classList){
			for(var key in children[i].classList){
				if (children[i].classList[key] === className){
					result.push(children[i]);
				}
			}
		}
	}
	return result;
};
