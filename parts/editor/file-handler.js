import { Extension } from '@tiptap/core';

/**
 * Uploads a file to a server and returns the URL.
 * In a real application, you would replace the placeholder endpoint.
 *
 * @param {File} file The file to upload.
 * @returns {Promise<string>} A promise that resolves with the file's URL.
 */
const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  // IMPORTANT: Replace with your actual server endpoint
  const endpoint = '/api/upload'; 

  console.log(`Uploading ${file.name} to ${endpoint}...`);

  try {
    // This is where you would make the API call to your server
    // const response = await fetch(endpoint, {
    //   method: 'POST',
    //   body: formData,
    // });

    // if (!response.ok) {
    //   throw new Error(`Server returned ${response.status}: ${response.statusText}`);
    // }

    // // Assuming the server responds with JSON: { "url": "..." }
    // const result = await response.json();
    
    // console.log(`File uploaded successfully: ${result.url}`);
    // return result.url;
    return 'google.com'

  } catch (error) {
    console.error('Upload failed:', error);
    // For demonstration, we'll fall back to a local blob URL.
    // In a real app, you would want to handle this error properly.
    alert(`Upload failed: ${error.message}. Using local file for now.`);
    return URL.createObjectURL(file);
  }
};

export const FileHandler = Extension.create({
  name: 'fileHandler',

  addCommands() {
    return {
      insertFile: (file, range) => ({ editor, chain }) => {
        uploadFile(file)
          .then((src) => {
            const transaction = editor.chain().focus();

            if (range) {
              transaction.deleteRange(range);
            }

            if (file.type.startsWith('image/')) {
              transaction.setImage({ src });
            } else {
              transaction.insertContent({
                type: 'text',
                text: file.name,
                marks: [
                  {
                    type: 'link',
                    attrs: {
                      href: src,
                      download: file.name,
                    },
                  },
                ],
              });
            }

            transaction.run();
          })
          .catch((error) => {
            console.error('Could not handle file insertion:', error);
          });

        return true;
      },
    };
  },
}); 