var bio = {
	"name" : "Ilja Waleew",
	"role" : "Consultant",
	"welcomeMessage" : "Hello, this is my interactive resume!",
	"image" : "images/ava.jpg",
	"contacts" : [{
		"mobile" : "+49 176 551 665 77",
		"skype": "ilja.waleew",
		"location" : "Hamburg in Germany",
		"email" : "ilja.waleew@gmail.com"
	}],
	"skills" : ["Programming, Business Development, Consulting"]
};

var work = {
	"jobs":[
    {
      "employer":"magnolia psychometrics GmbH",
      "title":"Co-Founder and Chief Financial Officer",
      "location":"Leipzig, Germany",
      "dates":"2/9/17 - 9/30/17",
      "description":"Development of the Business Model and Acquisition of Financial Investors"
    },
    {
      "employer": "magnolia psychometrics GbR",
      "title": "Co-Founder and Chief Financial Officer",
      "location": "Chemnitz, Germany",
      "dates": "4/1/16 - 2/8/17",
      "description": "Development of the Business Model and Acquisition of Financial Investors"
    },
    {
      "employer": "Starrag GmbH",
      "title": "Working Student in Purchase ",
      "location": "Chemnitz, Germany",
      "dates": "4/1/16 - 6/30/16",
      "description": "Purchasing of Individual Parts"
    },
    {
      "employer": "envia Mitteldeutsche Energie AG",
      "title": "Working Student in Business Development",
      "location": "Chemnitz, Germany",
      "dates": "4/1/16 - 9/30/16",
      "description": "Development of New Products"
    },
    {
      "employer": "WEIT Führung GmbH",
      "title": "Working Student in Consulting",
      "location": "Chemnitz, Germany",
      "dates": "4/2/16 - 2/8/17",
      "description": "Consulting of own Customers"
    },
    {
      "employer": "WEIT Führung GmbH",
      "title": "Internship in Consulting",
      "location": "Chemnitz, Germany",
      "dates": "3/1/14 - 5/30/14",
      "description": "Support of Consultants"
    },
  ]
};

var education = {
	"schools" : [
	{
		"name" : "University of Technology Chemnitz",
		"location" : "Chemnitz, Germany",
		"degree" : "Master of Science",
		"majors" : "Finance",
		"dates" : "10/01/2014 - 09/30/2017",
		"url" : "tu-chemnitz.de"
	},
	{
		"name" : "University of Technology Chemnitz",
		"location" : "Chemnitz, Germany",
		"degree" : "Bachelor of Science",
		"majors" : "Business Administration",
		"dates" : "10/01/2010 - 01/26/2015",
		"url" : "tu-chemnitz.de"
	}],
	"online courses" : [{
		"title" : "Front-End Web Dev",
		"school" : "udacity",
		"dates" : "11/01/2017 - 11/21/2017",
		"url" : "www.udacity.com/google-scholarships"
	}]
};


bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.image);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%",bio.contacts[contact].skype);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype);
	};
};

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}
};

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
	}
};

projects.display = function(){
	for(item in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);

		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		for (image in projects.project[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		};



	}
};

function inName(name){
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();

	return newName;
};


work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
