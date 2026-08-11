export default function createCard(datum){
    let card = document.createElement('div');
    card.classList.add('card', 'mb-3');

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.innerText = `${datum.name || datum.title}`;
    cardBody.appendChild(h5);

    let p = document.createElement('p');
    p.classList.add('card-text');
    p.innerText = `${datum.body}`;
    cardBody.appendChild(p);

    if(datum.email){
        let p2 = document.createElement('p');
        p2.classList.add('card-text');
        p2.innerText = `Email: ${datum.email}`;
        cardBody.appendChild(p2);
    }

    card.appendChild(cardBody);
    return card;
}