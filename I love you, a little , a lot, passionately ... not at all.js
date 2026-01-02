function howMuchILoveYou(nbPetals) {

    var numPetals = nbPetals % 6
    switch (numPetals) {
        case 1:
            return "I love you";
        break;

        case 2:
            return "a little";
        break;

        case 3:
            return "a lot";
        break;

        case 4:
            return "passionately";
        break;

        case 5:
            return "madly";
        break;

        default:
            return "not at all";
            
    }
}

howMuchILoveYou(7);