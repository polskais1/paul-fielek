var unityObjectUrl = "http://webplayer.unity3d.com/download_webplayer-3.x/3.0/uo/UnityObject2.js";
if (document.location.protocol == 'https:')
  unityObjectUrl = unityObjectUrl.replace("http://", "https://ssl-");
document.write('<script type="text\/javascript" src="' + unityObjectUrl + '"><\/script>');

var config = {
  width: 960,
  height: 600,
  params: { enableDebugging:"0" }

};

jQuery(function() {

  var u = new UnityObject2(config);

  var $missingScreen = jQuery("#unityPlayer").find(".missing");
  var $brokenScreen = jQuery("#unityPlayer").find(".broken");
  $missingScreen.hide();
  $brokenScreen.hide();

  u.observeProgress(function (progress) {
    switch(progress.pluginStatus) {
      case "broken":
        $brokenScreen.find("a").click(function (e) {
          e.stopPropagation();
          e.preventDefault();
          u.installPlugin();
          return false;
        });
        $brokenScreen.show();
      break;
      case "missing":
        $missingScreen.find("a").click(function (e) {
          e.stopPropagation();
          e.preventDefault();
          u.installPlugin();
          return false;
        });
        $missingScreen.show();
      break;
      case "installed":
        $missingScreen.remove();
      break;
      case "first":
      break;
    }
  });
  u.initPlugin(jQuery("#unityPlayer")[0], "/games/you_are_the_monst-hair.unity3d");
});
