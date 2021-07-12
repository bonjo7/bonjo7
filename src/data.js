import RedHat from "./images/redhat-logo.png";
import SE2 from "./images/SE2.png";
import WaterfordAirport from "./images/Waterford-Airport.png";
import DefenceForces from "./images/defence-forces.jpeg";
import Musgraves from "./images/musgraves.png";

export const techSkills = [
  {
    title: "Design",
    skill: ["HTML", "CSS", "Responsive Design", "Photoshop"],
  },
  {
    title: "Code",
    skill: ["Javascript", "NodeJS", "Bash", "Java", "SQL", "noSQL"],
  },
  {
    title: "Frameworks",
    skill: ["ReactJS", "Angular", "Native Android", "Native iOS"],
  },
  {
    title: "Container technologies",
    skill: ["Podman", "Docker", "Jenkins Pipelines (CI/CD)", "Openshift"],
  },
];

export const softSkills = [
  {
    title: "Product Management",
    skill: ["Agile Methodology", "Requirements Gathering", "Technical Guides"],
  },
  {
    title: "Planning Tools",
    skill: ["Jira", "Trello", "Miro"],
  },
  {
    title: "Personal",
    skill: [
      "Leadership",
      "Organisation",
      "Time Management",
      "Attention to detail",
    ],
  },
];

export const experienceData = [
  {
    id: 1,
    image: RedHat,
    companyName: "Red Hat",
    year: "January 2019 - Present",
    roleDates: ["August 2020 – Present", "January 2019 – August 2020"],
    role: ["Associate App Dev Consultant", "Graduate App Dev Consultant"],
    address: "Red Hat, Communications House, Cork Road, Waterford, Ireland.",
    roles: [
      "Constantly learn about new Red Hat technologies and apply those concepts to customer needs.",
      "Working with modern application development practices and evaluate existing applications to update and add new features.",
      "Assist with technical and non-technical project-related activities.",
      "Work closely with my colleagues in a collaborative team environment to meet timelines and goals and share information at all opportunities.",
      "Build and maintain collaborative relationships with my colleagues and out customers.",
      "Using critical thinking skills to tackle through problems in an innovative way.",
      "Understand customers’ requirements and how they translate to application features.",
      "Write high quality source code to create applications within deadlines.",
      "Actively participate in daily stand ups, sprint retrospectives and sprint planning",
      "Refactor and develop web and mobile applications using, HMTL, CSS, JavaScript and NodeJS while conforming with accessibility criteria",
      "Creation of Bash scripts to migrate customer applications from RHMAP (Red Hat Mobile Application Platform) to OCP (OpenShift Container Platform)",
    ],
  },
  {
    id: 2,
    image: SE2,
    companyName: "SE2",
    year: "Spetember 2018 -  December 2018",
  },
  {
    id: 3,
    image: WaterfordAirport,
    companyName: "Waterford Airport",
    year: "April 2007 - April 2018",
  },
  {
    id: 4,
    image: DefenceForces,
    companyName: "Irish Defence Forces",
    year: "December 2006 - April 2007",
  },
  {
    id: 5,
    image: Musgraves,
    companyName: "Musgraves Cash & Carry",
    year: "September 2001 - December 2006",
  },
];
