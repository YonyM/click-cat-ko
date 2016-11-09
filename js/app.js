
// View model using Observables with KnockOut
var ViewModel = function () {
	
	this.name = ko.observable("tony");
	this.clickCount = ko.observable(0);
	this.imgSrc = ko.observable("https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426")
	this.level=ko.observable("");

	this.nickNames = ko.observableArray (
		[
			{nickName: 'pilo'},
			{nickName: 'coty'},
			{nickName: 'jango'}
		]
		);
	
	this.removeNickName = function () {
		this.nickNames.remove(this);
	}

	// This increment the clickCount when is the img is clicked
	this.incrementClick = function () {
		this.clickCount(this.clickCount() +1);
	}

	// Using a computed variable to process the cat level
	this.catLevel = ko.computed(function(){
		if (this.clickCount() > 20) {
			return this.level ("Teenager");
		}
		else if (this.clickCount() > 10) {
			return this.level ("Infant");
		}
		else {
			return this.level("NewBorn");
		}
	},this)
}

ko.applyBindings(new ViewModel());

