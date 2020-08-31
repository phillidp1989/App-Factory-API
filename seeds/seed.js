const db = require('../models');
const connectDB = require('../config/db');

// Connect to DB
connectDB();

const userSeed = [
  {
    isDeveloper: false,
    posts: [],
    solutions: [],
    provider: 'Facebook',
    providerId: '87898749874987',
    username: 'TestUser1',
    displayName: 'Test User 1',
    avatar: 'https://graph.facebook.com/10158568479877866/picture?type=large'
  },
  {
    isDeveloper: false,
    posts: [],
    solutions: [],
    provider: 'Facebook',
    providerId: '87466666666',
    username: 'TestUser2',
    displayName: 'Test User 2',
    avatar: 'https://graph.facebook.com/10158568479877866/picture?type=large'
  },
  {
    isDeveloper: true,
    posts: [],
    solutions: [],
    provider: 'Github',
    providerId: '6464987498799',
    username: 'TestDev3',
    displayName: 'Test Developer 3',
    avatar: 'https://graph.facebook.com/10158568479877866/picture?type=large'
  },
  {
    isDeveloper: true,
    posts: [],
    solutions: [],
    provider: 'GitHub',
    providerId: '7666666665444444444',
    username: 'TestDev4',
    displayName: 'Test Developer 4',
    avatar: 'https://graph.facebook.com/10158568479877866/picture?type=large'
  },
  {
    isDeveloper: false,
    posts: [],
    solutions: [],
    provider: 'Google',
    providerId: '648425489498749879',
    username: 'TestUser5',
    displayName: 'Test User 5',
    avatar: 'https://graph.facebook.com/10158568479877866/picture?type=large'
  }
];

const postSeed = [
  {
    title: 'App Factory',
    summary: 'App for app ideas',
    description:
      "Web application allowing users to post application ideas and for these ideas to be 'built' by developers",
    category: 'Utility',
    technologies: ['MongoDB', 'Express', 'React', 'Node'],
    posterId: '5f458293eb85b45f1875891d',
    activeDevelopers: '5f45825deb85b45f1875891c',
    likers: ['5f4582b1eb85b45f1875891e']
  },
  {
    title: 'Fitness Buddy',
    summary:
      'Fitness Buddy is a fitness app that provides users with a guidance on how to perform exercises.',
    description:
      'Fitness Buddy is a fitness app that provides users with a guidance on how to perform exercises.',
    category: 'Lifestyle',
    technologies: ['MySQL', 'Express', 'Node'],
    posterId: '5f4582b1eb85b45f1875891e',
    activeDevelopers: '5f45825deb85b45f1875891c',
    likers: ['5f458293eb85b45f1875891d']
  },
  {
    title: 'Get Grub',
    summary: 'Recipe Search',
    description:
      "Application to search for recipes and save them to user's profile",
    category: 'Lifestyle',
    technologies: ['MongoDB', 'Express', 'React', 'Node'],
    posterId: '5f458293eb85b45f1875891d',
    activeDevelopers: '5f45825deb85b45f1875891c',
    likers: ['5f4582b1eb85b45f1875891e']
  },
  {
    title: 'The Music App',
    summary: 'Music search app',
    description:
      'Web application allowing users to search for artist, album and song information',
    category: 'Entertainment',
    technologies: ['MySQL', 'Express', 'Node'],
    posterId: '5f458293eb85b45f1875891d',
    activeDevelopers: '5f45825deb85b45f1875891c',
    likers: ['5f4582b1eb85b45f1875891e']
  }
];

const seed = async () => {
  const deleteResults = await db.Post.remove({});
  const results = await db.Post.insertMany(postSeed);
  const resultsUsers = await db.User.insertMany(userSeed);
  console.log('deleteResults', deleteResults);
  console.log('results', results);
  console.log('resultsUsers', resultsUsers);
  process.exit(0);
};

seed();
