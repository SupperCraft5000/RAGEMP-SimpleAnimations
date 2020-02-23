mp.events.add("simpleaim:playanim", (player, animGroup, animType, speed, moveNumber, milSec) => {
	if(!mp.players.exists(player)) return;
	if(player.vehicle) return;
	player.playAnimation(animGroup, animType, speed, moveNumber);
	if(milSec && milSec != -1) {
		player.call("quitAnimationAfter", [player, parseInt(milSec)]);
	}
});

mp.events.add("server:animations:facial", (player, animName, animDict) => {
	if(!mp.players.exists(player)) return;
	player.playFacialAnim(animName, animDict);
});

mp.events.add("simpleaim:stopAnim", (player) => {
	if(!mp.players.exists(player)) return;
	if(player.vehicle) return;
	player.stopAnimation();
});
