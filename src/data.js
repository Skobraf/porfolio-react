import React from 'react';

export const data = [
    {   id: 0,
        title: "ReduxTagram",
        description: "Small clone of instagram using React and Redux, where user is able to add commments and likes to posts and display posts from friends in the feed.",
        skills: ['React', 'Redux', 'CSS', 'Express'],
        links: {
            demo: '',
            code: 'https://github.com/Skobraf/InstaClone/tree/master/learn-redux/client'
        },
        image: '/images/insta.PNG'

    },
    {
      id:1,
      title: 'Nested data access',
      description: 'The idea is to be able to add, update or remove deep nested data without mutation and have the resulat as JSON . The app is using only React in addition to Immutable.js librarie.',
      skills: ['React.js', 'Hooks', 'Immutable.js', 'CSS'],
      links: {
        demo: 'https://codesandbox.io/s/distracted-lake-mbpe5',
        code: 'https://github.com/Skobraf/Sanad-test'
      },
      image: '/images/dataStructure.PNG'
    },
    {
      id:2,
      title: 'Career Center',
      description: 'Single page app using Vue.js and VueX to handle the state, the user of the app needs to select the diplomas and exeperience he has, the it will match him with the available job offers, where he can also apply for these jobs. the app is smooth when it comes to navigation when switching between job categories.',
      skills: ['Vue.js','VueX','Sass'],
      links: {
        demo: 'https://careercenter-a030b0.netlify.com/',
        code: 'https://github.com/Skobraf/Career-meeting'
      },
      image: '/images/career.PNG'
    },
    {
      id:3,
      title: 'Fetching github users',
      description:'This project is to list the most starred repos of github in the last 30 days using github API, the project is made with REST API also with GraphQl Api from Github. it show the owner of the repo and the number of stars. for extra feature, The pagination is made using. NOTE: for QraphQl Api to work you need to have your own Token',
      skills: ['React.js', 'Hooks', 'GraphqQl', 'REST Api'],
      links: {
        demo: 'https://codesandbox.io/s/p53kn3vwpj',
        code: 'https://github.com/Skobraf/GraphQl-Github-API',
      },
      image: '/images/github.PNG'
    },
    {
      id:7,
      title: 'Search Auto-suggest',
      description: 'A search box displaying suggestion on each letter you write, the data is brought from the state, the data can also be reached by an API',
      skills: ['React'],
      links: {
        demo: 'https://codesandbox.io/s/flamboyant-surf-vghqm',
        code: 'https://github.com/Skobraf/Autocomplete-search',
      },
      image: './images/search.PNG'
    },
    {
      id:4,
      title:'Indecision App',
      description: 'Simple app where you add your TODOS and then helps to make  decision from your previous choice.',
      skills: ['React.js','CSS'],
      links: {
        demo: 'https://codesandbox.io/s/v0765q46v5',
        code: 'https://codesandbox.io/s/v0765q46v5'
      },
      image: './images/indecision.PNG'
    },
    {
      id:5,
      title:'Sick Fits',
      description: 'The app is from WesBos Advanced React course, The app is a store where the user sell his goods and manage project in addition to security for payment methods, for used technologies: Next.js, ApolloClient, Prisma, GraphQl for query.',
      skills: ['Next.js','QraphQl','Express.js', 'Apollo', 'Prisma',],
      links: {
        demo:'',
        code:'https://github.com/Skobraf/Next-Store'
      },
      image:'./images/fits.PNG'
    },
    {
      id: 6,
      title: 'Game of Life',
      description: 'Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:',
      skills: ['React'],
      links: {
        demo:'',
        code: 'https://github.com/Skobraf/game-of-life'
      },
      image:'./images/game.PNG'
    }
];
export  const statements = [
    { 
      input: 'Ayoub.currentLocation',
      output: "['Rabat', 'Morocco']"
    },
    {
      input: 'Ayoub.contactInfo',
      output: [ <div> [  <a  target="_blank" href="mailto:skobraf@gmail.com">skobraf@gmail.com</a>, <a target="_blank" href="https://www.linkedin.com/in/ayoub-abed/">LinkedIn</a>, <a target="_blank" href="https://github.com/Skobraf">github</a> ]</div>]
    },
    {
      input: 'Ayoub.interests',
      output: "['Programming', 'Moto-cycles', 'Reading']"
    },
    {
      input: 'Ayoub.education',
      output: "['licence Mathématique informatique, Université Mohammed 1, Oujda']"
    },
    {
      input: 'Ayoub.skills',
      output: "['JavaScript', 'React', 'Redux', 'VueJs', 'VueX', 'NextJS', 'GATSBY', 'GraphQl', 'Ruby', 'Ruby on Rails', 'Wordpress' ]"
    }
  ];