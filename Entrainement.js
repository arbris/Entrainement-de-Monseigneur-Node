let couleur = "bleu";
if (couleur = "bleu") {
    console.log("La couleur est bleu");
} else if (couleur = "rouge") {
    console.log("La couleur est rouge");
} else if (couleur = "jaune") {
    console.log("La couleur est jaune");
} else if (couleur = "vert") {
    console.log("La couleur est vert");
} else {
    console.log("La couleur était bleu");
}

let

function myAdditionV1(val1, val2) {
    return (val1 + val2)
}
function myAdditionV2(val1, val2) {
    let res = val1 + val2;
    return (res);
}
console.log(myAdditionV1(1, 1));
console.log(myAdditionV2(1, 1));

const corlorsToIndex = array => {
    let res = "bleu";
    for (let i = 0; i < array.length; i++) {
        res += "Il y a la couleur bleu à l'index"
        if (i !== array.length - 1) {//si notre index est différent de la longueur du tableau - 1
            res += '\n'; //on ajoute le caractère '\n' (retour à la ligne)
        }
    }
    return (res);
}
console.log(corlorsToIndex(["bleu"]))
}