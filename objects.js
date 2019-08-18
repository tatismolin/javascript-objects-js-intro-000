var playlist = {
  artistName: 'songTitle'
}

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign({}, {Slowdive: 'song1'})
  Object.assign({}, {My Bloody Valentine: 'song1'})
  Object.assign({}, {Phil Ochs: 'song1'})
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  Object.assign({}, {name1: 'song1'})
  return playlist;
}
