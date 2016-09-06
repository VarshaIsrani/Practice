 $(function() {
  // Document is ready
   function viewModel() {
        var self = this;
        self.detailsEnabled = ko.observable(false);
		self.showmodal = ko.observable(false);
    
         self.details = ko.observableArray([
             {eid: '1', fname: 'Varsha', lname: 'Israni', comp:'Cybage'},
             {eid: '2', fname: 'Akash', lname: 'Israni', comp: 'Infosys'},
             {eid: '3', fname: 'Anchal', lname: 'Singh', comp:'Semantics'},
             {eid: '4', fname: 'Aayushi', lname: 'Sinha', comp:'Accenture'}
             ]);
    
        self.empid = ko.observable("");
        self.firstname = ko.observable("");
        self.lastname = ko.observable("");
        self.company = ko.observable("");
        self.empid1 = ko.observable("");
        self.firstname1 = ko.observable("");
        self.lastname1 = ko.observable("");
        self.company1 = ko.observable("");
   
        self.openmodal = function(row){
            self.showmodal(true);
        }
		
		var selectedRow = {};
		
		self.confirmRemoveRow = function(row){
            //self.details.remove(row);
			selectedRow = row;
			console.log(selectedRow);
        }
		
		self.removeRow = function(){
            self.details.remove(selectedRow);
        }
    
        self.displayRow = function(row){
            self.empid(row.eid);
            self.firstname(row.fname);
            self.lastname(row.lname);
            self.company(row.comp);
            i= self.details.indexOf(this);
            console.log(row);
            self.detailsEnabled(true);
        }
		
		self.cancelEdit = function() {
			self.detailsEnabled(false);
		}
    
         self.saveRow = function(){
            self.empid1 = self.empid();
            self.firstname1 = self.firstname();
            self.lastname1 = self.lastname();
            self.company1 = self.company();
            this.modifiedDetails= ko.observable({
                                eid:self.empid1, fname:self.firstname1,lname:self.lastname1,comp:self.company1});
            self.details.splice(i,1,this.modifiedDetails());
			self.detailsEnabled(false);
        }
     }
 
ko.applyBindings(new viewModel());
});

