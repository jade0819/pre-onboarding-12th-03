export const isEmptyObject = obj => {
  return Object.keys(obj).length === 0;
};

export const removeSpecialCharacters = input => {
  // 정규식: 특수 문자 제거
  return input.replace(/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/g, '');
};
