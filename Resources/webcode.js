function map(pages) {
	var current_button = document.getElementsByClassName("subactive")[0];
	var current_topic = document.getElementsByClassName("viewing")[0];

	for (let i in pages) {
		let name = pages[i];
		let button = document.getElementById(name+"_b");
		let topic = document.getElementById(name);
		
		if (topic!=current_topic) {
			topic.style="visibility:hidden; position: fixed;";
		};
		
		button.onclick=(function (){
			current_topic.style="visibility:hidden; position: fixed;";
			current_button.classList.remove("subactive");
			
			current_topic=topic;
			current_button=button;
			
			current_topic.style="";
			current_button.classList.add("subactive");
		})
	};
};