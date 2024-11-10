const Ul = ({ className, children }) => {
  return (
    <ul className={`px-200 gap-100 flex list-disc flex-col ${className}`}>
      {children}
    </ul>
  );
};

export default Ul;
