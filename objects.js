var playlist = {
  artistName: 'songTitle'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist.artistName = 'songTitle';
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  Object.assign({}, {name1: 'song1'})
  return playlist;
}
