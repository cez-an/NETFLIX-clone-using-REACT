
type button = {
  name: string;
  icon ?: React.ReactNode;
  class?: string;
  color?: string;
};

const Button = (props: button) => {
  return (
    <>
      <button className={`${props.class} ${props.color} py-2 px-7`}> {`${props.name}`}{props.icon}  </button>
    </>
  );
};

export default Button;
