var playlist = {
  artistName: 'songTitle'
}

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign({playlist}, {Slowdive: 'song1'})
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  Object.assign({}, {name1: 'song1'})
  return playlist;
}
