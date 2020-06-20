export function toggleAlive(x,y) {
  return {
    type: 'TOGGLE_ALIVE',
    x,
    y
  };
}

export function makeRandomGrid(height,width) {
  console.log(height, width)
  return {
    type: 'MAKE_RANDOM',
    height,
    width,
  };
}

export function tick() {
  return {
    type: 'TICK'
  };
}

export function startPlaying(timerId) {
  return {
    type: 'PLAY',
    timerId
  };
}

export function stopPlaying(timerId) {
  return {
    type: 'STOP',
    timerId
  };
}

export function clear() {
  return {
    type: 'CLEAR',
  };
}
