const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    console.table(jsonObject); // temporary checking for valid response and data parsing
    for (let i = 0; i < towns.length; i++) {
        if (towns[i].name == "Fish Haven" || 
        towns[i].name == "Preston" || 
        towns[i].name == "Soda Springs") {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let div1 = document.createElement('div');
      let div2 = document.createElement('div');
      let div3 = document.createElement('div');
      let div4 = document.createElement('div');
      let image = document.createElement('img');

      h2.textContent = towns[i].name + ' ';
      h2.setAttribute('id', 'name');
      div1.textContent =  towns[i].motto;
      div1.setAttribute('id', 'motto');
      div2.textContent = 'Year Founded: ' + towns[i].yearFounded;
      div2.setAttribute('id', 'founded');
      div3.textContent = 'Population: ' + towns[i].currentPopulation;
      div3.setAttribute('id', 'population');
      div4.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
      div4.setAttribute('id', 'rainfall');
      if (towns[i].name == "Fish Haven") {
        image.setAttribute('src', 'images/fish-haven.jpg');
    }
    else if (towns[i].name == "Preston") {
        image.setAttribute('src', 'images/preston.jpg');
    }
    else if (towns[i].name == "Soda Springs") {
        image.setAttribute('src', 'images/soda-springs.jpg');
    }
      image.setAttribute('alt', towns[i].name + ' ')

      card.appendChild(h2);
      card.appendChild(div1);
      card.appendChild(div2);
      card.appendChild(div3);
      card.appendChild(div4);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
    }
}
  });