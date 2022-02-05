export default {
    computed: {
        noSpacesComputedM() {
            return val => val.replaceAll(' ', ',')
        },
        sizeOfWordsM() {
            return val => {
                let arrWords = val.split(' ')
                let newPhrase = ''
                for (let word of arrWords) {
                    let charactersNumber = word.length
                    console.log(word)
                    let newword = `${word} (${charactersNumber}) `
                    newPhrase += newword
                }
                return newPhrase
            }
        }
    }

}