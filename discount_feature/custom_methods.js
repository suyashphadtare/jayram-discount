
CustomerToDOCommunication = frappe.ui.form.Controller.extend({
	refresh:function(){
		var frm = this.frm;
		if(!frm.doc.__islocal){
			var mapper = [{"doctype":"ToDo", "route_options":{"reference_type":"Customer", "reference_name":frm.doc.name} }, 
						  {"doctype":"Communication", "route_options":{"reference_doctype":"Customer", "reference_name":frm.doc.name} }];

			mapper.forEach(function(doctype, i) {
				frm.add_custom_button(__(doctype["doctype"]), function() {
					frappe.route_options = doctype["route_options"];
					new_doc(doctype["doctype"]);
				}, __("Make"));
			});
		}
	}

})


ContactCommunicationToDO = frappe.ui.form.Controller.extend({
	refresh:function(){
		var frm = this.frm;
		if(!frm.doc.__islocal){
			var mapper = [{"doctype":"ToDo", "route_options":{"reference_type":"Contact", "reference_name":frm.doc.name} }, 
						  {"doctype":"Communication", "route_options":{"reference_doctype":"Contact", "reference_name":frm.doc.name} }];
			
			mapper.forEach(function(doctype, i) {
				frm.add_custom_button(__(doctype["doctype"]), function() {
					frappe.route_options = doctype["route_options"];
					new_doc(doctype["doctype"]);
				}, __("Make"));
			});
		}
	}
})




CommunicationToDO = frappe.ui.form.Controller.extend({
	refresh:function(){
		var frm = this.frm;
		if(!frm.doc.__islocal){
			var ref_type = frm.doc.reference_doctype == "Contact" ? "Contact" : "Communication"
			var ref_name = frm.doc.reference_doctype == "Contact" ? frm.doc.reference_name : frm.doc.name
			var mapper = [ {"doctype":"ToDo", "route_options":{"reference_type":ref_type, "reference_name":ref_name } } ];
			
			mapper.forEach(function(doctype, i) {
				frm.add_custom_button(__(doctype["doctype"]), function() {
					frappe.route_options = doctype["route_options"];
					new_doc(doctype["doctype"]);
				}, __("Make"));
			});
		}
	},

})