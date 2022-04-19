// var defaultCH = [
//     {
//         'linmon' : [
//             {content : "hi", time : "10:20", me : true}
//         ],
//         'nobort' : [
//             {content : "allo", time : "10:20", me: false},
//             {content : "ello", time : "10:21", me: true},
//         ]
//     }
// ]

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
    }
]

const contactList = [
    {id : '1', name : 'Linor Agmon', img : 'guy.png', user : 'linmon', pword : '1234', chatHistory : defaultCH},
    {id : '2', name : 'Nofir Bort', img : 'lady.png', user : 'nobort', pword : '1234', chatHistory : defaultCH},
    {id : '3', name : 'Limor Halfon', img : 'guy.png', user : 'limfon', pword : '1234', chatHistory : defaultCH},
];

export default contactList;
