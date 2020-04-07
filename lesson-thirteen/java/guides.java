const requestURL = 'C:\Users\Livesay\Documents\GitHub\hdlive80.github.io\lesson-thirteen\json\guides.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['guides'];
    console.table(jsonObject); // temporary checking for valid response and data parsing
    for (let i = 0; i < guides.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let div1 = document.createElement('div');
      let div2 = document.createElement('div');
      let image = document.createElement('img');

      h2.textContent = guides[i].name+ ' ' + guides[i].lastname;
      div1.textContent = 'Certification Level: ' + guides[i].certlevel;
      div2.textContent = 'Years of Experience: ' + guides[i].yearexp;
      image.setAttribute('src', prophets[i].imageurl);
      image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order)

      card.appendChild(h2);
      card.appendChild(div1);
      card.appendChild(div2);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
    }
  });