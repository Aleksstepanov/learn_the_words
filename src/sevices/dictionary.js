const apiKey = process.env.REACT_APP_API_KEY;

const getTranslateWord = async (text, lang = 'en-ru') => {
    try {
        const res = await fetch(`https://reactmarathon-api.netlify.app/api/translate?text=${text}&lang=${lang}`, {
        headers: {
            'Authorization': apiKey,
        }});
        const body = await res.json();
        return body;
        
    } catch(e) {
        console.log(e);
    }
    
}

export default getTranslateWord;
