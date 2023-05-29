const carouselBandsObj = [
    {
        id: 1,
        artist: "Jinjer",
        img: 'https://www.wikimetal.com.br/wp-content/uploads/2022/10/jinjer-@-carioca-club-by-leca-suzuki-01.10.2022-39.jpg',
    },
    {
        id: 2,
        artist: "Royal Blood",
        img: 'https://www.nme.com/wp-content/uploads/2023/04/Royal-Blood@2000x1270.jpg',
    },
    {
        id: 3,
        artist: "Metallica",
        img: 'https://images.pulsewebcontent.com/photos/2023/04_Apr/800/MetallicaJAMES20203Getty800_4_22.jpg',
    },
    {
        id: 4,
        artist: "Spiritbox",
        img: 'https://canadianbeats.ca/wp-content/uploads/2023/05/Spiritbox-31-scaled.jpg',
    },
    {
        id: 5,
        artist: "Joe Bonamassa",
        img: 'https://guitar.com/wp-content/uploads/2023/02/joe-bonamassa-tales-of-time@2000x1500.jpg',
    },
    {
        id: 6,
        artist: "Larkin Poe",
        img: 'https://www.leparisien.fr/resizer/MpUL1txc-a2yJdXrDuFfABN-730=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/DNKHHLGYURDU7KK6CYJ272BFLM.jpg',
    },
    {
        id: 7,
        artist: "Blues Pills",
        img: 'https://igormiranda.com.br/wp-content/uploads/2022/10/Blues-Pills-Sao-Paulo-2022-38-min-1024x683.jpg',
    },
]

let bands = carouselBandsObj.map(function(band) {
    if(band.artist === 'Jinjer') {
        return `
            <div data-bs-interval="1000" class="carousel-item active">
                <img class="d-block w-100" src="${band.img}" alt="Foto de ${band.artist}" width="75%" />
                <div class="carousel-caption">
                    <h2>Foto de ${band.artist}</h2>    
                </div>
            </div>
            `;
    } else {
        return `
            <div data-bs-interval="1000" class="carousel-item" >
                <img class="d-block w-100" src="${band.img}" alt="Foto de ${band.artist}" width="75%" />
                <div class="carousel-caption">
                    <h2>Foto de ${band.artist}</h2>    
                </div>
            </div>
            `;
    }
})

document.querySelector('.carousel-inner').innerHTML = bands.join("");

