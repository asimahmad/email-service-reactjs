import React from 'react';
import emailjs from 'emailjs-com'
function mailer(props) {

     function sendEmail(e){
    //     e.preventDefault();
    //     emailjs.sendForm('service_key', 'template_key', e.target, "user_id")
    //     .then(res =>{
    //         console.log(res)
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
     }
    return (
        <div className="container border" style={{marginTop:"50px", width:"50%", backgroundImage: `url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`, backgroundPosition:'center', backgroundSize:'cover'}}>
            <h1 style={{marginTop:'20px'}}>Contact Form</h1>
            <form className="row" style={{margin: "25px 85px 75px 100px"}} onSubmit={sendEmail}>
                <label style={{float:'left', color:"#bd084a"}}>Name</label>
                <input className="form-control" type="text" name="user_name" />

                <label style={{float:'left', color:"#bd084a"}}>Email</label>
                <input className="form-control" type="email" name="user_email" />

                <label style={{float:'left', color:"#bd084a"}}>Message</label>
                <textarea className="form-control" name="user_message" rows="4" />

                <input className="form-control btn btn-primary" style={{marginTop:'30px'}} type="submit" value="send" />
            </form>
        </div>
    );
}

export default mailer;