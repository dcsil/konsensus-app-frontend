import client from 'api/axios';

export const uploadFile = async (formData) => {
    await client
        .post('file/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
}

export const reuploadFile = async (formData, fileId) => {
    await client
        .put(`file/${fileId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
}