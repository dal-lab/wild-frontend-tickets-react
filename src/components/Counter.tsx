import { useEffect, useRef } from 'react';

let count = 0;

export default function Counter() {
    const countRef = useRef(0);
  
    useEffect(() => {
      const timerId = setInterval(() => {
        countRef.current += 1;
        console.log(`Count: ${countRef.current}`);
      }, 500);
  
      return () => {
        clearInterval(timerId);
      };
    }, []);
  
    return (
      <div>Counter</div>
    );
  }
  
