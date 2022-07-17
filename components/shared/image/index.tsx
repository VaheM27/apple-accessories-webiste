import { IKImage, IKContext } from "imagekitio-react";
import { ImageProps } from "./type";
import env from "../../../utils/constants/env";

export const Image = ({ width, height, path }: ImageProps) => {
  return env.urlEndpoint && env.publicKey ? (
    <IKContext
      publicKey={env.publicKey}
      urlEndpoint={env.urlEndpoint}
      transformationPosition="path"
    >
      <IKImage
        path={path}
        transformation={[
          {
            height: height,
            width: width,
          },
        ]}
      />
    </IKContext>
  ) : (
    <div>no image</div>
  );
};
