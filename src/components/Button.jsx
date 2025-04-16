
function Button({children, onClick, imageSrc, alt, style, href }) { 
    const isLink = href && href.trim() !== "";

    const button = (
        <button className={style} onClick={onClick} href={href}> 
            <img src={imageSrc} alt={alt} />
            {children}
        </button>
    );

    return isLink ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {button}
        </a>
      ) : (
        button
      );
}

export default Button;