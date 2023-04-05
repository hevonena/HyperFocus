function pointRectCollision(p1x, p1y, p2x, p2y, s2x, s2y) {
    p2x = p2x + s2x/2;
    p2y = p2y + s2y/2;
    distx = dist(p1x, 0, p2x, 0);
    disty = dist(0, p1y, 0, p2y);
    
    return distx <= s2x/2 && disty <= s2y/2;
}

function distPointRect(p1x, p1y, p2x, p2y, s2x, s2y) {
    p2x = p2x + s2x/2;
    p2y = p2y + s2y/2;
    distx = dist(p1x, 0, p2x, 0);
    disty = dist(0, p1y, 0, p2y);
    distx -= s2x/2;
    if (distx < 0) distx = 0;
    let v = createVector(distx, disty)

    return v.mag();
}

function getRandomSubarray(arr, size) {
    let shuffled = arr.slice(0);
    let i = arr.length;
    let temp, index;
    while (i--) {
      index = Math.floor((i + 1) * random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
 }

  
function isTooClose(position, objects) {
    let minDistance = 100; // minimum distance between objects
    for (let object of objects) {
      let distance = p5.Vector.dist(position,object);
      if (distance < minDistance) {
        return true;
      }
    }
    return false;
}