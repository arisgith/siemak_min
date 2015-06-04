
// Wait for device API libraries to load
//
function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
function onDeviceReady() {
	// Register the event listener
	document.addEventListener("backbutton", onBackKeyDown, false);
}
function toast(){
	Materialize.toast('Anda Ingin Keluar? <button onclick="onBackKeyDown2()" class="btn red">Ya</button>', 4000)
}
// Handle the back button
//
function onBackKeyDown() {
	 toast();
	 //navigator.app.exitApp();
}
function onBackKeyDown2() {
	 navigator.app.exitApp();
}
