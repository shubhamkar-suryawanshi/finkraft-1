function longString(mainStr, subStr, mLength, sLength) {
  var longStr = Array(mLength + 1)
    .fill()
    .map(() => Array(sLength + 1).fill(0));

  var res = 0;

  for (let i = 0; i <= mLength; i++) {
    for (let j = 0; j <= sLength; j++) {
      if (i == 0 || j == 0) longStr[i][j] == 0;
      else if (mainStr[i - 1] == subStr[j - 1]) {
        longStr[i][j] = longStr[i - 1][j - 1] + 1;
        res = Math.max(res, longStr[i][j]);
      } else longStr[i][j] = 0;
    }
  }

  return res;
}

var mainStr = abcdabcabc;
var subStr = abc;
var mLength = mainStr.length;
var sLength = subStr.length;

longString(mainStr, subStr, mLength, sLength);
