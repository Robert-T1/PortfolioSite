import React from 'react';

function Button({ children, onClick, imageSrc, alt, style, href }) {
  const isLink = href && href.trim() !== "";
  const content = (
    <div>
      <img src={imageSrc} alt={alt} />
      <span>{children}</span>
    </div>
  );

  if (isLink) {
    return (
      <a href={href} className={style} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button className={style} onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;
