import { Avatar, Box, Button, Card, CardContent, IconButton } from '@mui/material';
import UploadTwoToneIcon from '@mui/icons-material/UploadTwoTone';
import { ChangeEvent, useState } from 'react';
import { CloudUploadOutlined } from '@mui/icons-material';

function MasterItemImageAdd() {
  const [imageAdded, setImageAdded] = useState<string>('');

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageAdded(imageUrl);
    }
  };

  return (
      <Box>
        <input
            type="file"
            id="imageInput"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
            accept="image/*"
        />
        <label htmlFor="imageInput">
          <Avatar variant="square" alt="Full Screen Avatar"sx={{width:'100%',height:'250px'}} >
            {imageAdded && <img src={imageAdded} alt="Uploaded" style={{ width: '100%', height: '100%' }} />}
            {!imageAdded && <CloudUploadOutlined style={{ fontSize: 40 }} />}
          </Avatar>
        </label>
      </Box>
  );
}

export default MasterItemImageAdd;
