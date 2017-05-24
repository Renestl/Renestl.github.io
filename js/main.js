$(document).ready(function() {
	
	$.getJSON("https://raw.githubusercontent.com/Renestl/Renestl.github.io/master/js/projects.json", function(data) {
		
		var projects = [];

		$.each(data, function(key, val) {
			projects.push(val);
			
		});

		console.log(projects);

		var projectList = projects.map(function(val){
			var content = `<div class="col-xs-12 col-sm-6 col-md-4">
								<li>
									<a class="projectGridCell" href="${val.website}" target="_blank">
										<img class="img-responsive projectGridImg" src="${val.image}" alt="${val.imgAlt}">
										<span class="projectGridOverlay">${val.name}</span>
										<span class="projectGridText"></span>
									</a>
								</li>
							</div>`;
			return content;
		});

		if (projectList.length) {
			$('.portfolio-projects').append(projectList);
		}
	})

	console.log('this works');
})


