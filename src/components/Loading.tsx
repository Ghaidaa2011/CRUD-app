import React, { ReactElement } from "react";
import { TLoading } from "../types/shared";
import TableSkeleton from "./feedback/skeletons/TableSkeleton";
import LottieHandler from "./feedback/LottieHandler/LottieHandler";

type TLoadingProps = {
  loading: TLoading;
  error: null | string;
  children: React.ReactNode;
};
const Loading = ({ loading, error, children }: TLoadingProps) => {
  const elementType =
    React.isValidElement(children) && typeof children.type === "function"
      ? (children.type as React.FunctionComponent).displayName
      : undefined;
  const renderHandler = () => {
    if (elementType === "Button") {
      const cloneButton = React.cloneElement(
        children as ReactElement,
        { disabled: true },
        "Loading..."
      );
      return (
        <>
          {loading === "pending" ? (
            cloneButton
          ) : loading === "failed" ? (
            <>
              {children}
              <p>
                <br />
                {error}
              </p>
            </>
          ) : (
            children
          )}
        </>
      );
    }
    return (
      <>
        {loading === "pending" ? (
          <TableSkeleton />
        ) : loading === "failed" ? (
          <>
            <div>
              <LottieHandler type="error" message={error as string} />
            </div>
          </>
        ) : (
          children
        )}
      </>
    );
  };
  return renderHandler();
};
export default Loading;
