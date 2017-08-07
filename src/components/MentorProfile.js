import React from 'react';
import '../../public/css/mentorConnection.css';
import '../../public/css/bootstrap.css';
import Navbar from './common/Navbar';
import Mentor1 from "../../public/images/mentor1.jpg";
import Avatar1 from "../../public/images/avatar1.jpg";



class MentorProfile extends React.Component {
  render() {
    return (

      	<div>

      		<Navbar />

	      	<div className="services">
	      		<div className="container">
	      			<div className="row text-center">
	      				<div className="col-md-6">
	      					<div className="service-item">

						      	<div>
						          <img src={Mentor1} className="img-thumbnail img-responsive" alt="mentor" />
						        </div>

						    </div>
				        </div>
				    

					    <div className="col-md-6">
				        	<div className="panel panel-default">
				          		<div className="panel-heading">
				            		<h3 className="panel-title">Mentee List</h3>
				          		</div>

				          		<div className="panel-body menteepanel">
				          			<img src={Avatar1} className="avatarimg" alt="avatar" />
            						<p className="menteelist">Mentee Name</p>
          						</div>

				          	</div>

				      	</div>

				    </div>

				</div>

			</div>

      	</div>

   
    );
  }
}

export default MentorProfile

