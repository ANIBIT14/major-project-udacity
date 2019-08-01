import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LessonSidebar from './CoursePageComponent/LessonSidebar';
import LessonTopbar from './CoursePageComponent/LessonTopbar';
import LessonCard from './CoursePageComponent/LessonCard';
import { readLesson } from '../actions/lessonAction';

import './CoursePage.css';
class CoursePage extends React.Component {
    componentWillMount() {
        this.props.readLesson(this.props.location.state.courseId);
    }
    render() {
        return (
            <div className="bg-light ">

                <div className='w-100'>
                    <div className=''>
                        <LessonTopbar />
                    </div>
                    <div className='row pl-2 w-100'>
                        <div className='col-sm-1'>
                            <LessonSidebar />
                        </div>
                        <div className="col-sm-10 pt-5 p3">
                            {this.props.lessonData.map(data => (
                                <div key={data.lessonId} className=""><LessonCard lesson={data} courseId={this.props.location.state.courseId} /></div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
const mapsStateToProps = state => ({ lessonData: state.lessonData });
CoursePage.propTypes = { readLesson: PropTypes.func.isRequired };
export default connect(mapsStateToProps, { readLesson })(CoursePage);