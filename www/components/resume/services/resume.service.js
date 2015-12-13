(function(){
	
angular
	.module('will.resume')
	.factory('ResumeService', ResumeService);
	
ResumeService.$inject = [];

function ResumeService(){
	var services = {
		skills: [
			{
				name: 'HTML',
				desc: 'I can use all that HTML5 has to offer to make a responsive web app.',
				img: 'img/HTML5.png',
				imgLink: 'https://en.wikipedia.org/wiki/HTML5'
			},
			{
				name: 'CSS',
				desc: 'With CSS3 and my skills you can have a beautiful website that can be viewed on any device or browser. I am experienced with Bootstrap and various other plugins that can aid in the design of your website. A am also very experience with preprocessors such as Sass and Stylus, these preprocessors allow me to write easy to understand and easily maintainable CSS.',
				img: 'img/CSS3.svg',
				imgLink: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3'
			},
			{
				name: 'AngularJS',
				desc: 'I have been using AngularJS every day of my web development career. I know the ins and outs and am fully prepared to build a web app in either AngularJS 1 or AngularJS 2. AngularJS is a Javascript framework that allows your web app to be fully interactive and it provides functionality that to other framework can provide.',
				img: 'img/angularjs.png',
				imgLink: 'https://angularjs.org/'
			},
			{
				name: 'Gulp',
				desc: 'Gulp is the ultimate web development tool. With Gulp you can automate many tasks that can eat away time. I can use Gulp to save you time and money by automating almost any task that can be automated in the world of web development.',
				img: 'img/gulp.png',
				imgLink: 'http://gulpjs.com/'
			},
			{
				name: 'Node.js',
				desc: 'I can use Node.js to create a RESTful API. I can use Express, Restify, and other Node.js frameworks to achieve everything you want your server to do. With Node.js I can access your database while still maintaining the security that you need.',
				img: 'img/nodejs.png',
				imgLink: 'https://nodejs.org/en/'
			},
			{
				name: 'Payment Processing',
				desc: 'I have used several different ways of handling payment processing, mainly through Braintree\'s (a Paypal Company) API. I am also very well educated on PCI Compliance and can create a PCI compliant web app.',
				img: 'img/creditCards.png',
				imgLink: 'https://www.pcisecuritystandards.org/'
			},
			{
				name: 'Design',
				desc: 'I have experience in using Photoshop, Illustrator, and other media design tools.',
				img: 'img/adobeCS.png',
				imgLink: ''
			},
			{
				name: 'Database Management',
				desc: 'I have used MySQL and NoSQL (MongoDB) databases and can integrate these databases with your web app. I also have experience in manipulating and managing data in these databases.',
				img: 'img/mongodb.png',
				imgLink: 'https://www.mongodb.org/'
			},
			{
				name: 'Learner',
				desc: 'I am an extremely fast learner because I love to learn new things. If there is anything your company needs me to do that I do not know already I won\'t hesitate to learn whatever it is I need to learn.',
				img: 'img/learning.jpg',
				imgLink: ''
			},
			{
				name: 'Hard Worker',
				desc: 'I am a hard worker that doesn\'t waste any company time. I can work remote and still stay on task despite the idea that people can\'t stay on task all the time while working remote. If your company worries about remote employees (or contractors) staying on task, you don\'t need to worry about that with me.',
				img: 'img/remote.jpg',
				imgLink: ''
			}
		],
		experiences: [
			{
				title: 'Software Engineer',
				company: 'Novi Security',
				location: 'Orem, Utah',
				startDate: 'June, 2015',
				endDate: 'Present',
				img: 'img/Novi.svg',
				responsibilities: [
					'Develop multiple company web sites.',
					'Give assistance to sales and advertising division.',
					'Interact directly with payment processing and order fulfillment companies.'
				]
			},
			{
				title: 'Database Technician',
				company: 'Advance Fiber Optics',
				location: 'Salt Lake City, Utah',
				startDate: 'January, 2015',
				endDate: 'June, 2015',
				img: 'img/AFO.png',
				responsibilities: [
					'Update and maintain MySQL database.',
					'Manipulate and check validity of data.'
				]
			},
			{
				title: 'Data Technician',
				company: 'Advance Fiber Optics',
				location: 'Salt Lake City, Utah',
				startDate: 'April, 2014',
				endDate: 'June, 2015',
				img: 'img/AFO.png',
				responsibilities: [
					'Interact with telecommunication fiber optic designers to input data into an interactive fiber optic management program.',
					'Maintain logs of activities and completed work.',
					'Communicated directly with telecommunication companies to resolve issues.'
				]
			},
		],
		education: [
			{
				school: 'Utah State University',
				location: 'Logan, Utah',
				startDate: 'August, 2015',
				endDate: 'Present',
				img: 'img/utahState.png',
				imgLink: 'http://www.usu.edu/',
				info: [
					'Majoring in Computer Science.',
					'Minoring in Advanced Mathematics.',
					'Member of computer science club.'
				]
			},
			{
				school: 'DevMountain',
				location: 'Salt Lake City, Utah',
				startDate: 'March, 2015',
				endDate: 'July, 2015',
				img: 'img/devMountain.png',
				imgLink: 'https://devmounta.in/',
				info: [
					'Took DevMountain\'s Web Development course.',
					'Learned AngularJS and other Javascript frameworks.',
					'Learned the basics of HTML5 and CSS3.'
				]
			},
			{
				school: 'Bingham High School',
				location: 'South Jordan, Utah',
				startDate: 'August, 2011',
				endDate: 'June, 2015',
				img: 'img/bingham.png',
				imgLink: 'http://www.binghamminers.org/',
				info: [
					'Maintained a 3.9+ GPA while taking several advanced classes.',
					'Worked 20+ hours while going to school fulltime.',
					'Played two sports (baseball and football) which taught me how to be a leader and work as a team with other individuals.'
				]
			}
		],
		awards: [
			{
				name: 'National AP Scholar',
				desc: 'Oobtaining a score of 4 or more on several AP exams (AP Calculus, AP Physics, AP United States History, and AP Statistics).'
			},
			{
				name: 'Academic All-State',
				desc: 'Having one of the highest GPAs the the state of Utah for all football players.'
			}
		]
	};
	return services;
}
	
})();