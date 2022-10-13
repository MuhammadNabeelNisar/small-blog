import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { storage } from "./firebase"

export async function uploadFile({ fileName, file }) {
  return new Promise((resolve, reject) => {
    console.log("Uploading image ...")

    const storageRef = ref(storage, `user-uploads/${fileName}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        console.log("Upload is " + progress + "% done")
      },
      (error) => {
        console.error(error)
        reject(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((imgURL) => {
          console.log(`uploaded image:`, imgURL)
          resolve(imgURL)
        })
      }
    )
  })
}
