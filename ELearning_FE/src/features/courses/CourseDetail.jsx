import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import courseService from './services/course.service';

const CourseDetail = () => {
    const [course, setCourse] = useState(null);
    const { courseId } = useParams();
    const { isLoading, setIsLoading } = useState(true)

    useEffect(() => {
        const getCourseDetail = async () => {
            try {
                const courseData = await courseService.findById(courseId);
                setCourse(courseData)
                setIsLoading(true)

            } catch (error) {
                console.log(error)
            }
        }
        getCourseDetail();
    }, [])

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div>


        </div>
    )
}

export default CourseDetail
