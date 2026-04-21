interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    // The below font-size and font-size from the sm breakpoint should be the 'standard' for the other pages other than the homepage!!!
    <h1 className="text-4xl sm:text-6xl text-orange-500 font-pixel-square">
      {title}
    </h1>
  );
};

export default PageTitle;
