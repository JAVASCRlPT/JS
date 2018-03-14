vinyl = {
    song : new Audio('http://jonathan.vincent.free.fr/la_grange.mp3'),

    playPause : function() {
        if($('#cover a').hasClass('play')) {
            vinyl.play();
        } else if($('#cover a').hasClass('pause')) {
            vinyl.pause();
        }
    },

    play : function() {
        $('#cover a').removeClass('play').addClass('pause');
        $('#container').addClass('open');
        $('#vinyl').addClass('animated');
        vinyl.song.play();
    },

    pause : function() {
        $('#cover a').removeClass('pause').addClass('play');
        $('#container').removeClass('open');
        $('#vinyl').removeClass('animated');
        vinyl.song.pause();
    }
};
