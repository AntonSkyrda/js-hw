const cardValues = [
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack",
    "queen",
    "king",
    "ace"
];

const cardSuites = [
    "clubs",
    "hearts",
    "spades",
    "diamonds"
];

function createCardDeck(cardValues, cardSuites) {
    let cardDeck = [];
    for (const cardSuite of cardSuites) {
        for (const cardValue of cardValues) {
            cardDeck.push(
                {
                    suite: cardSuite,
                    value: cardValue,
                }
            );
        }
    }

    return cardDeck;
}


let cardDeck = createCardDeck(cardValues, cardSuites);

let groupedDeckBySuites = cardDeck.reduce((acc, card) => {
    if (!acc[card.suite]) {
        acc[card.suite] = [];
    }
    acc[card.suite].push(card);
    return acc;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: [],
    }
);

console.log(groupedDeckBySuites);