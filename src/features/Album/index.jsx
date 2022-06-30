import React from 'react';
import AlbumList from "./components/AlbumList"

function AlbumFeature(props) {
   const albumList = [
      {
        id: 1,
        img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/4/1/2/f412dc22d97cf95766a991e98f762fd1.jpg',
        title: 'All New K-Indie'
      },
      {
        id: 2,
        img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/a/a/b/1/aab17b988ad74d376c306c2f2ad5ed3e.jpg',
        title: 'Anh Em Ban Nhạc Indie Việt'
      },
      {
        id: 3,
        img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/4/9/d/049d9ddc3879383a676d785fce65693e.jpg',
        title: 'những Chàng Trai Indie Việt'
      },
      {
        id: 4,
        img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/3/2/8/b328310f06de82b7634b51b663abed64.jpg',
        title: 'Những Quý Cô Indie Việt'
      },
   ]
    return (
        <div>
          <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;