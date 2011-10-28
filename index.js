var MeCab = new require('./build/default/mecab');
exports.MeCab = MeCab;

var nomal = new MeCab.Tagger();
exports.parse = function(text) {
  var buf, i, row, _i, _len;
  row = nomal.parse(text).split("\n");
  buf = [];
  for (_i = 0, _len = row.length; _i < _len; _i++) {
    i = row[_i];
    if (i === "EOS") {
      break;
    }
    buf.push(i.split(/\r\n|\r|,|\t/));
  }
  return buf;
};

