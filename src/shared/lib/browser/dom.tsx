import { useEffect } from 'react';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * @hook Задать title странице
 */
const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export const dom = {
  scrollToTop,
  useTitle,
};
