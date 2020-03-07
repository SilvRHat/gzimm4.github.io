// Java Script for all functions on silvrShip.dev

function send_GA_Event(action_name,action_category,action_label,value) {
	if !(action_name)
		return;

	action_category=action_category || 'General';

	gtag(‘event’,action_name, 
		{‘event_category’ : action_category ,‘event_label’ : action_label,‘value’ : value});
}