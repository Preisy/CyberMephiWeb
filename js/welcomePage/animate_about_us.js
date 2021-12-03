var setLoc = function (loc) {
//curLoc = fixEncode(loc.replace(/#(\/|!)?/, ''));
    curLoc = fixEncode(loc);
    var l = (location.toString().match(/#(.*)/) || {})[1] || '';
    if (!l && vk.al > 1) {
        l = (location.pathname || '') + (location.search || '');
    }
    l = fixEncode(l);
    if (l.replace(/^(\/|!)/, '') != curLoc) {
        if (vk.al == 3) {
            try {
                history.pushState({}, '', '/' + curLoc);
                return;
            } catch (e) {}
        }
        window.chHashFlag = true;
        location.hash = '#' + vk.navPrefix + curLoc;
        if (withFrame && getLoc() != curLoc) {
            setFrameContent(curLoc);
        }
    }
}