document.addEventListener('DOMContentLoaded', function (event) {
  function addElement(parent, tag, { ...attr } = {}, cb) {
    Object.keys(attr).forEach(k => {
      tag.setAttribute(k, attr[k]);
    });
    parent.appendChild(tag);
    cb && cb();
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
      Quotes: 'Made anything, since 2018',
      Projects: [
        {
          name: 'OTF',
          ref: '#works',
        },
        {
          name: 'CryptoBadge Backend',
          ref: 'https://cryptobadge.app/',
        }
      ],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Restful API',
      Quotes: '',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'GraphQL',
      Quotes: '',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Serverless - AWS',
      Quotes: '',
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
      name: 'Docker',
      Quotes: 'Keep calm it works on my machine https://koukia.ca/why-docker-pros-and-cons-949d104478c5',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'NPM',
      Quotes: '',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Blockchain - EOS.JS',
      Quotes: '',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Git',
      Quotes: 'The nature of life is to change. Don\'t trust anything.',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Testing',
      Quotes: '',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Authentication',
      Quotes: '',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Database SQL/NoSQL',
      Quotes: '',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Messege Brokers',
      Quotes: '',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Search Engine',
      Quotes: '',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Web Server',
      Quotes: '',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'OS concepts',
      Quotes: '',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Networking & Security',
      Quotes: '',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'Cloud Providers',
      Quotes: '',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
    {
      name: 'English',
      Quotes: '',
      Projects: [],
      Posts: [],
      Contributed: [],
    },
  ];
  
  const skillWrapper = window.document.getElementById('skill-list');
  
  skillDatas.forEach(skill => {
    const h4 = addElement(skillWrapper, document.createElement('h4'), {
      id: skill.name.replace(/\s/g, ''),
    });
    addElement(h4, document.createElement('a'), {
      href: `#${ skill.name.replace(/\s/g, '') }`,
      style: 'color: #438ab3; display: inline;'
    }).innerHTML = `# ${ skill.name }:`;
    addElement(h4, document.createElement('span'), {
      style: 'color: #aaa; font-weight: 100; font-style: italic;'
    }).innerHTML = skill.Quotes && `&nbsp;"${ skill.Quotes }"`;

    const ulSkill = addElement(skillWrapper, document.createElement('ul'), {
      style: 'list-style-type: none',
    });
    Object.getOwnPropertyNames(skill).forEach(key => {
      if(key !== 'name' && Array.isArray(skill[key]) && skill[key].length) {
        const li = addElement(ulSkill, document.createElement('li'));
        addElement(li, document.createElement('strong')).innerHTML = `${ key }: `;
        skill[key].forEach((e, i) => {
          addElement(li, document.createElement('a'), {
            href: e.ref,
            target: /\#.*/g.test(e.ref) ? '' : '_blank',
            style: `
              text-decoration: underline;
              font-style: italic;
            `
          }).innerHTML = `${ e.name }`;
          addElement(li, document.createElement('span')).innerHTML = `${ i === skill[key].length - 1 ? '' : ', ' }`;
        });
      }
    })
  });
});
