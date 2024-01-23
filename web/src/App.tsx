import axios from "axios"; 
import { FormEvent, useState } from "react";

async function App() {
  const [files, setFiles] = useState<FileList | null>(null);

  async function handleUploadFile(e: FormEvent) {
    e.preventDefault();
    console.log('olaaaaaaaaa');

    if (!files || files.length === 0) {
      return;
    }

    const file = files[0];

    try {
      await axios.put(
        'url-video',
        file,
        {
          headers: {
            'Content-Type': 'video/mp4',
          },
        }
      );
      
      console.log('Upload successful');
    } catch (error) {
      console.error('Error uploading file', error);
    }

    console.log('olaaaaaaa');
  }

  return (
    <form onSubmit={handleUploadFile}>
      <input type="file" name="file" onChange={(e) => setFiles(e.target.files)} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default App;
