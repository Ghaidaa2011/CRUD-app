import React, { ReactElement } from "react";
import { TLoading } from "../types/shared";

type TLoadingProps = {
  loading: TLoading;
  error: null | string;
  children: React.ReactNode;
};
const Loading = ({ loading, error, children }: TLoadingProps) => {
  const elementType = (children as ReactElement)?.type?.render?.displayName;
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
          <p>Loading, please wait...</p>
        ) : loading === "failed" ? (
          <>
            <p>{error}</p>
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
