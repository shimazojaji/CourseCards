import React from "react";
import StarIcon from "./StarIcon";

function CourseCard({ course }) {
  return (
    <div className="course-item">
      
      <div className="course-item__img">
        <img src={course.imageUrl} alt={course.title} />
      </div>
      <div className="course-item__detail">
        <CourseCardBody
          description={course.description}
          title={course.title}
          rate={course.rate}
        />
        <CourseCardFooter course={course} />
      </div>
    </div>
  );
}

export default CourseCard;

function CourseCardBody({ title, description, rate }) {
  return (
    <div className="course-item__body">
      <div>
        <p className="title">{title}</p>
        <p className="desc">{description}</p>
      </div>
      <div className="rate-wrapper">
         <StarIcon/>
        <span className="rate">{rate}</span>
       
      </div>
      
    </div>
  );
}

function CourseCardFooter({ course }) {
  const startDate = new Date(course.start).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });
  return (
    <div className="course-item__footer">
      <div className="tags">
        {course.tags.map((t) => (
          <span key={t} className="badge badge--tag">
            {t}
          </span>
        ))}
      </div>
      <div className="caption">
        <div className="date">{startDate}</div>
        <span className={`badge ${course.status === 'Active'?"badge--active":
        course.status==='Completed'?"badge--completed":"badge--upComing"}`}>{course.status}</span>
      </div>
    </div>
  );
}
