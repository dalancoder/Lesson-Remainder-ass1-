import LessonCard from "../components/LessonCard/LessonCard";
import cardStyle from "../components/LessonCard/lesson.module.css";


const Lesson = ({data})=>{
  
    return(
        <div className={cardStyle["card-list"]}>
        <div>
             <h1 className={cardStyle.title}>Lesson Reminder</h1>
        </div>
          <div className={cardStyle.cardMain}>
            {
            data.map((card)=>(
           <LessonCard key={card.id} {...card}/>     
            ))
        }
           
          </div>
         
        </div>
    )
}

export default Lesson;