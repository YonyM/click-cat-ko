
 var initialCats = [

 	{
 		clickCount: 0,
		name: "Tony",
		imgSrc: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
		imgAttribution: "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
		nickNames: ['lion','fero', 'tengo']
 	},

 	{
 		clickCount: 0,
		name: "Piyu",
		imgSrc: "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454",
		imgAttribution: "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454",
		nickNames: ['pilo','coty', 'jango']
 	},
 	{
 		clickCount: 0,
		name: "Gimo",
		imgSrc: "https://c2.staticflickr.com/6/5141/5616147572_bf5ec3201f_o.jpg",
		imgAttribution: "https://c2.staticflickr.com/6/5141/5616147572_bf5ec3201f_o.jpg",
		nickNames: ['hoyu','tongu']
 	},
 	{
 		clickCount: 0,
		name: "Sleppy",
		imgSrc: "https://c1.staticflickr.com/9/8565/16044941077_aa8574545f_b.jpg",
		imgAttribution: "https://c1.staticflickr.com/9/8565/16044941077_aa8574545f_b.jpg",
		nickNames: ['guaa','zzz']
 	}
 ]


 var Cat = function (data) {

 	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc)
	this.imgAttribution = ko.observable(data.imgAttribution);

	this.level=ko.observable("");

	this.nickNames = ko.observableArray (data.nickNames);
	
	this.removeNickName = function () {
		this.nickNames.remove(this);
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

// View model using Observables with KnockOut
var ViewModel = function () {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catList()[0]);

	// This increment the clickCount when is the img is clicked
	this.incrementCounter = function () {
		var previousCount = this.clickCount();
		this.clickCount(previousCount + 1);
		console.log(this.clickCount());
	};

	this.setCat = function(clickedCat){
		self.currentCat(clickedCat);
	}

}

ko.applyBindings(new ViewModel());

