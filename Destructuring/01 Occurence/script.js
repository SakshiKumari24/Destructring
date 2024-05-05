function countWords(inputString) {
    const words = inputString.toLowerCase().split(/\s+/);
    const wordCountMap = new Map();

    words.forEach(word => {
        const count = wordCountMap.get(word) || 0;
        wordCountMap.set(word, count + 1);
    });

    return wordCountMap;
}

const text = "Hello world hello again world";
const wordCountMap = countWords(text);

console.log(wordCountMap);
