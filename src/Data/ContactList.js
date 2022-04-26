var defaultCH = [
    {
        'linmon' : [
            {content : "hi", time : "10:20", me : true}
        ]
    },
    {
        'nobort' : [
            {content : "allo", time : "10:20", me: false},
            {content : "ello", time : "10:21", me: true},
        ]
    },
    {
        'limfon' :[
            {content : "ma holeh ya ahh", time : "10:20", me: false},
            {content : "walakk sababa noderrr", time : "10:21", me: true},
        ]
    },
    {
        'l' :[
            {content : "ah kapara", time : "10:20", me: false},
            {content : "ma omer", time : "10:21", me: true},
        ]
    },
    {
        'naroto' :[
            {content : "shabat shalom", time : "10:20", me: false},
            {content : "shabat shaloms", time : "10:21", me: true},
        ]
    }
]

const contactList = [
    {id : '1', name : 'Linor Agmon', img : './images/guy.png', user : 'linmon', pword : '1', chatHistory : defaultCH},
    {id : '2', name : 'Nofir Bort', img : './images/lady.png', user : 'nobort', pword : '1234', chatHistory : defaultCH},
    {id : '3', name : 'Limor Halfon', img : './images/guy.png', user : 'limfon', pword : '1234', chatHistory : defaultCH},
    {id : '4', name : 'Liron Admon', img : './images/guy.png', user : 'lirmon', pword : '1234', chatHistory : defaultCH},
    {id : '5', name : 'Namir Brot', img : './images/lady.png', user : 'naroto', pword : '1234', chatHistory : defaultCH},
    {id : '6', name : 'Lihor', img : './images/lady.png', user : 'l', pword : 'l', chatHistory : defaultCH},
    {id : '7', name : 'Nor', img : './images/TokiLogo.png', user : 'nor', pword : '1', chatHistory : []}

];

export function retCon(name) {
    return contactList.find(con => con["user"] == name);
}

export default contactList;
