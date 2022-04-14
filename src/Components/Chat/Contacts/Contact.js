function Contact({name, img}) {



    return(
        <div className="card table-hover">
            <p class="card-header mb-3" >{name}</p>
            <img className="pfp mb-3" src={img}></img>
        </div>
    )
}

export default Contact;