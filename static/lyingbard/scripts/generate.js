// https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript#associating_a_formdata_object_and_a_form
ttsForm = document.getElementById("tts-form");
audioPlayer = document.getElementById("audio-player");
generatingThrobber = document.getElementById("generating-throbber");
speakButton = document.getElementById("speak-button");

function loadingStart() {
    generatingThrobber.style.visibility = "visible";
    speakButton.style.visibility = "hidden";
}
function loadingFinish() {
    generatingThrobber.style.visibility = "hidden";
    speakButton.style.visibility = "visible";
}

async function sendTTSRequest() {
    loadingStart();
    const formData = new FormData(ttsForm);

    options = {method: "POST", body: formData}
    fetch(
        "", options
    ).then(
        (response) => 
        response.json()
    ).then(
        (data) => {
            audioPlayer.src = data.audioURL
        }
    ).catch(console.error);
    loadingFinish();
}

ttsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    sendTTSRequest();
})