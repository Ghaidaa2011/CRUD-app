import ContentLoader from "react-content-loader";

const TableSkeleton = () => {
  const tableRenderSkeleton = Array(3)
    .fill(0)
    .map((_, indx) => {
      return (
        <div
          key={indx}
          className="d-flex justify-content-center align-items-center"
        >
          <ContentLoader
            speed={2}
            width={600}
            height={70}
            viewBox="0 0 600 70"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="500" y="0" rx="3" ry="3" width="100" height="50" />
            <rect x="110" y="0" rx="3" ry="3" width="380" height="50" />
            <rect x="0" y="0" rx="3" ry="3" width="100" height="50" />
          </ContentLoader>
        </div>
      );
    });
  return tableRenderSkeleton;
};
export default TableSkeleton;
