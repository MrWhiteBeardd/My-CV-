document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.project-video');
    const descriptionBox = document.getElementById('video-description');

    // Add hover and click functionality to videos
    videos.forEach(function (video) {
        // Play video on hover
        video.addEventListener('mouseover', function () {
            if (this.readyState >= 3) { // Ensure the video is loaded
                this.play();
            } else {
                console.log('Video not ready to play.');
            }
        });

        // Pause and reset video on mouse out
        video.addEventListener('mouseout', function () {
            this.pause();
            this.currentTime = 0;
        });

        // Show description on click
        video.addEventListener('click', function () {
            let descriptionText = '';

            // Assign description based on video ID
            switch (this.id) {
                case 'video1':
                    descriptionText = 'Radial Engine Simulation showcasing SolidWorks 3D design and motion analysis.';
                    break;
                case 'video2':
                    descriptionText = 'A project featuring detailed mechanical assembly and animation in SolidWorks.';
                    break;
                case 'video3':
                    descriptionText = 'Dynamic model creation and rendering in SolidWorks for real-world applications.';
                    break;
                default:
                    descriptionText = 'Click on a video to see its description here.';
            }

            // Update and display the description box
            descriptionBox.textContent = descriptionText;
            descriptionBox.style.display = 'block';
        });
    });

    // Hide the description box if clicked outside the videos
    document.addEventListener('click', function (event) {
        if (!event.target.classList.contains('project-video')) {
            descriptionBox.style.display = 'none';
        }
    });
});
