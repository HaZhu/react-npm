import React from 'react';
type ImgPreviewProps = {
  test: string;
};
const ImgPreview: React.FC<ImgPreviewProps> = ({
  test
}) => {
  return (
    <div>{test}</div>
  );
};

export default ImgPreview;
