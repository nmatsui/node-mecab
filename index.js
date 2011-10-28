var MeCab = new require('./build/default/mecab');
exports.MeCab = MeCab;

var nomal = new MeCab.Tagger();
exports.mecabify = function(text){
    var row = nomal.parse(text).split("\n");
    var i = 0;
    var buf = []
    while(row[i++] !== "EOS"){
        var list = row[i].split(/\r\n|\r|,|\t/);
        buf.push(list);
    };
    return buf;
};

