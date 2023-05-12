// import React from "react";
// import Card from "./Card";

// const Cards = (courses) => {
//  //  saare ke sarre ke array me data le aaye 
//     let allCourses = [];
//     const getCourses = ()=> {
//         Object.values(courses).forEach((courseCategory) => {
//             courseCategory.forEach((course) => {
//                 allCourses.push(course);
//             })
//         })
//         return allCourses;
//     }
//     return (
//         <div>
//          {
//             getCourses().map((course)=>
//             {
//             return <Card course={course}/>
//             })
//          }
//         </div>
//     )
// }
// export default Cards;

import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);
    
    function getCourses() {
        if(category === "All") {
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else {
            //main sirf specific categiry ka data array krunga  
            return courses[category];      
        }

    }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getCourses().map( (course) => (
            <Card key={course.id} 
            course = {course} 
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}/>
        ))
      }
    </div>
  )
}

export default Cards
