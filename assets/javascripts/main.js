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
  addElement(app, document.createElement('hr'));

  const infomation = addElement(app, document.createElement('h2'), {
    id: 'infomation'
  });
  
  addElement(infomation, a = document.createElement('a'), {
    href: '#infomation'
  }, function() {
    addText(a, '## Infomation')
  });

  const tableInfo = addElement(app, document.createElement('table'), {
    style: `width: '100%'; border: 0 solid black;`
  });

  tableInfo.innerHTML = `
    <tr>
      <td><strong>Fullname: </strong></td>
      <td>NGUYEN VIET HUAN</td>
    </tr>
    <tr>
      <td><strong>Title: </strong></td>
      <td>Website Developer</td>
    </tr>
    <tr>
      <td><strong>Graduation: </strong></td>
      <td>Software Engineer (12/2019)</td>
    </tr>
    <tr>
      <td><strong>Education: </strong></td>
      <td><a href="https://ctu.edu.vn" target="_blank"><u><i>Can Tho University</i></u></a></td>
    </tr>
  `;
  addElement(app, document.createElement('hr'));

  const works = addElement(app, document.createElement('h2'), {
    id: 'works'
  });

  addElement(works, a = document.createElement('a'), {
    href: '#works'
  }, function() {
    addText(a, '## Works')
  });

  const worksData = [
    {
      place: {
        type: 'Company',
        name: 'TMA Solutions',
        address: 'Street #10, Quang Trung Software City, 1 To Ky, District 12, HCMC'
      },
      time: '05/2018 - 09/2018',
      position: 'Backend Developer',
      project: 'OTF (Orangetheory Fitness)',
      description: 'Orangetheory Fitness is a privately owned fitness franchise based in Boca Raton, Florida. It offers group personal training workouts based on High Intensity Interval Training (HIIT) that blend cardiovascular and strength training.'
    },
    {
      place: {
        type: 'Company',
        name: 'Lecle Vietnam',
        address: '81 - Cach Mang Thang 8 Street, Ben Thanh Town, District 1, HCMC'
      },
      time: '05/2019 - present',
      position: 'Backend Developer',
      project: 'CAN Project',
      description: 'CAN is a merit-based identity network, powered by CryptoBadge, a blockchain-based certificate system.',
    }
  ];

  const ul = addElement(app, document.createElement('ul'), {
    style: 'list-style-type: none;'
  });
  worksData.forEach(job => {
    const li = addElement(ul, document.createElement('li'), {
      style: `margin: 1em 0;`
    });
    const table = addElement(li, document.createElement('table'), {
      style: `width: '100%'; border: 0 solid black;`
    });
    table.innerHTML = `
      <tr>
        <td><strong>${ job.place.type }: </strong></td>
        <td>${ job.place.name }</td>
      </tr>
      <tr>
        <td><strong>Address: </strong></td>
        <td>${ job.place.address }</td>
      </tr>
      <tr>
        <td><strong>Time: </strong></td>
        <td>${ job.time }</td>
      </tr>
      <tr>
        <td><strong>Project: </strong></td>
        <td>${ job.project }</td>
      </tr>
      <tr>
        <td><strong>Description: </strong></td>
        <td>${ job.description }</td>
      </tr>
    `
  });
  addElement(app, document.createElement('hr'));

  const skills = addElement(app, document.createElement('h2'), {
    id: 'skills'
  });

  addElement(skills, a = document.createElement('a'), {
    href: '#works'
  }, function() {
    addText(a, '## Skills')
  });
  addElement(app, document.createElement('hr'));
});
