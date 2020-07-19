document.addEventListener('DOMContentLoaded', function (event) {
  function addElement(parent, tag, { ...attr } = {}, cb) {
    Object.keys(attr).forEach(k => {
      tag.setAttribute(k, attr[k]);
    });
    parent.appendChild(tag);
    cb && cb(tag);
    return tag;
  }
  /**
   * ########################################################
   * ##                       Skills                       ##
   * ########################################################
   */
  const skillDatas = [
    {
      name: 'Node.JS',
      Quotes: 'Something what I familiar, <a style="color: #aaa; font-weight: 100;" href="https://www.facebook.com/nviethuan/posts/880940862047401?__cft__[0]=AZVKBPr1JnG6lq3ke0ur-PDTc4bRZURfZ8OBLGEjo3bA_fe7yeWOW-Os6M5b27oAHk4ldvWFTYimN0bSmtYKHgJeCcyVNYQPZKRVGxC20TJpzNVghPi7GLe4_uKh4krb2E5XMS6oTs5f2r2JBXD-Gyfm&__tn__=%2CO%2CPH-R" target="_blank">since 2017</a>',
      Projects: [
        // {
        //   name: 'OTF',
        //   ref: '#works',
        // },
        // {
        //   name: 'CryptoBadge Backend',
        //   ref: 'https://cryptobadge.app/',
        // }
      ],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Restful API',
      Quotes: 'Express, Lambda - API Gateway',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'GraphQL',
      Quotes: '<a style="color: #aaa; font-weight: 100;" href="https://github.com/prisma-labs/graphql-yoga" target="_blank">GraphQL Yoga</a>, <a style="color: #aaa; font-weight: 100;" href="https://www.apollographql.com/docs/apollo-server" target="_blank">Apollo Server</a>, <a style="color: #aaa; font-weight: 100;" href="https://www.npmjs.com/package/graphql-relay" target="_blank">GraphQL Relay</a>',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Serverless - AWS',
      Quotes: 'Lambda, API Gateway, DynamoDB, Cognito, Elastic Seach, S3, SQS',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Angular',
      Quotes: 'Strong framework and annual publication',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Containerzation',
      Quotes: 'Docker',
      Projects: [],
      Posts: [
        // {
        //   name: 'Why Docker? Pros and Cons - Aram Koukia',
        //   ref: 'https://koukia.ca/why-docker-pros-and-cons-949d104478c5'
        // }
      ],
      Contributed: [],
    },
    {
      name: 'Bash/Shell - Linux/Ubuntu',
      Quotes: 'File management, SSH, OpenSSL, Iterm2, Zsh, Oh-my-zsh, ',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Blockchain',
      Quotes: 'NodeJS integrate with EOS.JS',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Git',
      Quotes: 'Github, Gitlab',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Testing',
      Quotes: 'Jest - Unit testing/Integration testing',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Authentication',
      Quotes: 'JWT/Auth0',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Database',
      Quotes: 'DynamoDB, MongoDB, MySQL',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Search Engine',
      Quotes: 'Elastic Search',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'OS concepts',
      Quotes: 'Ubuntu, MacOS, Windows',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Networking & Security',
      Quotes: 'HTTP, HTTPS, SSH, SSL, Sockets',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Cloud Providers',
      Quotes: 'AWS, Firebase, Youtube API, Gooogle Drive API, Facebook API',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
  ];
  
  // const skillWrapper = window.document.getElementById('skill-list');
  
  // skillDatas.forEach(skill => {
  //   const h4 = addElement(skillWrapper, document.createElement('h4'), {
  //     id: skill.name.replace(/\s/g, ''),
  //     style: 'font-size: 14px;'
  //   });
  //   addElement(h4, document.createElement('a'), {
  //     href: `#${ skill.name.replace(/\s/g, '') }`,
  //     style: 'color: #438ab3; display: inline;'
  //   }).innerHTML = `# ${ skill.name }:`;
  //   addElement(h4, document.createElement('span'), {
  //     style: 'color: #aaa; font-weight: 100; font-style: italic;'
  //   }).innerHTML = skill.Quotes && `&nbsp;"${ skill.Quotes }"`;

  //   const ulSkill = addElement(skillWrapper, document.createElement('ul'), {
  //     style: 'list-style-type: none',
  //   });
  //   Object.getOwnPropertyNames(skill).forEach(key => {
  //     if(key !== 'name' && Array.isArray(skill[key]) && skill[key].length) {
  //       const li = addElement(ulSkill, document.createElement('li'));
  //       addElement(li, document.createElement('strong')).innerHTML = `${ key }: `;
  //       skill[key].forEach((e, i) => {
  //         addElement(li, document.createElement('a'), {
  //           href: e.ref,
  //           target: /\#.*/g.test(e.ref) ? '' : '_blank',
  //           style: `
  //             text-decoration: underline;
  //             font-style: italic;
  //           `
  //         }).innerHTML = `${ e.name }`;
  //         addElement(li, document.createElement('span')).innerHTML = `${ i === skill[key].length - 1 ? '' : ', ' }`;
  //       });
  //     }
  //   })
  // });
});
