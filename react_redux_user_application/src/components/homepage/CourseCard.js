import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { currentCourse } from '../../actions/CourseAction';
import './CourseCard.css';
class CourseCard extends Component {
  state = {}
  fun = () => {
    this.props.currentCourse(this.props.course);
  }
  render() {
    return (
      <div className="card col  p-0 rounded-lg ">
        <Link className=' text-decoration-none' to='/course' onClick={this.fun}>
          <div className="card--content--QgkRx">
            <div>
              <div className="card--header--NzeCJ">
                <h3 className="vds-heading--h6 vds-spacing--stack-3x text-decoration-none">
                  <i
                    className="vds-icon vds-icon--lg vds-color--green" role="img" aria-hidden="true"><svg
                      viewBox="0 0 32 32">
                      <path
                        d="M6.766 21h8.468L11 13.944 6.766 21zm5.091-9.514l6 10A1 1 0 0 1 17 23H5a1 1 0 0 1-.857-1.514l6-10a1 1 0 0 1 1.714 0zm13 5l3 5A1 1 0 0 1 27 23h-6a1 1 0 0 1-.857-1.514l3-5a1 1 0 0 1 1.714 0zM22.767 21h2.467L24 18.944 22.766 21zm-2.91-5.486a1 1 0 0 1-1.714 0l-3-5A1 1 0 0 1 16 9h6a1 1 0 0 1 .857 1.514l-3 5zM20.234 11h-2.468L19 13.056 20.234 11z"
                        fillRule="nonzero"></path>
                    </svg></i>{this.props.course.courseType}</h3>
                <h4 className="vds-heading--h4 vds-spacing--stack-3x text-decoration-none">{this.props.course.courseTitle}</h4>
              </div>
              <div className="card--summary--2Bu6P">
                <p className="text-decoration-none ">{this.props.course.courseDescp}</p>
              </div>
            </div>
            <div className="card--action--2EYXX"><span></span>
              <button className="vds-button vds-button--secondary vds-button__icon vds-button__icon--right" aria-busy="false" type="button">
                <span className="vds-button__content">
                  <i className="vds-icon" role="img" aria-hidden="true">
                    <svg viewBox="0 0 32 32">
                      <path d="M22.586 17H7a1 1 0 0 1 0-2h15.586l-6.293-6.293a1 1 0 1 1 1.414-1.414l8 8a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414L22.586 17z" fillRule="nonzero"></path>
                    </svg>
                  </i>Program Home</span>
              </button>
            </div>
          </div>


        </Link>
      </div>
    );
  }
}

// export default CourseCard;
// const mapsStatesToProps = state => ({ course: state.course, user: state.user });
CourseCard.propTypes = { currentCourse: PropTypes.func.isRequired };
export default connect(null, { currentCourse })(CourseCard);