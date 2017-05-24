$(document).ready(function() {
	
	// get list of projects with pertinant information
	$.getJSON("https://raw.githubusercontent.com/Renestl/Renestl.github.io/master/js/projects.json", function(data) {
		
		var projects = [];

		$.each(data, function(key, val) {
			projects.push(val);
			
		});

		var projectList = projects.map(function(val){
			var content = `<div class="col-xs-12 col-sm-6 col-md-4">
								<li class="flip-container">
									<div class="flipper">
										<div class="card-front">
											<a class="projectGridCell" href="${val.website}" target="_blank">
												<img class="img-responsive projectGridImg" src="${val.image}" alt="${val.imgAlt}">
											</a>
										</div>
										<div class="card-back">
											<h3>${val.name}</h3>
											<p class="projectGridText">${val.technology}</p>
											<p class="projectGridText2">${val.website}</p>
										</div>
									</div>
								</li>
							</div>`;
			return content;
		});

		if (projectList.length) {
			$('.portfolio-projects').append(projectList);
		}
	})




})


