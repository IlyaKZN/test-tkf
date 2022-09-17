export function setCookie(name: string, value: string, Props?: {[key: string]: number | string}) {
  const cookieProps = Props || {};
  const exp = cookieProps.expires;
  let dateExp;
  if (typeof exp === 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    dateExp = d;
  }
  if (dateExp) {
    cookieProps.expires = dateExp.toUTCString();
  }
  const cookieValue = encodeURIComponent(value);
  let updatedCookie = `${name}=${cookieValue}`;
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const propName in cookieProps) {
    updatedCookie += `; ${propName}`;
    const propValue = cookieProps[propName];
    updatedCookie += `=${propValue}`;
  }
  // eslint-disable-next-line no-undef
  document.cookie = updatedCookie;
}

export function getCookie(name: string) {
  // eslint-disable-next-line no-undef
  const matches = document.cookie.match(
    // eslint-disable-next-line no-useless-escape
    new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
