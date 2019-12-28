document.addEventListener('DOMContentLoaded', function (event) {
  const app = document.getElementById('app');

  function addElement(parent, tag, { ...attr } = {}, cb) {
    Object.keys(attr).forEach(k => {
      tag.setAttribute(k, attr[k]);
    });
    parent.appendChild(tag);
    cb && cb();
    return tag;
  }

  function addText(parent, text) {
    const span = document.createElement('span');
    span.innerHTML = text;
    addElement(parent, span)
  }

  /**
   * ######################################################
   * ##                    Infomation                    ##
   * ######################################################
   */
  addElement(app, document.createElement('hr'));

  const infomation = addElement(app, document.createElement('h2'), {
    id: 'infomation'
  });

  addElement(infomation, a = document.createElement('a'), {
    href: '#infomation'
  }, function () {
    addText(a, '## Infomation')
  });

  const tableInfo = addElement(app, document.createElement('table'), {
    style: `width: '100%'; border: 0 solid black; padding-inline-start: 40px;`
  });

  const usr = {
    Fullname: 'NGUYEN VIET HUAN',
    Job: 'Website Developer',
    Graduation: 'Software Engineer (12/2018)',
    Address: 'Hoa An, Phung Hiep, Hau Giang',
    Education: '<a href="https://ctu.edu.vn" target="_blank"><u><i>Can Tho University</i></u></a>',
    Phone: '<a style="text-decoration: underline;" href="tel:84869143133"><i>(+84) 869 143 133</i></a>',
    Mail: '<a style="text-decoration: underline;" href="mailto:ngnviethuan@gmail.com"><i>ngnviethuan@gmail.com</i></a>'
  };

  Object.getOwnPropertyNames(usr).forEach(key => {
    const horizontal = document.createElement('tr');
    const tdKey = addElement(horizontal, document.createElement('td'), {
      style: 'width: 200px;'
    });
    addElement(tdKey, document.createElement('strong')).innerHTML = key;
    addElement(tdKey, document.createElement('strong'), {
      style: 'float: right;'
    }).innerHTML = ':';
    addElement(horizontal, document.createElement('td')).innerHTML = usr[key];
    addElement(tableInfo, horizontal);
  });

  /**
   * #######################################################
   * ##                       Works                       ##
   * #######################################################
   */
  addElement(app, document.createElement('hr'));

  const works = addElement(app, document.createElement('h2'), {
    id: 'works'
  });

  addElement(works, a = document.createElement('a'), {
    href: '#works'
  }, function () {
    addText(a, '## Works')
  });

  const worksData = [
    {
      place: {
        type: 'Company',
        name: 'Lecle Vietnam',
        ref: 'https://www.lecle.co.kr/',
        address: '81 - Cach Mang Thang 8 Street, Ben Thanh Town, District 1, HCMC'
      },
      time: '05/2019 - present',
      position: 'Backend Developer',
      project: 'CAN Project',
      description: 'CAN is a merit-based identity network, powered by CryptoBadge, a blockchain-based certificate system.',
    },
    {
      place: {
        type: 'Company',
        name: 'TMA Solutions',
        ref: 'https://www.tma.vn/',
        address: 'Street #10, Quang Trung Software City, 1 To Ky, District 12, HCMC'
      },
      time: '05/2018 - 09/2018',
      position: 'Backend Developer',
      project: 'OTF (Orangetheory Fitness)',
      description: 'Orangetheory Fitness is a privately owned fitness franchise based in Boca Raton, Florida. It offers group personal training workouts based on High Intensity Interval Training (HIIT) that blend cardiovascular and strength training.'
    },
  ];

  const ulWorks = addElement(app, document.createElement('ul'), {
    style: 'list-style-type: none;'
  });
  worksData.forEach(job => {
    /////////////////////////////////////
    const li = addElement(ulWorks, document.createElement('li'), {
      style: `margin: 1em 0;`
    });

    /////////////////////////////////////
    const table = addElement(li, document.createElement('table'), {
      style: `width: '100%'; border: 0 solid black;`
    });

    /////////////////////////////////////
    const trType = addElement(table, document.createElement('tr'));
    const tdKeyType = addElement(trType, document.createElement('td'), {
      style: 'width: 200px;'
    });
    addElement(tdKeyType, document.createElement('strong')).innerHTML = job.place.type;
    addElement(tdKeyType, document.createElement('strong'), {
      style: 'float: right;'
    }).innerHTML = ':';
    const tdValueType = addElement(trType, document.createElement('td'));
    addElement(tdValueType, document.createElement('a'), {
      href: job.place.ref,
      style: 'text-decoration: underline; font-weight: bold; font-style: italic;'
    }).innerHTML = job.place.name;

    /////////////////////////////////////
    const trAddress = addElement(table, document.createElement('tr'));
    const tdKeyAddress = addElement(trAddress, document.createElement('td'), {
      style: 'width: 200px;'
    });
    addElement(tdKeyAddress, document.createElement('strong')).innerHTML = 'Address';
    addElement(tdKeyAddress, document.createElement('strong'), {
      style: 'float: right;'
    }).innerHTML = ':';
    addElement(trAddress, document.createElement('td')).innerHTML = job.place.address;

    /////////////////////////////////////
    const trTime = addElement(table, document.createElement('tr'));
    const tdKeytime = addElement(trTime, document.createElement('td'), {
      style: 'width: 200px;'
    });
    addElement(tdKeytime, document.createElement('strong')).innerHTML = 'Time';
    addElement(tdKeytime, document.createElement('strong'), {
      style: 'float: right;'
    }).innerHTML = ':';
    addElement(trTime, document.createElement('td')).innerHTML = job.time;

    /////////////////////////////////////
    const trProject = addElement(table, document.createElement('tr'));
    const tdKeyProject = addElement(trProject, document.createElement('td'), {
      style: 'width: 200px;'
    });
    addElement(tdKeyProject, document.createElement('strong')).innerHTML = 'Project';
    addElement(tdKeyProject, document.createElement('strong'), {
      style: 'float: right;'
    }).innerHTML = ':';
    addElement(trProject, document.createElement('td')).innerHTML = job.project;

    const trDescription = addElement(table, document.createElement('tr'));
    const tdKeyDescription = addElement(trDescription, document.createElement('td'), {
      style: 'width: 200px;'
    });
    addElement(tdKeyDescription, document.createElement('strong')).innerHTML = 'Description';
    addElement(tdKeyDescription, document.createElement('strong'), {
      style: 'float: right;'
    }).innerHTML = ':';
    addElement(trDescription, document.createElement('td')).innerHTML = job.description;
  });

  /**
   * ########################################################
   * ##                       Skills                       ##
   * ########################################################
   */
  addElement(app, document.createElement('hr'));

  const skills = addElement(app, document.createElement('h2'), {
    id: 'skills'
  });

  addElement(skills, a = document.createElement('a'), {
    href: '#skill'
  }, function () {
    addText(a, '## Skills')
  });

  const skillDatas = [
    {
      name: 'Node.JS',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'Javascript',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'Restful API',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'Microservice',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'GraphQL',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'Serverless - AWS',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'Angular',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'Docker',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'NPM',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'Blockchain - EOS.JS',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'Git',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'Testing',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'Authentication',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'Database SQL/NoSQL',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'Linux/Shell',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'Memory Cache',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'Messege Brokers',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'Search Engine',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'Web Server',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'OS concepts',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'Networking & Security',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'CI/CD',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'Infrastruture Monitoring',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'Application Monitoring',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'Cloud Providers',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'Log Management',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
    {
      name: 'English',
      experience: '',
      projects: [],
      posts: '',
      contribute: [],
    },
  ];
  
  const skillWrapper = addElement(app, document.createElement('div'), {
    style: 'margin-left: 2em;'
  })
  
  skillDatas.forEach(skill => {
    const h3 = addElement(skillWrapper, document.createElement('h3'), {
      id: skill.name.replace(/\s/g, ''),
    });
    addElement(h3, document.createElement('a'), {
      href: `#${ skill.name.replace(/\s/g, '') }`,
      style: 'color: #438ab3'
    }).innerHTML = `# ${ skill.name }`;

    addElement(skillWrapper, document.createElement('h4')).innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lorem isump'
  });
  addElement(app, document.createElement('hr'));
  addElement(app, document.createElement('footer'), {
    style: 'text-align: center'
  }).innerHTML = '© 2019, Nguyen Viet Huan'
});
