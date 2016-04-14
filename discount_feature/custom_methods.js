
CustomerToDOCommuincation = frappe.ui.form.Controller.extend({
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


ContactCommuincationToDO = frappe.ui.form.Controller.extend({
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




CommuincationToDO = frappe.ui.form.Controller.extend({
	refresh:function(){
		var frm = this.frm;
		if(!frm.doc.__islocal){
			var mapper = [ {"doctype":"ToDo", "route_options":{"reference_type":"Communication", "reference_name":frm.doc.name} } ];
			
			mapper.forEach(function(doctype, i) {
				frm.add_custom_button(__(doctype["doctype"]), function() {
					frappe.route_options = doctype["route_options"];
					new_doc(doctype["doctype"]);
				}, __("Make"));
			});
		}
	},

})