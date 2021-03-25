const button = document.querySelector('button')
button.addEventListener('click', lessonSearch)

async function lessonSearch(){
    const week = document.querySelector('select').value
    if(week){
        document.querySelector('.lesson').classList.remove('hidden')
    }
    const watchSection = document.querySelector('#watchSection')
    const readSection = document.querySelector('#readSection')
    const doSection = document.querySelector('#doSection')
    try{
        const response = await fetch(`http://localhost:9000/api/${week}`)
        const data = await response.json()
        // console.log(data)

        document.querySelector('#tagline').innerText = data.tagline
        document.querySelector('#tagline').classList.add('paddingT')
        // input links for classes and slides
        document.querySelector('#class01').href = data['class_01']
        document.querySelector('#class02').href = data['class_02']
        // document.querySelector('#slides01').href = data['slides_01']
        // document.querySelector('#slides02').href = data['slides_02']
        
        // update watch section
        if(data.watch){
            document.querySelector('#watchHeader').innerText = 'Watch:'
            let arr = Object.values(data.watch)
            arr.forEach(video => {
                const anchorTag = document.createElement('a')
                anchorTag.setAttribute('href', video.link)
                anchorTag.setAttribute('target', '_blank')
                anchorTag.innerText = video.title
                watchSection.appendChild(anchorTag)
            })
        }
        if(data.readings){
            document.querySelector('#readHeader').innerText = 'Read:'
            let arr = Object.values(data.readings)
            arr.forEach(text => {
                const anchorTag = document.createElement('a')
                anchorTag.setAttribute('href', text.link)
                anchorTag.setAttribute('target', '_blank')
                anchorTag.innerText = text.title
                readSection.appendChild(anchorTag)
            }) 
        }
        if(data.do){
            document.querySelector('#doHeader').innerText = 'Do:'
            for(let key in data.do){
                const anchorTag = document.createElement('a')
                anchorTag.setAttribute('href', data.do[key])
                anchorTag.setAttribute('target', '_blank')
                anchorTag.innerText = `${data.do[key]}`
                doSection.appendChild(anchorTag)
                // console.log(data.do[key])
            }
        }
        if(data.slides_01){
            document.querySelector('#slidesHeader').innerText = 'Slides:'
            const anchorTag = document.createElement('a')
            anchorTag.setAttribute('href', data.slides_01)
            anchorTag.setAttribute('target', '_blank')
            anchorTag.innerText = `Slides for Class 01`
            slidesSection.appendChild(anchorTag)
            console.log(data.slides_01)
        }
        if(data.slides_02){
            const anchorTag = document.createElement('a')
            anchorTag.setAttribute('href', data.slides_02)
            anchorTag.setAttribute('target', '_blank')
            anchorTag.innerText = `Slides for Class 02`
            slidesSection.appendChild(anchorTag)
            console.log(data.slides_02)
        }



    }catch(err){
        console.log(err)
    }
}