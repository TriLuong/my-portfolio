import { images } from "assets";

export default [
  {
    photos: [
      images.rsLegendImage.dashboard,
      images.rsLegendImage.currentLoads,
      images.rsLegendImage.loadHistory,
      images.rsLegendImage.users,
      images.rsLegendImage.driverApp,
    ],
    title: "Legend Logistis",
    content:
      "Legend Trucking is a rapidly growing, asset-based trucking company. The intermodal transportation piece of the business utilizes disparate systems and manual processes that need to be automated for the business to scale.",
    // demos: [
    //   {
    //     src: "https://legend-staging.web.app/",
    //     text: "CMS",
    //   },
    //   {
    //     src: "https://legend-staging-driver.web.app/",
    //     text: "Driver App",
    //   },
    // ],
    features: [
      "Create and list all loads and users on CMS.",
      "Admin assigns Loads to specific driver, and notity to him through email and SMS.",
      "Update status of loads when driver picked up or dropped off them.",
      "Admin can manage all loads and users on CMS.",
    ],
    technologies: [
      "This project is written by Reactjs with Gogo react admin tempalte.",
      "Use redux to manage state.",
      "Use twilio to send SMS.",
      "Use Landbot IO to create chatbot.",
      "Use Algolia for fast search.",
    ],
  },

  {
    photos: [
      images.skoocAppImage.skoocApp1,
      images.skoocAppImage.skoocApp2,
      images.skoocAppImage.skoocApp3,
      images.skoocAppImage.skoocApp4,
      images.skoocAppImage.skoocApp5,
      images.skoocAppImage.skoocApp6,
      images.skoocAppImage.skoocApp7,
    ],
    title: "Skooc App",
    content:
      "Skooc App is used to keep track of health index such as heart's rate, weith, water level, food, etc.",
    // demos: [
    //   {
    //     src: "https://legend-staging.web.app/",
    //     text: "CMS"
    //   },
    //   {
    //     src: "https://legend-staging-driver.web.app/",
    //     text: "Driver App"
    //   }
    // ],
    features: [
      "User enter health index daily",
      "Keep track of health index and make assessment daily.",
    ],
    technologies: [
      "Use react-native to build app for IOS and Android devices",
      "Use redux to manage state.",
      "Use AWS S3 to store images.",
    ],
  },
  {
    photos: [
      images.hubCvImage.hubCv1,
      images.hubCvImage.hubCv2,
      images.hubCvImage.hubCv3,
      images.hubCvImage.hubCv4,
      images.hubCvImage.hubCv5,
      images.hubCvImage.hubCv6,
    ],
    title: "Hubcv",
    content:
      "Hubcv generates dynamic CV based on user's skill-based activities, projects they undertake, courses they learn and events they participate in.",
    features: [
      "Upload image, video, document and describe your skill",
      "Users can connect and follow the others",
      "Users can chat with people that they connected",
      "The others can like, comment, share and bookmark on your skill.",
      "University can create their course and students can enroll",
    ],
    technologies: [
      "This project is written by ReactJs",
      "Use redux, redux-saga to manage state.",
      "Use socket-IO to show notification and implement chat",
    ],
  },
];
