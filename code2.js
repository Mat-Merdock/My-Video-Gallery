let gallery = document.querySelector('.gallery');
videoData.forEach(video => {
    let container = document.createElement('div');
    container.className = 'video';
    container.dataset.category = video.category;
    container.dataset.tags = video.tags;

    let img = document.createElement('img');
    img.src = video.thumbnail;
    img.alt = video.title;
    img.onclick = () => window.open(video.url, "_blank");
    
    let title = document.createElement('span');
    title.className = 'video-title';
    title.textContent = video.title;

    container.appendChild(img);
    container.appendChild(title);
    gallery.appendChild(container);
});