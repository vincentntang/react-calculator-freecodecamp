export const operations = {
  x: function(a, b) {
    return b * a;
  },
  "÷": function(a, b) {
    return b / a;
  },
  "+": function(a, b) {
    return b + a;
  },
  "-": function(a, b) {
    return b - a;
  }
};

export const isOper = /(-|\+|÷|x)/;
