import {useEffect} from 'react'

export const useTitle = (title) => {
// to change the title of the current page
  useEffect(() => {
    document.title = `${title} / Showmate`
  });
  return null;
}
