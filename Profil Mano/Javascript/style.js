function changeImage(imageName) {
    const image = document.getElementById('profileImage');
    
    // Pastikan gambar yang dimaksud memiliki ekstensi .jpg
    if (!imageName.endsWith('.jpg')) {
        imageName += '.jpg';  
    }
    

    image.src = `/IMAGE/${imageName}`;
}

