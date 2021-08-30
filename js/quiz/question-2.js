class OldApi {
    constructor(sentence) {
        this._sentence = sentence
    }

    findLongestWordLength() {
        const words = this._sentence.split(' ')
        let maxLength = 0

        for (let i = 0; i < words.length; i++) {
            if (words[i].length > maxLength) {
                maxLength = words[i].length
            }
        }

        return maxLength
    }
}


class NewApi {
    static findLongestWordLength(sentence) {
        return Math.max(
            ...sentence.split(' ').map(word => word.length)
        )
    }
}

const sentence = 'May the force be with you'

// Utilisation de l'ancienne Api
const OldWordApi = new OldApi(sentence)
const result = OldWordApi.findLongestWordLength()

// Utilisation de la nouvelle Api
const secondResult = NewApi.findLongestWordLength(sentence)

// Log des informations
console.log(`Selon la première version de l'Api, le mot le plus long a ${result} caractères`)
console.log(`Selon la deuxième version de l'Api, le mot le plus long a ${secondResult} caractères`)
