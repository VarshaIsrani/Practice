$(function() {
  // Document is ready
	
	var dataO = {employees : [
	{firstname:"Varsha", lastname:"Israni", email:"varshai@cybage.com", dateOfJoining:"11-07-2016", extension:"8059", isOnBench:"true"},
	{firstname:"Akash", lastname:"Israni", email:"akashi@infosys.com", dateOfJoining:"10-06-2014", extension:"7057", isOnBench:"false"}
	]}; 
 
  function viewModel() {
        var self = this;
        self.detailsEnabled = ko.observable(false);
    
	
         self.details = ko.observableArray(dataO.employees);
		 
		 console.log(self.details());
    
	/* $.getJSON("AssigKnockout.json", function(data) { 
    // Now use this data to update your view models, 
    // and Knockout will update your UI automatically 
	 console.log(data);
	 self.employees = data.employees;
	}); */
	
        self.firstname = ko.observable("");
        self.lastname = ko.observable("");
        self.email = ko.observable("");
		
        self.empid1 = ko.observable("");
        self.firstname1 = ko.observable("");
        self.lastname1 = ko.observable("");
        self.company1 = ko.observable("");
		
		self.selectedRow = ko.observable({firstname: "", lastname: "", email: ""});
   
        self.removeRow = function(row){
            self.details.remove(row);
        }
    
        self.displayRow = function(row){
            self.firstname(row.firstname);
            self.lastname(row.lastname);
            self.email(row.email);
			
			self.selectedRow(row);
			console.log(selectedRow());
			
            i= self.details.indexOf(this);
            console.log(row);
            self.detailsEnabled(true);
        }
    
         self.saveRow = function(){
            self.empid1 = self.empid();
            self.firstname1 = self.firstname();
            self.lastname1 = self.lastname();
            self.company1 = self.company();
            this.modifiedDetails= ko.observable({
                                eid:self.empid1, fname:self.firstname1,lname:self.lastname1,comp:self.company1});
            self.details.splice(i,1,this.modifiedDetails());
        }
		
		
		 self.employees = {details: ko.observableArray(dataO.employees)};
     }
 
	ko.applyBindings(new viewModel());

});  