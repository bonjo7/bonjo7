import RedHat from "./images/RedHatLogo.png";
import SE2 from "./images/SE2.png";
import WaterfordAirport from "./images/Waterford-Airport.png";
import DefenceForces from "./images/defence-forces.jpeg";
import Musgraves from "./images/musgraves.png";
import WIT from "./images/WIT-logo.jpeg";
import ILM from "./images/ilm.png";
import Kargo from "./images/kargo.png"

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
    title: "Container Technologies",
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
      "Communication"
    ],
  },
];

export const achievementSkills = [
  {
    title: "Achievements",
    skill: [
      "Health and Safety Representative at Waterford Airport",
      "Former President of the Ireland Dodgeball Association and Vice President of the European Dodgeball Federation",
      "Completing third level education while working full time",
      "Masterclass in time management & managing stress",
      "Masterclass in crucial conversation",
      "Masterclass in project management",
    ],
  },
  {
    title: "Interests",
    skill: [
      "In order to maintain a healthy lifestyle I like to run and cycle regularly",
      "While my sporting days may be behind me I still have a very keen interest in hurling and dodgeball",
      "I enjoying socialising while meeting new people",
      "Volunteering as various community events such as, clean up events and stewarding at local community festivals",
    ],
  },
];

export const experienceData = [
  {
    id: 1,
    image: Kargo,
    companyName: "Kargo",
    year: "January 2022 - Present",
    positionHeld: [
      {
        date: "January 2025 – Present",
        title: "Senior Software Engineer",
      },
      {
        date: "January 2022 – January 2025",
        title: "Software Engineer",
      }
    ],
    address: "Unit 1A Esker Business Park, Six Cross Roads, Waterford, Ireland",
    responsibilities: [
     "Designed, developed, and maintained responsive web applications using ReactJS for front-end and Ruby on Rails for back-end APIs.",
     "Built scalable and performant data-backed features powered by PostgreSQL, ensuring data integrity and optimized queries.",
     "Conducted in-depth code reviews, refactoring legacy components for maintainability, and resolving production defects to improve system reliability.",
     "Authored and maintained Apache Airflow DAGs in Python to automate ETL workflows, ingesting publisher data into Snowflake for downstream analytics.",
     "Partnered with data teams to optimize query performance and structure data for use in Looker, empowering teams with self-service dashboards and visual exploration tools.",
     "Application migrations and managed deployments using Argo CD, integrating CI/CD workflows for streamlined release management.",
     "Developed Grafana dashboards and integrated alerting mechanisms to monitor application and data pipeline health, reducing downtime and improving response times to anomalies.",
     "Collaborated closely with Product Owners, Product Managers, UI/UX designers, QA engineers, and fellow developers to scope, design, and deliver features.",
     "Actively contributed to Agile ceremonies, including sprint planning, standups, retrospectives, and backlog grooming.",
     "Took ownership of deliverables and coordinated across teams to ensure timely releases and quality assurance.",
     "Mentored junior engineers through pairing sessions, documentation walkthroughs, and architectural discussions.",
    ],
  },
  {
    id: 2,
    image: RedHat,
    companyName: "Red Hat",
    year: "January 2019 - January 2022",
    positionHeld: [
      {
        date: "August 2020 – January 2022",
        title: "Associate Consultant",
      },
      {
        date: "January 2019 – August 2020",
        title: "Graduate Consultant",
      },
    ],
    address: "Red Hat, Communications House, Cork Road, Waterford, Ireland.",
    responsibilities: [
      "Constantly learn about new Red Hat technologies and apply those concepts to customer needs.",
      "Working with modern application development practices and evaluate existing applications to update and add new features.",
      "Assist with technical and non-technical project-related activities.",
      "Work closely with my colleagues in a collaborative team environment to meet timelines and goals and share information at all opportunities.",
      "Build and maintain collaborative relationships with my colleagues and our customers.",
      "Using critical thinking skills to tackle through problems in an innovative way.",
      "Understand customers’ requirements and how they translate to application features.",
      "Write high quality source code to create applications within deadlines.",
      "Actively participate in daily stand ups, sprint retrospectives and sprint planning",
      "Refactor and develop web and mobile applications using, HMTL, CSS, JavaScript and NodeJS while conforming with accessibility criteria",
      "Creation of Bash scripts to migrate customer applications from RHMAP (Red Hat Mobile Application Platform) to OCP (OpenShift Container Platform)",
    ],
  },
  {
    id: 3,
    image: SE2,
    companyName: "SE2",
    year: "September 2018 -  December 2018",
    positionHeld: [
      {
        date: "September 2018 – December 2018",
        title: "Junior Robotics Processing Automation Engineer",
      },
    ],
    address: "SE2, Killowen, Co. Waterford.",
    responsibilities: [
      "Creating and documenting design artifacts, test procedures and scenarios.",
      "Create and maintain solution documentation and provide training to client users over the web or in person.",
      "Working within project planning guidelines, communicating any identified project risks and issues to the delivery/project manager accordingly and providing inputs to the change control process.",
      "Configuring new RPA processes and objects using core workflow principles that are efficient, well structured, maintainable and easy to understand.",
      "Design solutions utilizing RPA best practices and maintain technical responsibility for project delivery.",
      "Ability to understand opportunities for automation.",
    ],
  },
  {
    id: 4,
    image: WaterfordAirport,
    companyName: "Waterford Airport",
    year: "April 2007 - April 2018",
    positionHeld: [
      {
        date: "April 2007 - April 2018",
        title:
          "Recruit Aviation Fire & Rescue/ Security Officer/ Operations Personnel",
      },
    ],
    address: "Waterford Airport, Killowen, Co. Waterford.",
    responsibilities: [
      "Servicing of fire appliances and equipment.",
      "Ongoing fire training as directed by the officer in charge.",
      "Screening of passengers, luggage and freight.",
      "Security patrols on a regular basis.",
      "Liaising with Immigration and Customs.",
      "Quality control of aviation fuel.",
      "Refuelling, cleaning and De-icing of aircraft.",
      "Marshalling aircraft for arrival and departure.",
      "Intercommunication between ground staff, flight crew and ATC.",
      "Maintaining and upholding all standard operating procedures.",
      "Completion of customer invoices and accounts",
    ],
  },
  {
    id: 5,
    image: DefenceForces,
    companyName: "Irish Defence Forces",
    year: "December 2006 - April 2007",
    positionHeld: [
      {
        date: "December 2006 - April 2007",
        title: "Recruit Soldier",
      },
    ],
    address:
      "Irish Defence Forces, Kickham Barracks, Waterford Road, Clonmel, Co.  Tipperary.",
    responsibilities: [
      "Weapons training.",
      "Obeying orders.",
      "Foot drills.",
      "Physical training.",
    ],
  },
  {
    id: 6,
    image: Musgraves,
    companyName: "Musgraves Cash & Carry",
    year: "September 2001 - December 2006",
    positionHeld: [
      {
        date: "September 2001 – December 2006",
        title: "Warehouse/ Delivery Personnel",
      },
    ],
    address: "Musgrave Cash & Carry, Keanes Road, Waterford.",
    responsibilities: [
      "Stock control.",
      "Preparing customer orders.",
      "Merchandising of stock.",
      "House Keeping.",
      "Operating manual and electrical pallet trucks.",
      "Delivery of customer orders, collecting payment and issuing of receipt.",
      "Strong relationship building with both suppliers and customers via phone, fax, email and face to face.",
      "Dealing with customer queries.",
      "Maintaining and upholding company procedures.",
    ],
  },
];

export const educationData = [
  {
    id: 0,
    image: ILM,
    name: "Institute of Leadership and Management",
    course: "Leadership & Management",
    year: "2019 - 2020",
    grade: "Level 3",
    link: "https://www.credly.com/badges/a8bbedc6-efae-4e50-bbb1-67b93109f5c7",
  },
  {
    id: 1,
    image: WIT,
    name: "Waterford Institute of Technology",
    address: "Cork Road, Waterford, Ireland",
    course: "Higher Diploma in Computer Science",
    year: "2018 - 2020",
    grade: "First Class Honours",
  },
  {
    id: 2,
    image: WIT,
    name: "Waterford Institute of Technology",
    address: "Cork Road, Waterford, Ireland",
    course: "Bachelor of Science in Information Technology",
    year: "2014 - 2017",
    grade: "Pass with Distinction",
  },
];
