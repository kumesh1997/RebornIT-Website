export const About = (props) => {
  return (
    <div id="about">
      
            {" "}
            <img src="img/LOGO.png" className="img-responsive" alt="" />{" "}
            <h3>{props.data ? props.data.paragraph : "loading..."}</h3>
         
    </div>
  );
};
