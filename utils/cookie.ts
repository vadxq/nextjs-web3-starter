/**
 * get client cookie
 * @param {String} name cookie name
 */
export const getCookie = (name: string): string | undefined => {
  const value = `; ${typeof window === 'undefined' ? '' : document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    const ppop = parts.pop();
    if (ppop) {
      return ppop.split(';').shift();
    }
  }
  return '';
};

/**
 * delete client cookie
 * @param {String} name cookie name
 */
export const deleteCookie = (name: string) => {
  const date = new Date();
  date.setTime(date.getTime() - 10000);
  document.cookie = name + '=; expire=' + date.toString();
};

/**
 * set client cookie
 * @param {String} name cookie name
 * @param {String} value cookie value
 */

export const setCookie = (name: string, value: string) => {
  const Days = 30;
  const exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + '=' + value + ';expires=' + exp.toString();
};
