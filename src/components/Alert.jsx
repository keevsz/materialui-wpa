export function Alert({ message }) {
  return (
    <div style={{cursor: "default", color:"#e57373"}} className="animate__animated  animate__fadeOut animate__delay-3s">
      {message}
    </div>
  );
}
