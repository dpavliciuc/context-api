const Description = ({ itemDescription, className = "" }) => {
  return (
    <div className={`mt-0 mr-5 ${className}`.trim()}>
      <p>
        {itemDescription}
        <br />
        <em className="font-bold">Note:</em> <em>This is not a safe bid application as users are exposed to personal information, it was only made for Context API.</em>
      </p>
    </div>
  );
};

export default Description;