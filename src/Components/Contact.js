import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var email = this.props.data.email;
      var phone = this.props.data.phone;
      var name = this.props.data.name;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <center><span><h1>Contact</h1></span></center>
         <div className="row section-head">
            <div className="row">
                  <div className="eight columns header-col">
                     <center><h4>Email & Phone</h4></center> 
                  </div>

                        <div className="nine columns main-col">
                           <div className="row item">
                              <div className="eight columns">
                                
                                    {email}<br />
                                    {phone}
                                
                              </div>
                           </div>
                        </div>
                     </div>

            <div className="two columns header-col">


               {/* Insert logo here?  */}

            </div>

         </div>

         <div className="row">

            <center>

               <h1>Send a Message</h1><br /><br />

            </center>

            <div className="twelve columns">

               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/><br />
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button className="submit">Submit</button>
                     <span id="image-loader">
                        {/* <img alt="" src="images/loader.gif" /> */}
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className=""></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">
					
					   <p className="address">
					   </p>
				   </div>

               {/* <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
		         </div> */}
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
