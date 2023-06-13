import { useEffect } from 'react';

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * @hook Задать title странице
 */
export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
