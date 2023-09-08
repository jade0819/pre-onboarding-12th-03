export const isEmptyObject = obj => {
  return Object.keys(obj).length === 0;
};

export const removeSpecialCharacters = input => {
  // 정규식: 특수 문자 제거
  return input.replace(/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/g, '');
};

export const koreanRegexCheck = input => {
  // 자음 또는 모음만으로 구성된 문자가 있는지 검사하는 정규식
  const koreanRegex = /^[가-힣a-zA-Z\s]*$/;
  return koreanRegex.test(input);
};
