import groceryguide from '../images/grocery.png';
import slack from '../images/slack.png';
import betterweather from '../images/BetterWeather.png';

//Images are better as squares
export default [
  {
    title: 'Grocery Guide',
    description: `Grocery Guide helps users optimize safety while grocery shopping. User inputs preferences and Grocery Guide utilizes Google Places & Distance Matrix APIs to calculate Bayesian estimates and relevant reccomendations. App was developed by a team from USC for <a href="https://hackforhope.devpost.com" target="_blank">Hack for Hope</a> to win Judge's choice award for best product and 1k.`,
    skills: [
      'React Native',
      'Node.js',
      'Express',
      'Expo',
      'Axios',
      'Cheerio',
      'HTML5',
      'CSS3',
      'ES6',
      'Figma',
      'Apify',
      'Google APIs',
    ],
    image: groceryguide,
    links: {
      github: 'https://devpost.com/software/grocery-guide-ti9xf5',
    },
  },
  {
    title: 'DailyNews',
    description:
      'DailyNews is scraper built with Node.js to collect and condense 5 daily news articles to inform peers during COVID 2019 pandemic. DailyNews utilizes Axios to push to Slack webhook and Giphy API to attach relevant GIFs. Express and slash commands enable interactivity. Engages average of 80~ users daily.',
    skills: [
      'Node.js',
      'Express',
      'Cheerio',
      'ES6',
      'Axios',
      'Slack API',
      'Heroku',
    ],
    image: slack,
    links: {
      github: 'https://github.com/aaronw4ng/DailyNews',
    },
  },
  {
    title: 'BetterWeather',
      description: 'BetterWeather is a website application that uses an Express server to return information from the OpenWeatherAPI based on the users queries. Using templated HTML pages, BetterWeather displays Javascript effects relevant to the weather conditions returned.',
    skills: [
      'HTML5',
      'CSS3',
      'ES6',
      'EJS',
      'MongoDB',
      'Express',
      'Node.js',
      'OpenWeather API',
      'Heroku',
    ],
    image: betterweather,
    links: {
      github: 'https://github.com/aaronw4ng/BetterWeather',
    },
  },
];
