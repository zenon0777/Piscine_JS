const dynamicType = {
	number : null,
    put : function(nb) {
		console.log( '[' +typeof nb + ']');
		if (this.number === null) {
			if (isNaN(nb) == false && typeof nb === 'number' ) {
				this.number = nb;
			}
		}
	},
    change : function (type) {
		if (type === 'string')
		{
			console.log('yo');
			this.number = toString(this.number);
		}

	},
    printType : '',
};


console.log(dynamicType.number);
dynamicType['put'](undefined);
console.log(dynamicType.number);
dynamicType['put'](11);
console.log(dynamicType.number);
dynamicType['put'](20);
console.log(dynamicType.number);

