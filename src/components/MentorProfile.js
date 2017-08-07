import React from 'react';
import '../../public/css/bootstrap.css';
import '../../public/css/mentorConnection.css';

import Navbar from './common/Navbar';
import Mentor1 from "../../public/images/mentor1.jpg";
import Avatar1 from "../../public/images/avatar1.jpg";
import menteeAPI from "../utils/menteeAPI"
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once


// Render the Calendar
var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

const styles = {
  	hrStyle: {
    margin: 0
},

	mentorList: {
    textAlign: "left"
},
	mentorPanel: {
    height: 80  
},

	mentorPanelHead: { 
    backgroundColor: "#337AB7"
},

	mentorPanelTitle: {
    color: "#fff",
    fontWeight: "bold"
}
};
class MentorProfile extends React.Component {

	constructor(){
		super();
		this.state = {
			mentees: []
		}
		this.getMentees = this.getMentees.bind(this);
	}

	componentDidMount(){
		this.getMentees();
	}

	getMentees() {
		menteeAPI.getMentees().then((res) => {
			this.setState({mentees: res.data});
		});
	}


  	render() {
    	return (

	      	<div>

	      	<Navbar />

	      		<div className="container">
	      			<div className="row text-center">
	      				<div className="col-md-6">
	      					<div className="service-item">

						      	<div>
						          <img src={Mentor1} className="img-thumbnail img-responsive" alt="mentor" />
						          <h3>Welcome Back User</h3>
						        </div>

						    </div>
				        </div>
				    
					    <div className="col-md-6">
				        	<div className="panel panel-default">
				          		<div className="panel-heading" style={styles.mentorPanelHead}>
				            		<h2 className="panel-title" style={styles.mentorPanelTitle}>Mentee List</h2>
				          		</div>

				          		<div className="panel-body mentorPanel">
				          			<img src={Avatar1} className="avatarImg" alt="avatar" />
	        						<p style={styles.mentorList}>Mentee Name</p>
	        						<p style={styles.mentorList}>Appointment Time</p>
	      						</div>

	      						<hr style={styles.hrStyle}/>

	      						<div className="panel-body" style={styles.mentorPanel}>
				          			<img src={Avatar1} className="avatarImg" alt="avatar" />
	        						<p style={styles.mentorList}>Mentee Name</p>
	        						<p style={styles.mentorList}>Appointment Time</p>
	      						</div>

	      						<hr style={styles.hrStyle}/>

	      						<div className="panel-body" style={styles.mentorPanel}>
				          			<img src={Avatar1} className="avatarImg" alt="avatar" />
	        						<p style={styles.mentorList}>Mentee Name</p>
	        						<p style={styles.mentorList}>Appointment Time</p>
	      						</div>

	      						<hr style={styles.hrStyle}/>

	      						<div className="panel-body" style={styles.mentorPanel}>
				          			<img src={Avatar1} className="avatarImg" alt="avatar" />
	        						<p style={styles.mentorList}>Mentee Name</p>
	        						<p style={styles.mentorList}>Appointment Time</p>
	      						</div>

	      						<hr style={styles.hrStyle}/>

	      						<div className="panel-body" style={styles.mentorPanel}>
				          			<img src={Avatar1} className="avatarImg" alt="avatar" />
	        						<p style={styles.mentorList}>Mentee Name</p>
	        						<p style={styles.mentorList}>Appointment Time</p>
	      						</div>

				          	</div>

				      	</div>

				      	<div className="col-md-6">
							<InfiniteCalendar
				    			width={455}
				    			height={350}
				    			selected={today}
				    			disabledDays={[0,6]}
				    			minDate={lastWeek}
				  			/>,

	  					</div>

				    </div>

				</div>

	      	</div>

   
    	);
  	}
}



export default MentorProfile

