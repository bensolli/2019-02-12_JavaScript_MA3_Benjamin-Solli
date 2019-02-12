


let obj =
{
	"video": [
        {
            "id": 12312412312,
            "name": "Ecuaciones Diferenciales",
            "url": "/video/math/edo/12312412312",
            "author": {
                "data": [{
                    "name_author": "Alejandro Morales",
                    "url": "/author/alejandro-morales",
                    "type": "master"
                }]
            }
        }
    ]
}


for(let videoindex=0;videoindex<obj.video.length;videoindex++){
    console.log('"id": ' + obj.video[videoindex].id + '"');
    console.log('"name": "' + obj.video[videoindex].name + '"');
    console.log('"url": "' + obj.video[videoindex].url + '"');
    console.log(obj.video[videoindex].author);

    for(let i=0;i<obj.video[videoindex].author.data.length;i++){
        console.log('"name_author": "' + obj.video[videoindex].author.data[i].name_author + '"')
        console.log('"url": "' + obj.video[videoindex].author.data[i].url + '"')
        console.log('"type": "' + obj.video[videoindex].author.data[i].type + '"')
    }
}



/*console.log(JSON.stringify(obj));*/
