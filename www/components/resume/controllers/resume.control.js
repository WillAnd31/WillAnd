(function(){

angular
	.module('will.resume')
	.controller('resumeControl', resumeControl);

resumeControl.$inject = [
	'ResumeService'
];

function resumeControl(ResumeService){

	var resumeScope = this;
	angular.extend(resumeScope, {
		skills: ResumeService.skills,
		experiences: ResumeService.experiences,
		education: ResumeService.education,
		awards: ResumeService.awards,
		showSkill: showSkill,
		showExperiences: showExperiences,
		showEducation: showEducation,
		showAwards: showAwards
	});
	init();
	
	function init(){
		var i,
			skillsLength = resumeScope.skills.length,
			educationLength = resumeScope.educationLength,
			experiencesLength = resumeScope.experiences.length,
			awardsLength = resumeScope.awards.length;
		
		for (i = 0; i < skillsLength; i++){
			resumeScope.skills[i].show = false;
		}
		
		for (i = 0; i < experiencesLength; i++){
			resumeScope.experiences[i].show = false;
		}
		
		for (i = 0; i < educationLength; i++){
			resumeScope.education[i].show = false;
		}
		
		for (i = 0; i < awardsLength; i++){
			resumeScope.awards[i].show = false;
		}
	}
	
	function showSkill(index){
		var i,
			skillsLength = resumeScope.skills.length;
			
		for (i = 0; i < skillsLength; i++){
			if (i !== index){
				resumeScope.skills[i].show = false;
			}
		}
		
		resumeScope.skills[index].show = !resumeScope.skills[index].show;
	}
	
	function showExperiences(index){
		var i,
			experiencesLength = resumeScope.experiences.length;
			
		for (i = 0; i < experiencesLength; i++){
			if (i !== index){
				resumeScope.experiences[i].show = false;
			}
		}
		
		resumeScope.experiences[index].show = !resumeScope.experiences[index].show;
	}
	
	function showEducation(index){
		var i,
			educationLength = resumeScope.education.length;
			
		for (i = 0; i < educationLength; i++){
			if (i !== index){
				resumeScope.education[i].show = false;
			}
		}
		
		resumeScope.education[index].show = !resumeScope.education[index].show;
	}
	
	function showAwards(index){
		var i,
			awardsLength = resumeScope.awards.length;
			
		for (i = 0; i < awardsLength; i++){
			if (i !== index){
				resumeScope.awards[i].show = false;
			}
		}
		
		resumeScope.awards[index].show = !resumeScope.awards[index].show;
	}

}

})();