import React, {useRef, useEffect, useState} from "react";

const LazyImage = (props) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  let callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setInView(true);
        console.log("visible");
        observer.unobserve(ref.current);
      }
    })
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);
    if (ref?.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    }
  }, []);

  return (
    <div 
      style={{position: 'relative', 
        width: '100%', 
        paddingBottom: '75%'
      }}
      ref={ref} 
    >
      <img 
        src={inView? props.src:""}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }} 
      />
    </div>
  );
}

export default LazyImage