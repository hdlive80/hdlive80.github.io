const requestURL = 'https://hdlive80.github.io/lesson-thirteen/json/guides.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const guides = jsonObject['guides'];
    console.table(jsonObject); // temporary checking for valid response and data parsing
    for (let i = 0; i < guides.length; i++) {
      let card = document.createElement('section');
      let h3 = document.createElement('h3');
      let div1 = document.createElement('div');
      let div2 = document.createElement('div');
      let div3 = document.createElement('div');
      let div4 = document.createElement('div');
      let image = document.createElement('img');

      h3.textContent = guides[i].name+ ' ' + guides[i].lastname;
      div1.textContent = 'Certification Level: ' + guides[i].certlevel;
      div2.textContent = 'Years of Experience: ' + guides[i].yearexp;
      div3.textContent = 'Email: ' + guides[i].email;
      div4.textContent = 'Bio: ' + guides[i].bio;
      image.setAttribute('src', guides[i].imageurl);
      image.setAttribute('alt', guides[i].name + ' ' + guides[i].lastname + ' - ' + guides[i].order)

      card.appendChild(h3);
      card.appendChild(div1);
      card.appendChild(div2);
      card.appendChild(div3);
      card.appendChild(div4);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
    }
  });