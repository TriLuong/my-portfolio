import { images } from "assets";

export default [
  {
    photos: [
      images.rsLegendImage.dashboard,
      images.rsLegendImage.currentLoads,
      images.rsLegendImage.loadHistory,
      images.rsLegendImage.users,
      images.rsLegendImage.driverApp
    ],
    title: "Legend Logistis",
    content:
      "Legend Trucking is a rapidly growing, asset-based trucking company. The intermodal transportation piece of the business utilizes disparate systems and manual processes that need to be automated for the business to scale.",
    demos: [
      {
        src: "https://legend-staging.web.app/",
        text: "CMS"
      },
      {
        src: "https://legend-staging-driver.web.app/",
        text: "Driver App"
      }
    ],
    features: [
      "Create and list all loads and users on CMS.",
      "Admin assigns Loads to specific driver, and notity to him through email and SMS.",
      "Update status of loads when driver picked up or dropped off them.",
      "Admin can manage all loads and users on CMS."
    ],
    technologies: [
      "This project is written by Reactjs with Gogo react admin tempalte.",
      "Use redux to manage state.",
      "Use twilio to send SMS.",
      "Use Landbot IO to create chatbot.",
      "Use Algolia for fast search."
    ]
  }
];
