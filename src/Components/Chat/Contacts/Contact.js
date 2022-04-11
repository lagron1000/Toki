import im from '../../../Data/guy.png'
function Contact({name, img}) {



    return(
        <div>
            <p>{name}</p>
            <img src={img}></img>
        </div>
    )
}

export default Contact;