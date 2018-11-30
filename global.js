$(document).ready(function() {

    // Top Corner Branding
    topCorner = ""
    topCorner += '<div class="lc-branding-bar">'
    topCorner +=    '<div class="lc-corner-branding">'
    topCorner +=        '<img src="http://www.thisislsr.com/wp-content/uploads/2018/10/logo.png" /> Part of Leeds Creatives'
    topCorner +=    '</div>'

    topCorner +=    '<div class="lc-corner-sitelist">'

    topCorner +=        '<div class="lc-corner-site bg-lc">'
    topCorner +=            '<a href="http://thisislsr.com"><img src="http://www.thisislsr.com/wp-content/uploads/2018/10/logo.png" /> LeedsCreatives.com</a>'
    topCorner +=        '</div>'

    topCorner +=        '<div class="lc-corner-site bg-lsr">'
    topCorner +=            '<a href="http://thisislsr.com"><img src="https://raw.githubusercontent.com/LeedsCreatives/GlobalOverlay/master/img/logo-lsr.png" /> Leeds Student Radio</a>'
    topCorner +=        '</div>'

    topCorner +=        '<div class="lc-corner-site bg-lstv">'
    topCorner +=            '<a href="http://thisislsr.com"><img src="https://raw.githubusercontent.com/LeedsCreatives/GlobalOverlay/master/img/logo-lstv.png" /> Leeds Student Television</a>'
    topCorner +=        '</div>'


    topCorner +=        '<div class="lc-corner-site bg-gryphon">'
    topCorner +=            '<a href="http://thisislsr.com"><img src="https://raw.githubusercontent.com/LeedsCreatives/GlobalOverlay/master/img/logo-gryphon.png" /> The Gryphon</a>'
    topCorner +=        '</div>'

    topCorner +=        '<div class="lc-corner-site bg-nc">'
    topCorner +=            '<a href="http://thisislsr.com"><img src="https://raw.githubusercontent.com/LeedsCreatives/GlobalOverlay/master/img/logo-nc.png" /> The Northern Connection</a>'
    topCorner +=        '</div>'

    topCorner +=    '</div>'
    topCorner += '</div>'

    $('body').prepend(topCorner);
});