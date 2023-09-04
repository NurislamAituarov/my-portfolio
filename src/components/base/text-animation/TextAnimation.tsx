import { useEffect, useMemo, useRef } from 'react';

interface IPropsTextAnimation {
  text: string;
  animationClass: 'seven' | 'one' | 'two' | 'three' | 'four' | 'five' | 'six';
}

export function TextAnimation({ text, animationClass }: IPropsTextAnimation) {
  const refTextAnim = useRef<HTMLDivElement | null>(null);

  function repeatAnimation() {
    const text = refTextAnim.current;
    if (text) {
      const classes = text?.className;
      text.classList.remove(animationClass);
      setTimeout(function () {
        text.setAttribute('class', classes);
      }, 10);
    }
  }

  const textTransformArr = useMemo(() => {
    return text.split('');
  }, [text]);

  const classNames = () => {
    return `animate ${animationClass}`;
  };

  return (
    <>
      <div className="container-text">
        <div className={classNames()} ref={refTextAnim}>
          {textTransformArr.map((el, ind) => {
            return el !== ' ' ? <span key={ind}>{el}</span> : '  ';
          })}
        </div>
      </div>
    </>
  );
}
