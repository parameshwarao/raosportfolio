import { Component, OnInit } from '@angular/core';

export interface projectblock{
  experience:Array<string>;
  expand:boolean;
  experienceExpandedSection:Array<string>;
}

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstExperienceBlock  : projectblock =  { 
  expand : false,
  experience : [
    "Worked as Frontend developer as with technology stack .NET backend and frontend Angular.",
    "Experience Collaborating with Onsite Technical lead, program manager, client side teams and major Stakeholders for solving complex architecture level changes.",
    "Integrated Complex PrismDoc Viewer accusoft with existing apps as requested by clients.",
    "Took and worked on many spike and experimental items sent by leads",
    "suggested and made improvements to User experience",
    "Implemented UX Invision designs provided by client UX team.",
    "Followed an optimal, minimal and efficient coding approach to implement Azure DevOps PBI story requirements of client for every Iteration .",
    "Collaborated with client side frontend teams to implement storybook UI concept to project.",
    "Developed Storybook UI components in Angular and published them in NPM website.",
    "Implemented the NPM storybook UI package published into the project."
  ],
  experienceExpandedSection:[
    "Solved major CDN, Global style sheet issue and successfully persuade Stakeholders to migrate from GSS (Global Style sheet) to Storybook UI NPM package for better control over UI Components.",
    "Solved UAT and Prod UI and UX issues.",
    "Used UI logger & Azure Portal to find complex Backend Server Side API issues.",
    "Worked in both front end and back end server side for the development and bug fixing.",
    "Experience in Refactoring missing codes from GIT branch after code miss during GIT Branch Merge.",
    "Deployed the code onto dev server with help of Dev-ops team ",
    "Experience working in agile environment and keeping up track with onsite sync calls and Iteration progress.",
    "Created and merged GIT Development branches after having a code review and deployed into DEV Environment with help of Dev-ops team.",
    "Experience moving all GIT QA signoff branches to UAT by merging with master after client Approval.",
    "Experience using source tree GUI for understanding the branching and merging for tagging them with release version number.",
    "Experience Collaborating with Onsite Technical lead, program manager, client side teams and major Stakeholders for solving complex architecture level changes.",
    "Experience architecting and designing systems and working with various other architects.",
    "Experience in learning new tech and creating POC for client and helping them with product innovation and performance improvement.",
    "Experience writing documentation, teaching team members new concepts, creating POC’s in stackblitz, collaborating and learning.",
    "Experience in learning new client requested product integration, writing documentation for other developers to refer and maintenance. (prism docs by accusoft was integrated with frontend portal at client’s request) .",
    "Experience working with ECM system and attributes.",
    "Experience in mentoring and guiding junior developers"
  ]
  };

  secondExperienceBlock  : projectblock  = {
      expand : false,
      experience :  [
      "Worked as MEAN stack developer for a leading US E-commerce website Yankee candles owned by Newell brands.",
      "Followed an optimal, minimal and efficient coding approach to implement JIRA story requirements of client.",
      "Updated the backend mongo dB as per the requirements of clients and also used mongo compass to track objects and for backend bug fixing.",      
      "Experience working in agile environment and keeping up track with onsite calls and project tracking.",      
      "Understood and worked alongside big architects of other team to deploy our project by getting the necessary JSON object and Restful API's from other applications.",
      "Used NPM JIMP package to do the image manipulation in node server.",
      "Used adobe illustrator to fix image positions and then manipulated them into JavaScript co-ordinates for generating PNG and EPS images using JIMP."    
    ],
    experienceExpandedSection:[
      "Worked in both front end and back end side for the development and bug fixing.",
      "Fixed bug analysis and fixed it as raised by QA.",
      "Deployed the code onto dev server with help of Dev-ops team ",
      "Created and merged git branches after having a code review and deployed into server with help Devops team.",
      "Experience using source tree GUI for understanding the branching and merging for tagging them with release version number."
    ]
  };

  thirdExperienceBlock  : projectblock  = {
    expand : false,
    experience :  [
      "Frontend Employee Facing portal SAP support",
      "Resolving Minor UI UX bugs and working with various SAP teams",
      "Handling Database attributes and sales data in SAP MDG & MDM",
      "Resolving And troubleshooting access to users",
      "Maintaining and updating data and working with bussiness & Area Managers",
      "TroubleShooting SAP data flow from server to frontend and solving Goods Movement Issues",
      "Resolving Plant level Manufaturing process Recipe details update issues",
      "working with various departments and stakeholders"
  ],
  experienceExpandedSection:[
    "Maintaining Vendor, material and Customer governance in SAP MDM & MDG server",
    "Maintaining material Shelf life, unit of measure, batch management, location data extension, purchase organization",
    "Maintaining Customer attributes, Sales area, territory and approval mapping",      
    "Maintaining Vendor creation and change of attributes, bank details change, Tax changes for all vendor types",      
    "Maintaining user profiles and providing necessary access",
  ]
};

}
