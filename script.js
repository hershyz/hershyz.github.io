// change the giraffe index every time a different mouse state is detected
function changeImage(newImage) {
    var giraffe = document.getElementById("giraffe");
    giraffe.src = newImage;
}

// objects
var videoIndex = 0;
var vids = ["vids/filtered-8E6EDB05-FEB1-489B-A93B-4CD68CF5235B.mp4", "vids/filtered-72A4A44D-3A27-4D46-8A74-1E113B9A2FCF.mp4", "vids/filtered-16462F2E-8753-401D-8795-5C599FFDDE55.mp4"]
var captions = ["December 2020 - Sitting in Front of the Mellow Mushroom Man (RIP SLIME)", "Februrary 2021 - Sitting in 2+2 After Getting Lacked by the Rain", "May 2021 - First Legal Sexmobile Snapchat Memory"]

// function to update video and title
function changeVideo() {

    // update video index
    videoIndex++;
    if (videoIndex >= vids.length) {
        videoIndex = 0
    }

    // update caption
    var messageObject = document.getElementById("message");
    messageObject.textContent = captions[videoIndex];

    // update video source
    var videoObject = document.getElementById("vidFrame");
    videoObject.src = vids[videoIndex]
    videoObject.load()
}