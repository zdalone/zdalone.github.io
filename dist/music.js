const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "理想三旬",
        artist: '陈鸿宇',
        url: 'http://www.ytmp3.cn/down/46483.mp3',
        cover: 'http://cdnimg103.lizhi.fm/audio_cover/2016/04/12/27782248821326471_320x320.jpg',
      }
    ]
});
