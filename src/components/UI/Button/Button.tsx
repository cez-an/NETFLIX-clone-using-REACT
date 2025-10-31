type button = {
  name: string;
  icon?: React.ReactNode;
  class?: string;
  color?: string;
  fun?: () => void;
};
const Button = (props: button) => {
  return (
    <>
      <button
      onClick={props.fun}
        className={`${props.class} ${props.color} flex items-center justify-center gap-3`}
      >
        {" "}
        {`${props.name}`}
        {props.icon}{" "}
      </button>
    </>
  );
};

export default Button;
