const Ol = ({ className, children }) => {
  return (
    <ol className={`px-200 gap-100 flex list-decimal flex-col ${className}`}>
      {children}
    </ol>
  );
};

export default Ol;
