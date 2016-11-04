
// View model using Observables with KnockOut
var ViewModel = function () {
	
	this.name = ko.observable("tony");
	this.clickCount = ko.observable(0);
	this.imgSrc = ko.observable("https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426")

	// This increment the clickCount when is the img is clicked
	this.incrementClick = function () {
		this.clickCount(this.clickCount() +1);
	}

}

ko.applyBindings(new ViewModel());

