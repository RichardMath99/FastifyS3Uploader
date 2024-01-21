import axios from "axios"
import { useState } from "react"

function App() {

  const [files, setFiles] = useState<FileList | null>(null)

  function handleUploadFile(e: FormEvent) {
    e.preventDefault();

    if(!files || files.length === 0) {
      return
    }
  }

  const file = files && files[0];

  axios.put('https://rabbithole-dev.148fc926b8ba319d09eeb57ea843cc42.r2.cloudflarestorage.com/a928f93b-068e-4a38-a94c-47f9521a0403-teste.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=b41bcba53323eb600dd46f4fd2ce9e90%2F20240121%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20240121T024253Z&X-Amz-Expires=600&X-Amz-Signature=123665ed5a4d95e0a5b63763510facbf499a5aa4e68042b68aec3d093b3a3981&X-Amz-SignedHeaders=host&x-id=GetObject', file, {
    headers: {
      'Content-Type': 'video/mp4',
    }
  })
  
  return (
    <form onSubmit={handleUploadFile}>
      <input type="file" name="file" onChange={e => setFiles(e.target.files)}/>
      <button type="submit">Upload</button>
    </form>
  )
}

export default App
