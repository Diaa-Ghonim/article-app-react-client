import { useEffect, useState } from 'react';

export function useDocumentTitle(value) {
  useEffect(() => {
    document.title = value;
  }, []);
}

export function useMedia(mediaQuery) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    let media = window.matchMedia(mediaQuery);
    if (media.matches) {
      setMatches(true);
    }
    function onMediaWidthChange(evt) {
      if (evt.matches) {
        setMatches(true);
      } else {
        setMatches(false);
      }
    }

    media.addEventListener('change', onMediaWidthChange);

    return () => media.removeEventListener('change', onMediaWidthChange);
  });

  return matches;
}
