import auth from './auth';
console.log(auth.API_KEY);
const getTranslateWord = async (text, lang = 'en-ru') => {
    const res = await fetch(`https://reactmarathon-api.netlify.app/api/translate?text=${text}&lang=${lang}`, {
    headers: {
        'Authorization': auth.API_KEY,
    }});
    const body = await res.json();
    return body;
}

export default getTranslateWord;
