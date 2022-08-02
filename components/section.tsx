// TODO: Look into what props type is when it has children
const Section = (props: any) => {
  return (
    <div className="p-24 flex justify-center">
      {props.children}
    </div>
  );
};

export default Section;
