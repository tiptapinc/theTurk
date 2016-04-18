Template.dataTable.helpers({
	results: function() {
		return Results.find().fetch()
	}
})


Template.dataTable.events({
	'click #buttonDownload': function(event) {
		var id = this._id
		var nameFile = 'ImageRater-' + id + '.csv';
		Meteor.call('download', id, function(err, fileContent) {
		    if(fileContent){
		     var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
		     saveAs(blob, nameFile);
		    }
	  	});
	}
});


Template.admin.events({

})