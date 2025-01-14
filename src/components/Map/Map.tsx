import { MapOptions } from "leaflet";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

const DynamicMap = dynamic(() => import("./Dynamic"), {
  ssr: false,
});

interface MapProps extends MapOptions {
  children: ReactNode;
  // eslint-disable-next-line no-unused-vars
  whenReady: (map: any) => void;
}

export const Map = (props: MapProps) => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <DynamicMap {...props} />
    </div>
  );
};
