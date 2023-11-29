

function ReusableButton ({onClick, text,maxWidth, width, height,backgroundColor,borderRadius,color, border }) {
      

    const buttonStyle = {
        width: width || "100%",
        height: height || "auto",
        maxWidth: maxWidth || "100%",
        color:color || "white",
        backgroundColor: backgroundColor || "#C92E81",
        borderRadius: borderRadius || "5px",
        border: border ||"none",
        
      };
    
      return (
        <button className="custom-button" onClick={onClick} style={buttonStyle}>
          {text}
        </button>
      );
}

export default ReusableButton