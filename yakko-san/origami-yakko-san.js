//
//
//

'use strict';

var renderOrigami = function(ctx, img, size) {

  size = Math.floor(size || 100);

  ctx.canvas.width = size;
  ctx.canvas.height = size;

  // bg
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, size, size);

  var unit = img.height / 4;
  ctx.save();
  ctx.scale(size / 8 / unit, size / 8 / unit);

  var draw = function(path, mat) {

    ctx.save();

    ctx.transform(mat[0], mat[1], mat[2], mat[3],
        mat[4] * unit, mat[5] * unit);
    ctx.beginPath();
    for (var i = 0; i < path.length; i += 2) {
      if (i == 0) {
        ctx.moveTo(path[i] * unit, path[i + 1] * unit);
      } else {
        ctx.lineTo(path[i] * unit, path[i + 1] * unit);
      }
    }
    ctx.closePath();
    ctx.clip();

    ctx.drawImage(img, 0, 0);

    ctx.restore();
  };

  var rw = 0.8;

  var fc = function() {

    draw([1, 3, 3, 3, 3, 4, 1, 4], [1, 0, 0, 1, 2, 4]);
    draw([1, 3, 3, 3, 3, 4 - rw, 1, 4 - rw], [1, 0, 0, -1, 2, 10]);

    draw([1, 2 + rw, 3, 2 + rw, 3, 3, 1, 3], [1, 0, 0, -1, 2, 8]);
  };

  var fl = function() {

    draw([1, 1, 2, 2, 2, 0], [0, -1, 1, 0, 2, 2]);
    draw([1, 1, 2, 2, 2, 1 + rw, 2 - rw, 1], [1, 0, 0, -1, 2, 2]);

    draw([1, 1, 2, 2, 2, 3, 1, 3], [1, 0, 0, 1, 2, 2]);
    draw([1, 1, 2 - rw, 2 - rw, 2 - rw, 3, 1, 3], [-1, 0, 0, 1, 4, 2]);
    draw([1, 1, 2, 2, 1 + rw, 2, 1, 2 - rw], [0, 1, 1, 0, 2, 2]);

    draw([0, 1, 1, 1, 1, 3, 0, 3], [1, 0, 0, 1, 0, 2]);
    draw([0 + rw, 1, 1, 1, 1, 3, 0 + rw, 3], [-1, 0, 0, 1, 2, 2]);
  };

  var fr = function() {

    draw([3, 1, 2, 2, 2, 0], [0, 1, -1, 0, 6, -2]);
    draw([3, 1, 2, 2, 2, 1 + rw, 2 + rw, 1], [1, 0, 0, -1, 2, 2]);

    draw([3, 1, 3, 3, 2, 3, 2, 2], [1, 0, 0, 1, 2, 2]);
    draw([3, 1, 3, 3, 2 + rw, 3, 2 + rw, 2 - rw], [-1, 0, 0, 1, 8, 2]);
    draw([3, 1, 3, 2 - rw, 3 - rw, 2, 2, 2], [0, -1, -1, 0, 6, 6]);

    draw([3, 1, 4, 1, 4, 3, 3, 3], [1, 0, 0, 1, 4, 2]);
    draw([3, 1, 4 - rw, 1, 4 - rw, 3, 3, 3], [-1, 0, 0, 1, 10, 2]);
  };

  var bl = function() {

    draw([7, 1, 6, 0, 6, 2], [1, 0, 0, 1, -4, 0]);
    draw([7 - rw, 1 + rw, 7 - rw, 1 - rw, 6, 0, 6, 2], [-1, 0, 0, 1, 8, 0]);
    draw([7, 1, 6 + rw, 1, 6, 1 + rw, 6, 2], [0, -1, -1, 0, 4, 8]);

    draw([8, 1, 8, 2, 6, 2, 7, 1], [-1, 0, 0, -1, 8, 4]);
    draw([8, 1 + rw, 8, 2, 6, 2, 7 - rw, 1 + rw], [-1, 0, 0, 1, 8, 0]);
    draw([7, 2 - rw, 7 - rw, 2, 6, 2, 7, 1], [0, 1, 1, 0, 0, -4]);

    draw([8, 3, 8, 2, 6, 2, 7, 3], [-1, 0, 0, -1, 8, 8]);
    draw([8, 3 - rw, 8, 2, 6, 2, 7 - rw, 3 - rw], [-1, 0, 0, 1, 8, 4]);
    draw([7, 2 + rw, 7 - rw, 2, 6, 2, 7, 3], [0, -1, -1, 0, 4, 12]);

    draw([6, 2, 7, 3, 7, 4, 6, 4], [1, 0, 0, 1, -4, 4]);
    draw([6, 2, 7 - rw, 3 - rw, 7 - rw, 4, 6, 4], [-1, 0, 0, 1, 8, 4]);
    draw([6, 2, 7, 3, 6 + rw, 3, 6, 3 - rw], [0, 1, 1, 0, 0, 0]);
  };

  var br = function() {

    draw([5, 1, 6, 0, 6, 2], [1, 0, 0, 1, 0, 0]);
    draw([5 + rw, 1 + rw, 5 + rw, 1 - rw, 6, 0, 6, 2], [-1, 0, 0, 1, 12, 0]);
    draw([5, 1, 6 - rw, 1, 6, 1 + rw, 6, 2], [0, 1, 1, 0, 4, -4]);

    draw([4, 1, 4, 2, 6, 2, 5, 1], [-1, 0, 0, -1, 12, 4]);
    draw([4, 1 + rw, 4, 2, 6, 2, 5 + rw, 1 + rw], [-1, 0, 0, 1, 12, 0]);
    draw([5, 2 - rw, 5 + rw, 2, 6, 2, 5, 1], [0, -1, -1, 0, 8, 8]);

    draw([4, 3, 4, 2, 6, 2, 5, 3], [-1, 0, 0, -1, 12, 8]);
    draw([4, 3 - rw, 4, 2, 6, 2, 5 + rw, 3 - rw], [-1, 0, 0, 1, 12, 4]);
    draw([5, 2 + rw, 5 + rw, 2, 6, 2, 5, 3], [0, 1, 1, 0, 4, 0]);

    draw([6, 2, 5, 3, 5, 4, 6, 4], [1, 0, 0, 1, 0, 4]);
    draw([6, 2, 5 + rw, 3 - rw, 5 + rw, 4, 6, 4], [-1, 0, 0, 1, 12, 4]);
    draw([6, 2, 5, 3, 6 - rw, 3, 6, 3 - rw], [0, -1, -1, 0, 8, 12]);
  };

  fc();
  fl();
  fr();

  bl();
  br();

  ctx.restore();

  var guide = function() {
    var div = 8;
    ctx.strokeStyle = '#999';
    for (var i = 0; i <= div; i += 1) {

      ctx.beginPath();
      ctx.moveTo(0, size / div * i);
      ctx.lineTo(size, size / div * i);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(size / div * i, 0);
      ctx.lineTo(size / div * i, size);
      ctx.stroke();
    }
  };

//  guide();
};
