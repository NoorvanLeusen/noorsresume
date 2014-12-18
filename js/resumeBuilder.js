


// bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts 
// object should contain (but doesn't have to) a mobile number, email address, github username, 
// twitter handle and location.

var bio = {
	"name" : "Noor van Leusen",
	"role" : "philosopher of language",
	"skills" : ["research","teaching","text editing","computation","classical singing"],
	"mypicture" : "images/NoorvL-rotated2014.JPG",
	"welcomeMessage" : "Carpe diem!",	

	"contacts" : {
		"phone" : "0031-6-11111111",
		"email" : "n(dot)vanleusen(at)gmail.com",
		"github" : "NoorvanLeusen",
		"location" : "Tilburg (NL)"
	}
};

// $("#main").append(bio.welcomeMessage); // just to test

/*
	bio.city = "Tilburg"; // this ADDS a property 'city' to object 'bio'. 
	bio.age = 99; // idem, NOTE there is no need to declare a new variable!
	// alternatively , you can use bracket notation to define a property:  
	// bio["city"] = "Tilburg";
	// note that the property is in string notation.

*/
 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
 $("#header").prepend(formattedRole); // the order of these statements matter,
 $("#header").prepend(formattedName); // so this puts the name before the role!

 var formattedGeneric = HTMLcontactGeneric.replace("%contact%","type").replace("%data%","humanoide");
 $("#topContacts").append(formattedGeneric); // this has two arguments contact and data!
 var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.phone);
 $("#topContacts").append(formattedMobile); // places this object at the current end of the header unit.
 var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
 $("#topContacts").append(formattedEmail); // places this object at the current end of the header unit.
 var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
 $("#topContacts").append(formattedLocation);//
 var formattedPicture = HTMLbioPic.replace("%data%",bio.mypicture);
 $("#header").append(formattedPicture); 
 $("#header").append("<div id='divTooltip'> Hi, pleased to meet you! </div>"); // added to test what happens...
 var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
 $("#header").append(formattedWelcome);
 

// the following script serves to show or hide the tooltip comment when mouse hovers
// over the picture:
$("img").hover(
	//function handlerIN blocks default display value none on mouse-enter:
	function(){
		$("#divTooltip").css("display","block");
	},
    //function handlerOut resets default display value on mouse-leave:
	function (){
		$("#divTooltip").css("display","none");
	}); 


// the following lists the skills at a glance in the header:

 if (bio.skills.length > 0) {                      // there is at least one skill
 	                   $("#header").append(HTMLskillsStart);
                    var formattedSkill = HTMLskills.replace("%data%", bio.skills.join(" - "));
                    $("#skills").append(formattedSkill);
 	                //  for (var i in bio.skills){
	                //   var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                    //  $("#skills").append(formattedSkill);
                    //     }
 	
 	                   // the following solution re-assigns the same variable a few times:
 	                 //  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
                     //  $("#skills").append(formattedSkill);
                      // formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
                      // $("#skills").append(formattedSkill);
                    //   formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
                    //   $("#skills").append(formattedSkill);
                    //   formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
                    //   $("#skills").append(formattedSkill);
 	                  } else { 
 	                  	console.log("no skills in the array"); 
 	 	}

 // if (bio.skills === undefined) {console.log("skills array is undefined");}	// dit werkt niet, waarom niet? 	
 
 /* you will want to list the skills as well in the skills chart of the resume; 
 create a skills-entry for this --

 function displaySkills(){

 	for (skill in bio.skills)
	{var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skillsChart").append(formattedSkill);	
     }

 }
  displaySkills();
  */

// projects contains an array of projects. Each project object in projects should contain 
// a title, dates worked, description, and an images array with URL strings for project images:

var projects = {
	
	"proj_arr" : [
	{
		"title" : "Quantity Matters",
		"datesWorked" : "April 2010 - Oct. 2012",
		"description" : "Research project for the Dutch science foundation NWO, experimentally investigating quantity implicatures in embedded positions.",
		"images": 
		 		[{
					"source": "images/the-far-side1.jpg",
					"caption": "Creative section"
					},
				{
					"source": "images/fry.jpg",
					"caption": "Management representative"
				}
				]  
	},
    {
		"title" : "Totentanz Concert",
		"datesWorked" : "March - May 2014",
		"description" : "Organisation of theatrical concert 'Totentanz' in the museum of natural history in Tilburg.",
		"images": [{
					"source": "images/Totentanz/TTrepetitie003.JPG",
					"caption":"The Museum of Natural History in Tilburg"	
					},
				{
					"source": "images/Totentanz/TTrepetitie005.JPG",
					"caption": "Preparations in the ice age hall"
				},

				{
					"source": "images/Totentanz/TTdancelamelis.jpg",
					"caption": "\u02C8Decline and Renewal\u02C8 dance by Lamelis"
				},
				{
					"source": "images/Totentanz/TTfarmeranddeath.jpg",
					"caption": "\u02C8Death and Soldier\u02C8 scene in Hugo Distler\u02C8s <i>Totentanz</i> "
				},
				{
					"source": "images/Totentanz/TTflowers.jpg",
					"caption": "Applause and flowers"
				}]
	}// closes Totentanz project
	
]// closes proj_array
}// closes project object

//the following defines a new property or method 'display' of the projects object
//it appends all of the projects information to the project section; so this makes 
//the display function an encapsulated function.

// I  had to change the value of the projects var from an array of objects into a single object 
// to avoid the display of an additional undefined project! Strange.
// So now the project object contains the superfluous key "proj_arr"
// The instructor's solution defines it for (pro in projects.projects){ ... }

projects.display = function() {

	for (var pro in projects.proj_arr){

	$("#projects").append(HTMLprojectStart);
	var thisProject = projects.proj_arr[pro]; // value is an object in proj_arr of projects object.

	var formattedTitle = HTMLprojectTitle.replace("%data%", thisProject.title);
    var formattedDates = HTMLprojectDates.replace("%data%", thisProject.datesWorked);
	var formattedDescr = HTMLprojectDescription.replace("%data%", thisProject.description);
	$(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescr);

// the following outputs the pictures and their captions to the webpage, layout to be improved: 
/*
    if (thisProject.images.length > 0) {
    	for (pic in thisProject.images) {
		var formattedImage = HTMLprojectImage.replace("%data%", thisProject.images[pic].source);
		var formattedImageDescr = HTMLImageDescription.replace("%data%",thisProject.images[pic].caption);
    	$(".project-entry:last").append(formattedImageDescr);
    	$(".project-entry:last").append(formattedImage);
    	
			}

		} // closes IF
*/

	if (thisProject.images.length > 0) { // then create a slide-show for thisProject:

		console.log(pro);
		var thisSlideshow = "slideshow" + pro;  //unique identifier for this projects' slideshow
		var thisImgBox = "imagecontainer" + pro; //unique id for this project's imagecontainer
		var thisPrev = "prev"+ pro;
		var thisNext = "next"+ pro;
		var theseCaptions = "alt-caption"+ pro;

		//introduce an element of class slide-show: 
		var formattedSlideshowStart = HTMLslideshowStart.replace("%data%",thisSlideshow);
		$(".project-entry:last").append(formattedSlideshowStart); 
		console.log(formattedSlideshowStart);

		// format and insert control buttons for thisslideshow:
		var formattedPrevnext = HTMLprevnext.replace("%prev%",thisPrev).replace("%next%",thisNext);
		console.log(formattedPrevnext);
		$("#"+thisSlideshow).append(formattedPrevnext);   

		// the following introduces an imagecontainer element; it includes 
		// the class attribute 'cycle-slideshow' which activates the cycle plugin (see helper.js):
		var formattedImageContainer = HTMLImageContainer.replace("%data%",thisImgBox);
		console.log(formattedImageContainer);
		$("#"+thisSlideshow).append(formattedImageContainer);
		
		// various further attributes constrain the behaviour of the plugin (see Cycle2 website):
		var cycleSettings = {
			"data-cycle-fx" : "scrollHorz", //type of image fading 
    		// "data-cycle-timeout": 2000,
    		"data-cycle-timeout": 0, // prevents automatic slide change, for maual slide show
    		"data-cycle-manual-speed" : 200, 
            "data-cycle-prev" : "#"+thisPrev, //binds previous control, for manual slide show
            "data-cycle-next" : "#"+thisNext, //binds next  control
    		// "data-cycle-caption" : "#custom-caption",
    		"data-cycle-caption" : "#"+theseCaptions, // employ the alt-attribute of the image: 
    		"data-cycle-caption-template" : "{{alt}}"  //a named placeholder?? what does {{}} mean?
		};
		$("#"+thisImgBox).attr(cycleSettings);  // adds this set of attributes to imagecontainer element.
		 			
    	for (var pic in thisProject.images) { 
    	// inserts images plus captions from thisProject into the imagecontainer:
  	 		var formattedImage1 = HTMLprojectImage.replace("%data%", thisProject.images[pic].source);
    		var formattedImage2 = formattedImage1.replace("%text%", thisProject.images[pic].caption);
    		$("#"+thisImgBox).append(formattedImage2);
    		}    	
    	$("#"+thisImgBox).append("</div>"); //closes the imagecontainer element

    	// the following an appends empty element for the caption:
    	var formattedCaptions = HTMLcaptions.replace("%data%",theseCaptions);
        $("#"+thisSlideshow).append(formattedCaptions);
    	$("#"+thisSlideshow).append("</div>"); // closes the slideshow element 


		} //closes IF in projects.display function

  	} //closes FOR (pro in projects.proj_arr)

} // closes project.display function.

projects.display(); // this calls the display function.


// work contains an array of jobs. Each job object in jobs should contain an employer, title, 
// location, dates worked and description.

 var work = {
     "jobs" : [{
     		"URL" : "https://www.tilburguniversity.edu//research/institutes-and-research-groups/tilps/",
     		"employer" : "Tilburg University",
     		"title" : "research associate",
     		"location" : "Tilburg (NL)" ,
     		"datesWorked" : "2013 - 2014",
     		"description" : "associate researcher with the Tilburg institute for logic, ethics, and philosophy of science (TiLPS)."
     		},
     		{
     		"URL" : "http://www.uni-duesseldorf.de/home/en/home.html",
     		"employer" : "Heinrich Heine University D\u00FCsseldorf ",
     		"title" : "post-doctoral researcher",
     		"location" : "D\u00FCsseldorf (DE)",
     		"datesWorked" : "April 2013 - Oct 2014 ",
     		"description" : "Preparatory work for experimental research on online effects of context parameters on the processing of gradable adjectives and verbs."
     		},
     		{
     		"URL" :	"http://www.ru.nl/ptrs/",
     		"employer" : "Radboud University Nijmegen",
     		"title" : "post-doctoral researcher",
     		"location" : "Nijmegen (NL)",
     		"datesWorked" : "April 2010 - Oct 2012" ,
     		"description" : "See Quantity Matters project. Research on the derivation of quantity implicatures in a formal model of discourse interpretation."},

     		{
     		"URL" : "http://www.zas.gwz-berlin.de/index.php?id=2&L=1",
     		"employer" : "Centre for General Linguistics (ZAS) Berlin",
     		"title" : "post-doctoral researcher",
     		"location" : "Berlin (DE)",
     		"datesWorked" : "May 2009 - April 2010",
     		"description" : "Some stuff."
     		},
     		{
     		"URL" : "#",
     		"employer" : "University of Stuttgart, University of T\u00FCbingen",
     		"title" : "assistent editor",
     		"location" : "Stuttgart (DE)",
     		"datesWorked" : "May 2008 - April 2009",
     		"description" : "Assistant editor with <i>Semantics: An International Handbook of Natural Language Meaning</i> (eds. C.Maienborn, K. von Heusinger, P. Portner), De Gruyter. Reviewing and correction of handbook articles. User support with Latex editing."
     		}
     		] 
 }   

work.display = function(){

 	for (job in work.jobs)
	{$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#",work.jobs[job].URL);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked);
    var formattedworkLocation  = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedworkComment = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedEmployer + formattedTitle);
    $(".work-entry:last").append(formattedworkDates);
    $(".work-entry:last").append(formattedworkLocation);
    $(".work-entry:last").append(formattedworkComment); 
     }

 }
 work.display();

 /*
 .work-entry:last -- :last selecteert dynamisch het laatste element van de klasse work-entry.
 in style.CSS zijn alle identifiers (start met #) en alle klassen (start met .) gedefinieerd.

The :last jQuery selector returns the final element in a list that matches whatever precedes it.
So for work-entry:last, if there are 3 work-entry elements, it will only return the 3rd one.
Als je 't in een loop gebruikt selecteer je steeds de current last one.
*/

//locationizer must return an array of all the locations in work.
// Your code will be run against two different objects.
// can use array.push() method which adds values to the end of the array

function locationizer(work_obj) {

	var workLocations = [];

	for (var job in work_obj.jobs) {

		workLocations.push(work_obj.jobs[job].location);

		// var newLocation = work_obj.jobs[job].location;
		// workLocations.push(newlocation);
	}

	return(workLocations);
}
console.log(locationizer(work));

//the internationalise names button task:
// I want this to work for compound family names like my own as well...

$("#main").append(internationalizeButton);  // appends button to html page

function inName(name_str){
	
	var namesArr = name_str.split(" "); // changes string to array of names.
	var outArr = [];             // declares array which will contain the modified names.

	var firstName = namesArr[0][0].toUpperCase() + namesArr[0].slice(1).toLowerCase();

	outArr.push(firstName);  // includes modified firstname in outArr
	namesArr.shift();       // removes first element from namesArr

	for (naam in namesArr) {
		var lastName = namesArr[naam].toUpperCase();  //changes each name to uppercase
		outArr.push(lastName);                   // and adds the result to the outArr
	}

	var internationalisedName = outArr.join(" "); // joins the el-s in the array into a single string
	return(internationalisedName);  //returns the string
}

// console.log(inName("sebastian thrun"));
// console.log(inName("bernHARD von Lippe BISTERfeld"));  // 

/* instructors alternative:

function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " "+ name[1];
}

*/

/* 
education contains an array of schools. Each school object in schools contains 
a name, location, degree, majors array, dates attended and a url for the school's 
website. education also contains an onlineCourses array. Each onlineCourse object in 
onlineCourses should contain a title, school, dates attended and a url for the course.
 */

var education = {
"schools" : [
	{
	"name" : "Radboud University",
	"location" : "Nijmegen (NL)",
	"url" : "http://www.ru.nl/english/",
	"dates_att" : "2005-2007",
	"gradyear" : 2007,
	"degree" : "PhD in philosophy",
	 "majors" : []
	},
	{
	"name" : "Tilburg University",
	"location" : "Tilburg (NL)",
	"url" : "https://www.tilburguniversity.edu/",
	"dates_att" : "1985-1991",
	"gradyear" : 1991,
	"degree" : "MA in Arts",
	"majors" : ["linguistics", "formal semantics"]
	},
	{	
	"name" : "Katholiek Geldersch Lyceum", 
	"location" : "Arnhem (NL)",
	"url" : " ",
	"dates_att" : "1979-1985",
	"gradyear" : 1985,
	"degree" : "highschool certificate",
	"majors" : ["Dutch", "English", "French", "history", "maths", "chemistry", "biology"]	
	} ],
"onlineCourses" : [
	{	
	"school" : "Udacity.com", 
	"coursetitle" : "Javascript Basics",
	"dates_att" : "2014",
	"url" : "https://www.udacity.com/course/ud804"
	} ]
} 	

education.display = function() {

	for (school in education.schools){

	$("#education").append(HTMLschoolStart);

   	var formattedUnivName = HTMLschoolName.replace("%data%", education.schools[school].name);
	var formattedUnivDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);	
	var formattedUnivDates = HTMLschoolDates.replace("%data%", education.schools[school].dates_att);
	var formattedUnivLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

    $(".education-entry:last").append(formattedUnivName + formattedUnivDegree);
	$(".education-entry:last").append(formattedUnivDates + formattedUnivLocation);
	
	if  (education.schools[school].majors.length > 0) {
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);
		} else {
			$(".education-entry:last").append("<br > ");
			}
     } // closes for school loop

    if (education.onlineCourses.length > 0) { //then create online courses entries under 'education':

    	$("#education").append("<br>" + HTMLonlineClasses);

    	for (course in education.onlineCourses){
    
		$("#education").append(HTMLschoolStart); // introduces a div of class  education-entry

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].coursetitle);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates_att);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#",education.onlineCourses[course].url);   
    	$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
		$(".education-entry:last").append(formattedOnlineDates + formattedOnlineURL);
		//$(".education-entry:last").append(formattedOnlineURL );

     	} // closes for course loop 
     } // closes IF there are online courses DO condition.

 } // closes eduction.display function

 education.display(); // this calls the display function.


/*
//publications; for future use in resume:

var publications = [
	{
	"pubtitle": "The Accommodation Potential of Implicative Verbs",
	"authors": "N. van Leusen",
	"appeared_in": "in 'Logic, Language and Meaning, revised selected papers of the 18-th Amsterdam Colloquium', LNCS 7218, pp. 421–430. Springer, Heidelberg.",
	"year": 2012,
	"pdf": "publications/VanLeusen12.pdf" },
	{
	"pubtitle": "Description Grammar for Discourse",
	"authors": "N. van Leusen",
	"appeared_in": "Ph.D. thesis, Radboud Universiteit Nijmegen",
	"year": 2007,
	"pdf": "publications/NvanLeusen07-sumdiss.pdf" },
	{
	"pubtitle":"Incompatibility in Context: A Diagnosis of Correction",
	"authors": "N. van Leusen",
	"appeared_in":"in 'Journal of Semantics', vol. 21 nr. 4, pp. 415–442.",
	"year":2004,
	"pdf": "publications/VanLeusen04.pdf"},
	{
	"pubtitle":"Construction by Description in Discourse Representation",
	"authors": "N. van Leusen and R. Muskens",
	"appeared_in": "in J. Peregrin (ed.), Meaning, the Dynamic Turn, pp. 34–67. Elsevier.",
	"year": 2003, 
	"pdf": "publications/MuskensvLeusen03.pdf"}
	]
	*/
 
// the following adds a map to resume: mapDiv is the id of the last element in index.html
// all the rest of the action is in helper.js...

$("#mapDiv").append(googleMap);