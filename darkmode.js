document.querySelectorAll('.project-video').forEach(function(video) {
    video.addEventListener('mouseover', function() {
        this.play();
    });

    video.addEventListener('mouseout', function() {
        this.pause();
        this.currentTime = 0; // Reset the video to the beginning
    });

    video.addEventListener('click', function() {
        const descriptionBox = document.getElementById('video-description');
        let descriptionText = '';

        switch (this.id) {
            case 'video1':
                descriptionText = 'Description for SolidWorks Video 1';
                break;
            case 'video2':
                descriptionText = 'Description for SolidWorks Video 2';
                break;
            case 'video3':
                descriptionText = 'Description for SolidWorks Video 3';
                break;
        }

        descriptionBox.textContent = descriptionText;
        descriptionBox.style.display = 'block';
    });
});