const LinkTag = ({ link, name }) => {
  return (
    <a href={link} className=" link_color">
      {name}
    </a>
  );
};

export default LinkTag;
