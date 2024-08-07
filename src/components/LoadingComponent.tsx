// src/components/LoadingComponent.tsx
import React from "react";
import { IonLoading } from "@ionic/react";

interface LoadingComponentProps {
  isLoading: boolean;
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({ isLoading }) => {
  return (
    <IonLoading isOpen={isLoading} message={"Please wait..."} duration={5000} />
  );
};

export default LoadingComponent;
