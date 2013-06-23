    var deviceClass = 'iphone-5'; //default

$(function() {

    $('#url').keyup(function(e) {
        if(e.keyCode == 13) {
            loadUrl();
        };
    });

    function loadUrl() {
        url = $('#url').val();
        $('#frame').attr('src',formatUrl(url));   
    }
    
    $('#devices li').click(function(e){
        switchDevice(e.currentTarget.classList[0]);
        
    });
    
    function formatUrl(url) {
        if(url.substring(0,7) == 'http://') {
            return url;
        } else {
            return 'http://'+url;
        }
    }
    
    function switchDevice(newDevice) {
        var olddevice = deviceClass;
        deviceClass=newDevice;
        $('#devices li').removeClass('selected');
        $('#devices').find('.'+deviceClass).addClass('selected');
        $('#device').removeClass(olddevice).addClass(deviceClass);
        $('#frame').removeClass(olddevice).addClass(deviceClass);
    }
    
});