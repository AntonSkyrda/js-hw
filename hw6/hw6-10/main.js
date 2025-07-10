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
]

const cardSuites = [
    "clubs",
    "hearts",
    "spades",
    "diamonds"
]

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


let cardDeck = createCardDeck(cardValues, cardSuites)

console.log(cardDeck.find((card) => card.value === "ace" && card.suite === "spades"));
console.log(cardDeck.filter((card) => card.value === "6"));
console.log(cardDeck.filter((card) => card.suite === "diamonds"));
console.log(cardDeck.filter((card) => ["9", "10", "jack", "queen", "king", "ace"].includes(card.value) && card.suite === "diamonds"));
