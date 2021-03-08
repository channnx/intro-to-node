// // current time at this point 
// var start = new Date();
// setTimeout(function () {
//   // the current time at this point (when we actually run the setTImeout)
//   var end = new Date();
//   // diff in milliseconds between start and end 
//   console.log('Time elapsed:', end - start, 'ms');
// }, 500);
// //new Data the running time as we go
// while (new Date() - start < 1000) {}
for (var x = 0; x < 3; x++) {
  setTimeout(() => console.log(x), 100);
}
