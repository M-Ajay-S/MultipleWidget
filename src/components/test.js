const axios=require('axios')

axios.get("https://api.mymemory.translated.net/get",{
        params:{
            q:'hello',
            langpair:`en|de`
        }
    }).then(({data})=>{console.log(data.responseData.translatedText)})
