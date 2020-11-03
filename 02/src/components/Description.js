import React from 'react';

const Description = ({ desc }) => {
  const html = `${desc.split('.').slice(0, -1).reduce((prev, v) => (
    prev += `<li>${v}.</li>`
  ), '<ol>')}</ol>`;
  const createMarkUp = () => ({ __html: html });
  return (
    <>
      <div className="description box-style" dangerouslySetInnerHTML={createMarkUp()} />
    </>
  );
};

export default Description;
