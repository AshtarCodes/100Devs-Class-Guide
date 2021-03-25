const express = require('express')
const cors = require('cors')
const { request, response } = require('express')
const app = express()
const PORT = 9000
app.use(cors())

let lessons = {
    "week_01": {
        "name": "Week_01",
        "tagline": "Come learn 'How to Learn' and the basics of HTML!",
        "class_01": "https://youtu.be/YRemMgGfbKg",
        "class_02": "https://youtu.be/N2VlXVZJIcY",
        "slides_01": "https://slides.com/leonnoel/html-the-basics-100devs",
        "slides_02": "https://slides.com/leonnoel/html-more-basics-100devs",
        "readings": {
            "text_01":{
                "title": "HTML & CSS: Shay Howe",
                "link": "https://learn.shayhowe.com/html-css/"
            }  
        },
        "watch": {
            "video_01": {
                "title": "How to study for exams - Evidence-based revision tips",
                "link": "https://youtu.be/ukLnPbIffxE"
            },
            "video_02": {
                "title": "How to Study for Exams - Spaced Repetition | Evidence-based revision tips",
                "link": "https://youtu.be/Z-zNHHpXoMM"
            }
        },  
        "do": {
            "HW_01": "https://www.coursera.org/learn/learning-how-to-learn",
            "HW_02": "Build: HTML for BBC Website (just what is in the attached image)"
        }
    },
    "week_02": {
        "name": "Week_02",
        "tagline": "Come learn the basics of CSS, and make a simple website look good!",
        "class_01": "https://youtu.be/h3wVQJ6SNfY",
        "class_02": "https://youtu.be/xTNCtSRz6No",
        "slides_01": "https://slides.com/leonnoel/css-the-basics-100devs/",
        "slides_02": "https://slides.com/leonnoel/css-more-basics-100devs/",
        "readings": {
            "text_01":{
                "title": "Learn Layout",
                "link": "http://learnlayout.com/"
            },  
            "text_02":{
                "title": "Advanced HTML & CSS with Shay Howe",
                "link": "https://learn.shayhowe.com/advanced-html-css/responsive-web-design/"
            }  
        },
        "watch": {
            "video_01": {
                "title": "If You Want to Change the World, Start Off by Making Your Bed - William McRaven, US Navy Admiral",
                "link": "https://youtu.be/3sK3wJAxGfs"
            },
        },  
        "do": {
            "HW_01": "https://www.typingtest.com/",
            "HW_02": "https://www.keybr.com/"
        }
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/:week', (request, response) => {
    const week = request.params.week.toLowerCase()
    if(lessons[week]){
        response.json(lessons[week])
    }
})

app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server running on PORT ${PORT}`)
})


