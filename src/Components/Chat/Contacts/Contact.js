function Contact({name, img}) {



    return(
        <div>
            <p>{name}</p>
            <img className="pfp mb-3" src={img}></img>
        </div>
    )
}

export default Contact;