// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:

var getElementsByClassName = function (className,current,result) {
  current = current || document.body;
  result = result || [];
  var children = current.childNodes;
  for (var i = 0; i < children.length; i++){
      for(var key in children[i].classList){
        if (children[i].classList[key] === className){
          result.push(children[i]);
        }
    }
    if (children[i].hasChildNodes()){
      getElementsByClassName(className,children[i],result);
    }
  }
  return result;
}
