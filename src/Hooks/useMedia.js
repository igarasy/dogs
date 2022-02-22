import React from 'react';

const useMedia = (media) => {
  const [match, setmatch] = React.useState(null);

  /*  O matchMedia permite saber se a largura máxima de uma tela é igual ao valor que colocarmos como argumento. Ele retorna um objeto que tem o matches, como true caso seja verdadeiro para a medida que passamos e falso se não for */

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setmatch(matches);
    }
    changeMatch();
    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);
  return match;
};

export default useMedia;
