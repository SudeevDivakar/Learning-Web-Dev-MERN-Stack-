const button = document.querySelector('#searchButton');
button.addEventListener('click', async () => {
    const input = document.querySelector('#search');
    const val = input.value;
    input.value = '';
    // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=:${val}`);
    const config = {params: {q: val}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config);
    if(res.data.length === 0){
        const mainDiv = document.querySelector('#movies');
        mainDiv.innerHTML = '';
        mainDiv.append(document.createElement('span').innerText = 'No Shows Found');
    }
    else
        createLI(res.data);
})

function createLI(res){
    const mainDiv = document.querySelector('#movies');
    mainDiv.innerHTML = '';
    for(let i of res){
        let div = document.createElement('div');
        div.classList.add('container');
        let img = document.createElement('img');
        try{
            img.src = i.show.image.medium;
        }
        catch{
            img.src = 'https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg';
            img.classList.add('resize');
        }
        img.classList.add('image');
        div.append(img);
        div.append(i.show.name);
        mainDiv.append(div);
    }
}