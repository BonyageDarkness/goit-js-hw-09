import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector('ul.gallery');

images.forEach(image => {
  const li = document.createElement('li');
  li.classList.add('gallery-item');
  li.style.listStyleType = 'none';

  const a = document.createElement('a');
  a.classList.add('gallery-link');
  a.href = image.original;

  const img = document.createElement('img');
  img.classList.add('gallery-image');
  img.src = image.preview;
  img.dataset.source = image.original;
  img.alt = image.description;
  img.style.width = '360px';
  img.style.height = '200px';
  img.style.flexShrink = '0';
  img.style.fontSize = '0';

  a.appendChild(img);
  li.appendChild(a);
  gallery.appendChild(li);
});

gallery.style.display = 'flex';
gallery.style.width = '1440px';
gallery.style.height = '696px';
gallery.style.padding = '24px 156px';
gallery.style.flexDirection = 'row';
gallery.style.justifyContent = 'center';
gallery.style.alignItems = 'flex-start';
gallery.style.gap = '24px';
gallery.style.background = '#FFF';
gallery.style.overflow = 'auto';
gallery.style.flexWrap = 'wrap';

gallery.addEventListener('click', event => {
  event.preventDefault();
  const clickedElement = event.target;

  if (clickedElement.nodeName !== 'IMG') {
    return;
  }

  const imageSource = clickedElement.dataset.source;

  const instance = basicLightbox.create(
    `
        <div class="modal">
            <img src="${imageSource}" alt="${clickedElement.alt}" width="1112" height="640"></img>
        </div>
    `,
    {
      onShow: instance => {
        instance.element().style.backgroundColor = 'rgba(46, 47, 66, 0.8)';
      },
    }
  );

  instance.show();
});

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
