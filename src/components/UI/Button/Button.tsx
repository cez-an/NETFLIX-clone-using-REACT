
type button = {
  name: string;
  icon ?: React.ReactNode;
  class?: string;
  color?: string;
};

const Button = (props: button) => {
  return (
    <>
      <button className={`${props.class} ${props.color} flex items-center justify-center gap-3`}> {`${props.name}`}{props.icon}  </button>
    </>
  );
};

export default Button;
