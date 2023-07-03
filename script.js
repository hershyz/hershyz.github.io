// change the giraffe index every time a different mouse state is detected
function changeImage(newImage) {
    var giraffe = document.getElementById("giraffe");
    giraffe.src = newImage;
}

// "slideshow" objects
var videoIndex = 0;
var vids = ["vids/filtered-8E6EDB05-FEB1-489B-A93B-4CD68CF5235B.mp4", "vids/filtered-72A4A44D-3A27-4D46-8A74-1E113B9A2FCF.mp4", "vids/filtered-16462F2E-8753-401D-8795-5C599FFDDE55.mp4", "vids/RPReplay_Final1688410413.mov", "vids/filtered-DF3DF3C9-5D38-4F61-B255-19471D1B229B.mp4", "vids/filtered-97A0CE83-5FD0-47C6-ADDA-576623F7C984.mp4", "vids/filtered-93036C4C-CBC5-429C-81ED-346CBE0B0985.mp4", "vids/filtered-938A9FA9-EF88-4390-A4A0-483F29CE366B.mov", "vids/filtered-B627BB19-B998-4DCE-88FF-EE5C3D331EBB.mp4", "vids/filtered-DC13A628-D225-4527-A32E-E1B41603BE0D.mp4", "vids/filtered-5B977BBE-8C3F-41F0-9F36-E412B27E6F5D.mp4", "vids/filtered-054E638F-D43F-48B1-B0CE-92250B73B50A.mp4", "vids/filtered-68262DC5-C398-4FF9-9FD1-8F14CD719D6C.mp4", "vids/filtered-35038900-F0D5-4DC6-AC0F-98920D90C4CA.mp4", "vids/filtered-6139608B-A67F-45D7-A212-FBAB8DDB155F.mp4", "vids/filtered-2E8CAB40-4A3C-4BD6-82D8-661F53766BBA.mp4", "vids/filtered-9E7FE988-C331-479A-A2A0-937CCAB7E7C8.mp4", "vids/filtered-59129174-D85B-43C9-B0E1-3BFDD0660939.mp4", "vids/filtered-A3220592-5EFD-4408-81E7-7D2708CE9B08.mp4"]
var captions = ["December 2020 - Sitting in Front of the Mellow Mushroom Man (RIP Slime)", "Februrary 2021 - Sitting in 2+2 After Getting Lacked by the Rain", "May 2021 - First Legal Sexmobile Snapchat Memory", "June 2021 - idek what to caption this", "September 2021 - Iconic Dap Up", "November 2021 - Swag Flannel", "January 2022 - The Birthplace of Na Na Naaa", "April 2022 - Shina Whippin da Coupe", "May 2022 - Mommy Statue", "June 2022 - Opps Caught Us Lackin", "June 2022 - Skate Country", "July 2022 - 2 Years, Singing NLE Choppa", "August 2022 - PCCCHHHHHHWWWWWWW", "September 2022 - Yummy iPhone", "January 2023 - iPad Kid at Work", "April 2023 - UMich Engineering", "May 2023 - Shina Flexing Diploma", "May 2023 - GSMST Graduation", "June 2023 - Perc Aftermath"]

// function to update video and title
function changeVideo() {

    // update video index
    videoIndex++;
    if (videoIndex >= vids.length) {
        videoIndex = 0
    }

    // update caption
    var messageObject = document.getElementById("message");
    // messageObject.textContent = captions[videoIndex];
    var rawText = captions[videoIndex].split(" - ");
    var date = rawText[0];
    var caption = rawText[1];
    messageObject.innerHTML = "\"" + caption + "\"" + "<br>__<br><span class=\"bold-text\">" + date + "</span>";

    // update video source
    var videoObject = document.getElementById("vidFrame");
    videoObject.src = vids[videoIndex]
    videoObject.load()
}