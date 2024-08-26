import cardStyle from "./lesson.module.css"


const LessonCard =({image, name, hour,id})=>{
   
return(
    <div key={id} className={cardStyle.cardBox}>
 
        <div className={cardStyle.card}>
        <img src={image} alt="" />
        <div className={cardStyle.titleBox}>
            <h3>Lesson Name: {name}</h3>
            <h3>Başlama Saati: {hour}</h3>
        </div>
        </div>
    </div>
)
}

export default LessonCard;