var names : string[] = ['Steven', 'James', 'Bobby'];
var counter : number = 0;

(function() {
	for (let name in names) {
		counter++;
	}
})();

console.log(counter);
