function sendMail(){
    var parameters = {
        firstname: document.getElementById("firstname").value ,
        lastname: document.getElementById("lastname").value ,
        email: document.getElementById("email").value ,
        objet: document.getElementById("objet").value ,
        message: document.getElementById("message").value ,
    };

    const service_id = "service_ypafb44";
    const template_id = "template_scgiyzb";
    
    emailjs.send(service_id, template_id, parameters).then(
        responce => {
            document.getElementById("firstname").value = "";
            document.getElementById("lastname").value = "";
            document.getElementById("email").value = "";
            document.getElementById("objet").value = "";
            document.getElementById("message").value = "";
            console.log(responce);
            alert("Votre message a été envoyé avec succès !");
        })
        .catch((erreur) => console.log(erreur));
}