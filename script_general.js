(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer","this.IconButton_13490896_3BE6_E82F_41B5_D9BB8BA5F682"],"xrPanelsEnabled":true,"scrollBarMargin":2,"id":"rootPlayer","start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_13490896_3BE6_E82F_41B5_D9BB8BA5F682], 'cardboardAvailable')","propagateClick":false,"backgroundColor":["#FFFFFF"],"data":{"locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"rate":1},"defaultLocale":"en","history":{},"displayTooltipInTouchScreens":true,"name":"Player20945"},"backgroundColorRatios":[0],"layout":"absolute","scrollBarColor":"#000000","class":"Player","gap":10,"minHeight":0,"minWidth":0,"height":"100%","scripts":{"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setMapLocation":TDV.Tour.Script.setMapLocation,"playAudioList":TDV.Tour.Script.playAudioList,"openLink":TDV.Tour.Script.openLink,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"clone":TDV.Tour.Script.clone,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setValue":TDV.Tour.Script.setValue,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMediaByName":TDV.Tour.Script.getMediaByName,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"shareSocial":TDV.Tour.Script.shareSocial,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"showPopupImage":TDV.Tour.Script.showPopupImage,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getKey":TDV.Tour.Script.getKey,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"showWindowBase":TDV.Tour.Script.showWindowBase,"showWindow":TDV.Tour.Script.showWindow,"mixObject":TDV.Tour.Script.mixObject,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getPixels":TDV.Tour.Script.getPixels,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getOverlays":TDV.Tour.Script.getOverlays,"startMeasurement":TDV.Tour.Script.startMeasurement,"resumePlayers":TDV.Tour.Script.resumePlayers,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"toggleVR":TDV.Tour.Script.toggleVR,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"init":TDV.Tour.Script.init,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizStart":TDV.Tour.Script.quizStart,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"cloneBindings":TDV.Tour.Script.cloneBindings,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getMainViewer":TDV.Tour.Script.getMainViewer,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"historyGoBack":TDV.Tour.Script.historyGoBack,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizFinish":TDV.Tour.Script.quizFinish,"disableVR":TDV.Tour.Script.disableVR,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"downloadFile":TDV.Tour.Script.downloadFile,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"executeJS":TDV.Tour.Script.executeJS,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"textToSpeech":TDV.Tour.Script.textToSpeech,"createTween":TDV.Tour.Script.createTween,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"initQuiz":TDV.Tour.Script.initQuiz,"getComponentByName":TDV.Tour.Script.getComponentByName,"enableVR":TDV.Tour.Script.enableVR,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"unloadViewer":TDV.Tour.Script.unloadViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"registerKey":TDV.Tour.Script.registerKey,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"isPanorama":TDV.Tour.Script.isPanorama,"unregisterKey":TDV.Tour.Script.unregisterKey,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"existsKey":TDV.Tour.Script.existsKey,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"translate":TDV.Tour.Script.translate,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setLocale":TDV.Tour.Script.setLocale,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF},"defaultMenu":["fullscreen","mute","rotation"],"width":"100%","hash": "c8fa27ffeec295a497a4ff162bd208ef5b5a0817be9f5eaace44a0498967b3f2", "definitions": [{"backgroundOpacity":0,"horizontalAlign":"center","id":"IconButton_13490896_3BE6_E82F_41B5_D9BB8BA5F682","propagateClick":false,"data":{"name":"VR","visibleIfCardboardAvailable":true},"tabIndex":0,"right":"42.75%","iconURL":"skin/IconButton_13490896_3BE6_E82F_41B5_D9BB8BA5F682.png","maxHeight":210,"maxWidth":210,"class":"IconButton","verticalAlign":"middle","minHeight":1,"minWidth":1,"bottom":"25.58%","width":210,"height":210},{"progressBottom":10,"playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadBorderColor":"#000000","vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowBlurRadius":3,"progressHeight":2,"playbackBarBackgroundOpacity":1,"width":"100%","progressBorderSize":0,"subtitlesTextShadowOpacity":1,"playbackBarBorderSize":0,"toolTipBorderColor":"#767676","progressBarBorderSize":0,"toolTipTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","propagateClick":false,"playbackBarLeft":0,"toolTipPaddingBottom":4,"toolTipFontFamily":"Arial","progressBarBorderRadius":2,"left":0,"subtitlesTop":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadHeight":15,"data":{"name":"Main Viewer"},"playbackBarHeadShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontColor":"#FFFFFF","progressBorderRadius":2,"firstTransitionDuration":0,"subtitlesFontSize":"3vmin","playbackBarHeadBorderSize":0,"toolTipShadowColor":"#333138","toolTipFontColor":"#606060","subtitlesTextShadowVerticalLength":1,"vrPointerSelectionTime":2000,"toolTipPaddingRight":6,"progressLeft":"33%","vrThumbstickRotationStep":20,"playbackBarHeadShadow":true,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"toolTipPaddingLeft":6,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesBottom":50,"playbackBarHeight":10,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"id":"MainViewer","subtitlesBorderColor":"#FFFFFF","vrPointerColor":"#FFFFFF","playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"subtitlesFontFamily":"Arial","playbackBarHeadShadowOpacity":0.7,"progressBackgroundColorRatios":[0],"class":"ViewerArea","progressRight":"33%","minHeight":50,"progressOpacity":0.7,"minWidth":100,"progressBarBorderColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","top":0,"toolTipPaddingTop":4,"progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","progressBorderColor":"#000000","playbackBarBorderRadius":0,"height":"100%","playbackBarHeadBorderRadius":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarProgressBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","progressBackgroundColor":["#000000"],"toolTipFontSize":"1.11vmin","playbackBarHeadShadowVerticalLength":0,"toolTipBackgroundColor":"#F6F6F6"},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_1154DAAB_3BFA_E865_41CA_962C29E24574","class":"PanoramaCamera","id":"panorama_12900233_3BFA_1865_41CB_E329E339BDFD_camera","initialPosition":{"pitch":-14.19,"class":"PanoramaCameraPosition","yaw":173.01}},{"displayPlaybackBar":true,"class":"PanoramaPlayer","viewerArea":"this.MainViewer","arrowKeysAction":"translate","keepModel3DLoadedWithoutLocation":true,"buttonCardboardView":["this.IconButton_13490896_3BE6_E82F_41B5_D9BB8BA5F682"],"mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","aaEnabled":true},{"id":"mainPlayList","items":[{"camera":"this.panorama_12900233_3BFA_1865_41CB_E329E339BDFD_camera","media":"this.panorama_12900233_3BFA_1865_41CB_E329E339BDFD","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer"}],"class":"PlayList"},{"frames":[{"cube":{"class":"ImageResource","levels":[{"colCount":36,"rowCount":6,"height":3072,"url":"media/panorama_12900233_3BFA_1865_41CB_E329E339BDFD_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","width":18432,"tags":"ondemand"},{"colCount":18,"rowCount":3,"height":1536,"url":"media/panorama_12900233_3BFA_1865_41CB_E329E339BDFD_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","width":9216,"tags":"ondemand"},{"colCount":12,"rowCount":2,"height":1024,"url":"media/panorama_12900233_3BFA_1865_41CB_E329E339BDFD_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","width":6144,"tags":"ondemand"},{"colCount":6,"rowCount":1,"height":512,"url":"media/panorama_12900233_3BFA_1865_41CB_E329E339BDFD_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","width":3072,"tags":["ondemand","preload"]}]},"thumbnailUrl":"media/panorama_12900233_3BFA_1865_41CB_E329E339BDFD_t.webp","class":"CubicPanoramaFrame"}],"class":"Panorama","vfov":180,"thumbnailUrl":"media/panorama_12900233_3BFA_1865_41CB_E329E339BDFD_t.webp","hfov":360,"data":{"label":"Forest"},"id":"panorama_12900233_3BFA_1865_41CB_E329E339BDFD","hfovMin":"120%","hfovMax":130,"label":trans('panorama_12900233_3BFA_1865_41CB_E329E339BDFD.label')},{"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_1154DAAB_3BFA_E865_41CA_962C29E24574"}]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.0, Tue Aug 25 2026